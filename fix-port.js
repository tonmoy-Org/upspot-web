const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function fix() {
  try {
    await ssh.connect({
      host: '145.223.22.69',
      username: 'root',
      password: "Ti13xphE'5ZU&7Vx"
    });
    console.log('Connected');
    
    // Start PM2 on port 3001
    await ssh.execCommand('pm2 delete upspot');
    await ssh.execCommand('PORT=3001 pm2 start npm --name "upspot" -- run start', { cwd: '/var/www/upspot' });
    await ssh.execCommand('pm2 save');
    
    // Update Nginx config
    await ssh.execCommand("sed -i 's/proxy_pass http:\\/\\/localhost:3000;/proxy_pass http:\\/\\/localhost:3001;/g' /etc/nginx/sites-available/upspot");
    
    // Restart Nginx
    await ssh.execCommand('systemctl restart nginx');
    console.log('Fixed');
  } catch (err) {
    console.error(err);
  } finally {
    ssh.dispose();
  }
}
fix();
