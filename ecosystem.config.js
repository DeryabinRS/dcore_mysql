module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.'
  }],

  deploy : {
    production : {
      key  : 'key.ppk',
      host : 'ovz3.zmeyhb.wmekm.vps.myjino.ru',
      ref  : 'origin/main',
      repo : 'https://github.com/DeryabinRS/dcore_mysql.git',
      path : '/home/deryabinrs',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
