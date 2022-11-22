import CoinGecko from "coingecko-api";
import TelegramBot from "node-telegram-bot-api";
import {config} from "./config/default.js";
import {gameOptions, nextChamber, youLost} from "./btns.js";

const token = config;

const bot = new TelegramBot(token, {polling: true});
const CoinGeckoClient = new CoinGecko();

// ===================================================

const dataCoins = {
    coin: [],
    markets: [],
    tickers: [],
};

const trueOfFalse = async (id, chamber) => {
    if((chamber == 0) || (Math.random()*100 < 100/6)) {
        await bot.sendMessage(id, `кол-во перед смертью: ${chamber}`);
        return await  bot.sendMessage(id, "Пуля в лоб", youLost);
    }
    await bot.sendMessage(id, `кол-во промохов: ${chamber}`);
    await bot.sendMessage(id, "Повезло... ", nextChamber);
 }

function commandStart() {

    bot.setMyCommands([
        {command: "/start", description: "Начни свой путь сначала, самурай"},
        {command: "/next", description: "Узнай, что ты можешь."},
        {command: "/game", description: 'Сыграй в игру: "Русская рулетка'},
        {command: "/clean", description: "Удалить сообщения."},
        {command: "/exchange", description: "Обмены валют"},
        {command: "/coinslist", description: "Список монет"},
        {command: "/data", description: "Обновление списка монет"},
        {command: "/markets", description: "Обновление списка бирж"},


    ]);

    bot.on("message", async msg => {
        const name = `${msg.from.first_name}`,
              chatId = msg.chat.id;
    
        if(msg.text === "/start") {
            await bot.sendMessage(chatId, `Добро пожаловать, ${name}. Ты выбрал верный путь.`);
            return  bot.sendSticker(chatId, "https://tlgrm.eu/_/stickers/dff/7af/dff7afcf-5d54-3d08-9867-bc8820f8d87e/5.webp");
        
        }

        if(msg.text === "/game") {
            await bot.sendMessage(chatId, "Ок, тогда я кручу барабан пистолета");
            setTimeout(() => {
                bot.sendMessage(chatId, "Ещё кручу...");
            }, 2000);
            
            gun.chamber = 6;

            return setTimeout(() => {          
                bot.sendMessage(chatId,"Надеюсь, что удача на твоей стороне.", gameOptions);
            }, 3500);

        }
        
        if(msg.text === "/next") {
            return bot.sendMessage(chatId,"В разработке");
        }

        if(msg.text === "/clean") {
            bot.onText(/\/clean/i, async msg => {
                for (let i = 0; i < 101; i++) {
                    bot.deleteMessage( msg.chat.id, msg.message_id-i)
                    .catch( er => {return} );
                }
            });

            return;
            
        }

        if(msg.text === '/coinslist') {
            const coinsList = async () => {
                let list = await CoinGeckoClient.coins.list();
                const data = await list.data; // array of coins
                const res = [];
                return await data.map(({name}) => name.match(/^Bit/g) !== null && name.length === 7 ? dataCoins.coin.push(name) : "none");
                // return bot.sendMessage(chatId, `${}`);
            }
            return coinsList();
        }

        if(msg.text === "/data") {
            const searchCoins = async () => {
                const list = await CoinGeckoClient.coins.list();
                let counter = 0;
                return await list.data.map(obj => {
                    counter++;
                    return dataCoins.coin.push({
                        id: counter--,
                        "coin-id": obj.id
                    });
                });
                // const coinsList = await CoinGeckoClient.coins.fetch(res[5673], {});
                // for(let coin of res) {   
                //     const coinsList = await CoinGeckoClient.coins.fetch(coin, {});

                // }

            }

            return searchCoins();
        }

        if(msg.text === "/exchange") {
            const exchange = async () => {
                const {coin, markets} = dataCoins;
                // let data;
                // for(let i = 0; i < markets.length; i++) {
                //     for(let k = 0; k < coin.length; k++) {
                //         data = await CoinGeckoClient.exchanges.fetchTickers(markets[i], {
                //             coin_ids: coin[i]
                //         });
                //     }
                // }

                console.log(coin, markets);

            }

            return exchange();
        }

        if(msg.text === "/markets") {
            const searchMarkets = async() => {
                const importantMarkets = ["Binance", "KuCoin", "MEXC Global", "Huobi Global", "Bybit", "Gate.io", "OKX", "WhiteBIT"];
                let listMarkets = await CoinGeckoClient.exchanges.list();
                const {data} = listMarkets;
                const {markets} = dataCoins;
                
                for(let i = 0; i < importantMarkets.length; i++) {
                    data.map(market => market.name.toLowerCase() === importantMarkets[i].toLowerCase() ? markets.push(market) : 'none');
                }

            }

            return searchMarkets();
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



