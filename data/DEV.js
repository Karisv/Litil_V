const mongoose = require('mongoose');
const planetSchema = require('../schemas/planet');
const coordinatesSchema = require('../schemas/coordinate');


const connection = mongoose.createConnection('mongodb://erihrenekkihi:erihrenekkihi69@ds024548.mlab.com:24548/liftoff-dev', { 
    useNewUrlParser: true 
});



module.exports = {
    Planet: connection.model('planets', planetSchema),
    Coordinate: connection.model('coordinates', coordinatesSchema),
    connection
};
