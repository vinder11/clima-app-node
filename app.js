const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de las ciudades para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log);*/
/*
lugar.getLugarLatLng(argv.direccion)
    .then(lu => console.log(lu));*/
/*clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);*/

const getInfo = (direccion) => {
    try {
        lugar.getLugarLatLng(direccion)
            .then(coord => {
                clima.getClima(coord.lat, coord.lng)
                    .then(cli => console.log(`El clima de ${direccion} es ${cli}`))
                    .catch(
                        console.log
                    );
            })
            .catch(
                console.log
            );
    } catch (error) {
        console.log(`No se pudo determinar el clima de ${direccion}`)
    }

}

const getInfoFer = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${direccion} es ${temp}`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion);
getInfoFer(argv.direccion).then(console.log).catch(console.log);