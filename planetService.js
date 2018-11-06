const EventEmitter = require('events');
const { Planet } = require('./data/db.js')
const { Coordinate } = require('./data/db.js')


class PlanetService extends EventEmitter {
    constructor() {
        super();
        this.events = {
            GET_ALL_PLANETS: 'GET_ALL_PLANTES',
            GET_ALL_PLANTES_ID: 'GET_ALL_PLANTES_ID',
            CREATE_COORDINATES: 'CREATE_COORDINATES'
        }
    }

    getAllPlanets() {
        Planet.find({}, (err, planets) => {
            if (!planets) { this.emit('error', { statusCode: 404, message: 'Not found' }); }
            else if (err) { this.emit('error', { statusCode: 500, message: err }); }
            else { this.emit(this.events.GET_ALL_PLANETS, planets); }
        });
    };

    getCoordinatesByPlanetId(id) {
        Coordinate.find({ planetId: id }, (err, data) => {
            console.log(id);
            if (!data) { this.emit('error', { statusCode: 404, message: 'Not found' }); }
            else if (err) { this.emit('error', { statusCode: 500, message: err }); }
            else { this.emit(this.events.GET_ALL_PLANTES_ID, data); }
        })
    }

    addCoordinates(id, body) {
        Coordinate.find({ planetId: id }, (err, coordinates) => {
            if (!coordinates) {
                this.emit('error', { statusCode: 400, message: 'Planet doesn' })
            } else if (err) { this.emit('error', { statusCode: 500, message: err }); }
            else {
                let input = {
                    planetId: id,
                    latitude: body.latitude,
                    longitude: body.longitude
                }
                Coordinate.create(input, (err, body) => {
                    if (err) { this.emit('error', { statusCode: 500, message: err }); }
                    else { this.emit(this.events.CREATE_COORDINATES); }
                });
            }

        })
    };

}

module.exports = PlanetService;