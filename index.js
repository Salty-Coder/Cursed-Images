const Discord = require('discord.js');
const bot = new Discord.Client();

const cheerio = require('cheerio');

const request = require('request');




const token = 'token here';

const PREFIX = 'c!';

bot.on('ready', () =>{
    console.log('BOT SUCCESSFULLY STARTED!');
    bot.user.setActivity('chat for c!help', {type: 'WATCHING'}).catch(console.error)
})

bot.on('message', message=>{
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ")
    let command = args.shift()

    if (message.content.startsWith(PREFIX)){
        if(args[0] === 'c'){
            if(args[1] === 'm'){
                message.channel.send("done")
            }
        }
    }

    switch(command){


        case 'help':
            message.reply('```AHH! WHY WOULD U WAKE ME UP?? JUST USE c!c <cursedimagetopic> FOR CURSED IMAGES OR c!m <memetopic> FOR A MEME. NOW JUST LEAVE ME ALONE ALRIGHT?!```');
            break;


        case 'pingme':
            message.reply('Pong!');
            break;


        case 'c':
            if(!args[0]) return message.reply('What are you even trying to search????!!!!')

            else{
                cursed(message);
                console.log('Someone was sent a cursed image about ' + args[0]);}

            break;

        case 'm':
            if(!args[0]) return message.reply('What are you even trying to search????!!!!');

            else{
                meme(message);
                console.log('Someone was sent a meme about ' + args[0]);}

            break;

        case 'pm':
            meme(message);
            console.log('Someone got a plain meme');

    }
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function cursed(message){

    var options = {
        url: 'https://results.dogpile.com/serp?qc=images&q=' + 'cursed ' + message.content.substring(PREFIX.length).split(" "),
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            'User-Agent': 'Chrome'
        }
    };

    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });

}





function meme(message){

    var options = {
        url: 'https://results.dogpile.com/serp?qc=images&q=' + message.content.substring(PREFIX.length).split(" ") + 'meme',
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            'User-Agent': 'Chrome'
        }
    };

    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });

}



bot.login(token);