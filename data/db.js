const mongoose = require('mongoose');
const planetSchema = require('../schemas/planet');
const coordinatesSchema = require('../schemas/coordinate');

let dbstr = process.env.DB
const connection = mongoose.createConnection(dbstr, { 
    useNewUrlParser: true 
});



module.exports = {
    Planet: connection.model('planets', planetSchema),
    Coordinate: connection.model('coordinates', coordinatesSchema),
    connection
};
