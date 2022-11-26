require('dotenv').config();
const { meme } = require('../functions/meme.js');
const { cursed } = require('../functions/cursed.js');

module.exports = async (client, message) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;
    let args = message.content.substring(process.env.PREFIX.length).split(' ');
    let command = args.shift();

    if (message.content.startsWith(process.env.PREFIX)) {
        if(args[0] === 'c'){
            if(args[1] === 'm'){
                message.channel.send("done")
            }
        }
    }

    switch(command) {
        case 'help': {
            message.reply(`AHH! WHY WOULD U WAKE ME UP?? JUST USE ${process.env.PREFIX}c <cursedimagetopic> FOR CURSED IMAGES OR  ${process.env.PREFIX}m <memetopic> FOR A MEME. NOW JUST LEAVE ME ALONE ALRIGHT?!`);
            break;
        }

        case 'pingme': {
            message.reply('Pong!');
            break;
        }

        case 'c': {
            if (!args[0]) {
                return message.reply('What are you even trying to search????!!!!');
            } else {
                cursed(message);
                console.log('Someone was sent a cursed image about ' + args[0]);
            }

            break;
        }

        case 'm': {
            if (!args[0]) {
                return message.reply('What are you even trying to search????!!!!');
            } else {
                meme(message);
                console.log('Someone was sent a meme about ' + args[0]);
            }

            break;
        }

        case 'pm': {
            meme(message);
            console.log('Someone got a plain meme');
        }
    }
};