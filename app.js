const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));

client.on('message', (msg) => {

  var input = msg.content.split(" ");

  if(input[0]=='?fuel' && input[1]=='help'){
      msg.channel.send('**Usage:** ?fuel (Race/Stint time in mins,Average laptime in seconds,Fuel consumption per lap\n)**Example:**?fuel 67,98.500,3.30');
  }else if(input[0]=='?fuel' && input[1]!='help'){

    var second_argument = input[1];
    var args = second_argument.split(",");
    var stint_time = args[0];
    var avg_laptime = args[1];
    var fc = args[2];
    var total_laps = parseFloat(stint_time*60)/parseFloat(avg_laptime);
    total_laps = Math.ceil(total_laps);
    var total_fuel = Math.ceil(total_laps * parseFloat(fc));
    //msg.channel.send('**Total Fuel Required:** ' + total_fuel + ' Litres');
    msg.channel.send("**Total Fuel Required: **" + total_fuel + "litres");
  }

});