// const TelegramApi = require("node-telegram-bot-api");
import TelegramBot from "node-telegram-bot-api";
import {config} from "./config/default.js";
import {gameOptions, nextChamber, youLost} from "./btns.js";

const token = config;

const bot = new TelegramBot(token, {polling: true});

// ===================================================

const gun = {};

const trueOfFalse = async (id, chamber) => {
    if((chamber == 0) || (Math.random()*100 < 100/6)) {
        return await  bot.sendMessage(id, "Пуля в лоб", youLost);
    }
    await bot.sendMessage(id, "Повезло... ", nextChamber);
 }

function commandStart() {

    bot.setMyCommands([
        {command: "/start", description: "Начни свой путь сначала, самурай"},
        {command: "/next", description: "Узнай, что ты можешь."},
        {command: "/game", description: 'Сыграй в игру: "Русская рулетка'},
        {command: "/clean", description: "Удалить сообщения."},
    ]);

    bot.on("message", async msg => {
        const name = `${msg.from.first_name}`,
              chatId = msg.chat.id;
    
        if(msg.text.toLowerCase() === "/start") {
            await bot.sendMessage(chatId, `Добро пожаловать, ${name}. Ты выбрал верный путь.`);
            return  bot.sendSticker(chatId, "https://tlgrm.eu/_/stickers/dff/7af/dff7afcf-5d54-3d08-9867-bc8820f8d87e/5.webp");
        
        }

        if(msg.text.toLowerCase() === "/game") {
            await bot.sendMessage(chatId, "Ок, тогда я кручу барабан пистолета");
            setTimeout(() => {
                bot.sendMessage(chatId, "Ещё кручу...");
            }, 2000);
            
            gun.chamber = 6;

            return setTimeout(() => {          
                bot.sendMessage(chatId,"Надеюсь, что удача на твоей стороне.", gameOptions);
            }, 3500);

        }
        
        if(msg.text.toLowerCase() === "/next") {
            return bot.sendMessage(chatId,"В разработке");
        }

        if(msg.text.toLowerCase() === "/clean") {
            bot.onText(/\/clean/i, async msg => {
                for (let i = 0; i < 101; i++) {
                    bot.deleteMessage( msg.chat.id, msg.message_id-i)
                    .catch( er => {return} );
                }
            });

            return;
            
        }
        
        return bot.sendMessage(chatId, "Что-то пошло не так");
    });

    bot.on("callback_query", async msg => {
        const data = msg.data,
              chatId = msg.message.chat.id;

        if(data === "/play") {
            return trueOfFalse(chatId, gun.chamber);
        }

        if(data === "/chamber") {
            gun.chamber--;
            return trueOfFalse(chatId, gun.chamber);
        }

        if( data === "/again") {
            bot.sendMessage(chatId, "Хорошо, я снова кручу барабан...");
            
            gun.chamber = 6;

            return setTimeout(() => {
                bot.sendMessage(chatId, "Вперёд", gameOptions);
            }, 2000);

        }
            
    });


}

commandStart();



