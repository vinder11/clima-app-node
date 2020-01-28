const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=de2fd64e9e0a607edcc868edd2a703cb&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}