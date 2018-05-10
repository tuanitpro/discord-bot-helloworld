var Service = require('node-service-linux').Service;
 
// Create a new service object
var svc = new Service({
  name:'DiscordBot',
  description: 'The nodejs.org example web server.',
  script: 'bot.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();

// https://www.npmjs.com/package/node-service-linux