var express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 9000;
var app = express()

var service = require('./data_service/planetService.js')

// GET all planets
router.get('/planets', (req, res) => { 
    service.getAllPlanets().then(resp => {return res.status(200).send(resp)}) 
})

router.get('/:planetId/coordinates', (req, res) => { 
    const {planetId} = req.params
    service.getCoordinatesByPlanetId(planetId).then(resp => {return res.status(200).send(resp)}) 
})


app.use(bodyParser.json());
app.use('/api', router);

portA = process.env.PORT;
if (portA == null || portA == "") {
  portA = port;
}
app.listen(portA, () => {
	console.log(`Listening on port ${portA}`);
});