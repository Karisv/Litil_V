const mongoose = require('mongoose');
const planetSchema = require('../schemas/planet');
const coordinatesSchema = require('../schemas/coordinate');

let dbstr = process.env.DB || "mongodb://erihrenekkihi:erihrenekkihi69@ds024548.mlab.com:24548/liftoff-dev"
const connection = mongoose.createConnection(dbstr, { 
    useNewUrlParser: true 
});



module.exports = {
    Planet: connection.model('planets', planetSchema),
    Coordinate: connection.model('coordinates', coordinatesSchema),
    connection
};
