const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '3f489887f1msh36a7f439d9a3295p1b2892jsn835ce393f899' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direcciones = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcciones,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}