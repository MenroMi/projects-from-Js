const postData = async (url, data) => { // dodajemy kolejkę async
    const res = await fetch(url, { // najpierw ten kod
        method: "POST", // how
        headers: {'Content-type': 'application/json'}, // how
        body: data   // what exactly? 
    });

    return await res.json(); // dopiero później ten jako drugi

};

const getData = async (url) => {
    const getReq = await fetch(url);

    if (!getReq.ok) {
        throw new Error(`Could not fetch ${url}, status: ${getReq.status}`);
    }

    return await getReq.json(); // skoro json format jest na backendzie strony
    // to przy odbieraniu danych w json-formacie  metoda json() parsuje w obiekt js
};

export {postData, getData};