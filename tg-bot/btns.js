const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Жми на курок!", callback_data: "/play"}, {text: 'Уходишь?', callback_data: "/main"}]
        ]
    })
};

const nextChamber = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Жми ещё.", callback_data: "/chamber"}]
        ]
    })
};

const youLost = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "BANG!", callback_data: "you-lost"}, {text: "Попробуешь ещё?", callback_data: "/again"}],
            [{text: "Главное меню", callback_data: "/main"}]
        ]
    })
};


export {gameOptions, nextChamber, youLost};