const mongoose = require('mongoose');
const planetSchema = require('../schemas/planets');
const coordinatesSchema = require('../schemas/coordinates');



const connection = mongoose.createConnection('mongodb://joeyy69:ford69@ds024548.mlab.com:24548/liftoff-test', { 
    useNewUrlParser: true 
});


module.exports = {
    Planet: connection.model('planets', planetSchema),
    Coordinate: connection.model('coordinates', coordinatesSchema),
    connection
};
