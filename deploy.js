const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();
const path = require('path');

async function deploy() {
  console.log('Connecting to VPS...');
  try {
    await ssh.connect({
      host: '145.223.22.69',
      username: 'root',
      password: "Ti13xphE'5ZU&7Vx"
    });
    console.log('Connected successfully!');

    // 1. Install dependencies
    console.log('Installing Node.js, Nginx, and PM2...');
    await ssh.execCommand('apt-get update');
    await ssh.execCommand('curl -fsSL https://deb.nodesource.com/setup_20.x | bash -');
    await ssh.execCommand('apt-get install -y nodejs nginx certbot python3-certbot-nginx');
    await ssh.execCommand('npm install -g pm2');

    // 2. Upload files
    console.log('Uploading application files...');
    await ssh.execCommand('mkdir -p /var/www/upspot');
    const localFile = path.join(__dirname, 'upspot.tar.gz');
    await ssh.putFile(localFile, '/var/www/upspot.tar.gz');

    // 3. Extract and build
    console.log('Extracting and building application...');
    await ssh.execCommand('tar -xzf /var/www/upspot.tar.gz -C /var/www/upspot');
    
    // Check if package.json has dependencies and build the project
    const buildResult = await ssh.execCommand('npm install && npm run build', { cwd: '/var/www/upspot' });
    console.log(buildResult.stdout);
    if (buildResult.stderr) console.error(buildResult.stderr);

    // 4. Start PM2
    console.log('Starting application with PM2...');
    await ssh.execCommand('pm2 delete upspot || true'); // delete old instance if exists
    await ssh.execCommand('PORT=3001 pm2 start npm --name "upspot" -- run start', { cwd: '/var/www/upspot' });
    await ssh.execCommand('pm2 save');
    await ssh.execCommand('pm2 startup systemd -u root --hp /root || true');

    // 5. Configure Nginx
    console.log('Configuring Nginx...');
    const checkNginx = await ssh.execCommand('test -f /etc/nginx/sites-available/upspot && echo "exists" || echo "not_exists"');
    if (checkNginx.stdout.trim() === 'not_exists') {
        const nginxConfig = `
server {
    listen 80;
    server_name upspotlimited.com www.upspotlimited.com;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
`;
        await ssh.execCommand(`cat > /etc/nginx/sites-available/upspot << 'EOF'\n${nginxConfig}\nEOF`);
        await ssh.execCommand('ln -sf /etc/nginx/sites-available/upspot /etc/nginx/sites-enabled/');
        await ssh.execCommand('rm -f /etc/nginx/sites-enabled/default');
        const nginxTest = await ssh.execCommand('nginx -t');
        console.log('Nginx test:', nginxTest.stderr);
        await ssh.execCommand('systemctl restart nginx');
    } else {
        console.log('Nginx config already exists. Skipping overwrite to preserve SSL.');
    }

    // 6. Setup SSL
    console.log('Generating SSL certificate...');
    const sslResult = await ssh.execCommand('certbot --nginx -d upspotlimited.com -d www.upspotlimited.com --non-interactive --agree-tos -m upspotlimited@gmail.com --redirect');
    console.log('Certbot output:', sslResult.stdout);
    if (sslResult.stderr) console.error('Certbot error/info:', sslResult.stderr);

    console.log('Deployment completed successfully!');
  } catch (err) {
    console.error('Deployment failed:', err);
  } finally {
    ssh.dispose();
  }
}

deploy();
