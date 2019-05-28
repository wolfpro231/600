const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
var adminprefix = '.'


const developers = ["489896723397869578"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'st1')) {
    client.user.setGame(argresult);
      message.channel.send(`**تـــ تغيير الحالة ــم   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "st2")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'st3')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تـــ تغيير الحالة ــم   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تـــ تغيير الحالة ــم   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**تـــ تغيير الحالة ــم**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
