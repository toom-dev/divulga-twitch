var ComfyJS = require("comfy.js");
var dotenv = require('dotenv').config();



ComfyJS.onCommand = (user, command, message, flags, extra) => {

    if (flags.broadcaster && command === "giripoca" && message === '') {
        ComfyJS.Say(`Digite o nome do canal para poder divulgar! (ex: !${command} joaozinho_1)`);
    } else if (flags.broadcaster && command === `giripoca` && message != '') {
        ComfyJS.Say(`https://www.twitch.tv/${message}`);
        document.querySelector('h1#haha').innerText = userBadges;
        
    }
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );