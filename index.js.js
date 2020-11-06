const {
  tokens,
  voice_channel,
  text_channel,
  your_server
} = require("./config.js");
const time = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const Discord = require("discord.js");
tokens.forEach(token => {
  const client = new Discord.Client();
  client.login(token);

  client.on("ready", () => {
    console.log(client.user.tag)
    client.user.setActivity('Made by: None#7772' )
  });
  client.on('message', message =>{
    if(message.author.id === '742609743713140776'){
             if(message.content === '!startbump'){
               let x = client.channels.get('773934637294157855')
               x.send('!d bump')
               setInterval(() => {
                 x.send('!d bump')
                }, 1000*7200);
             }
    
    }

  });
});