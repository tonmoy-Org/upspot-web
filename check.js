const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function check() {
  try {
    await ssh.connect({
      host: '145.223.22.69',
      username: 'root',
      password: "Ti13xphE'5ZU&7Vx"
    });
    const status = await ssh.execCommand('pm2 status');
    console.log(status.stdout);
    
    const logs = await ssh.execCommand('pm2 logs upspot --lines 20 --nostream');
    console.log(logs.stdout);
    console.log(logs.stderr);
    
    const ports = await ssh.execCommand('netstat -tulnp | grep 3000');
    console.log('Port 3000:', ports.stdout);
    
  } catch (err) {
    console.error(err);
  } finally {
    ssh.dispose();
  }
}
check();
