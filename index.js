var express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 9000;
var app = express()

var service = require('./planetService.js')

// GET all planets
router.get('/planets', (req, res) => { 
  const planetService = new service();
  planetService.on('error', err => res.status(err.statusCode).send(err.message))
  planetService.on(planetService.events.GET_ALL_PLANETS, data => res.json(data));
  planetService.getAllPlanets();
  //service.getAllPlanets().then(resp => {return res.status(200).send(resp)}) 
})

router.get('/planets/:planetId/coordinates', (req, res) => { 
  const planetService = new service();
  const {planetId} = req.param;
  planetService.on('error', err => res.status(err.statusCode).send(err.message));
  planetService.on(planetService.events.GET_ALL_PLANTES_ID, data => res.json(data));
  planetService.getCoordinatesByPlanetId(planetId);
  //const {planetId} = req.params
  //service.getCoordinatesByPlanetId(planetId).then(resp => {return res.status(200).send(resp)}) 
})

router.post('/planets/:planetId/coordinates', (req, res) => {
  const planetService = new service();
  const {planetId} = req.param;
  const reqBody = req.body;
  planetService.on(planetService.events.CREATE_COORDINATES, function () {
    res.status(200).send('Created Successfully');
  });
  planetService.addCoordinates(planetId, reqBody);
  
  //const {planetId} = req.params
  //const reqBody = req.body
  //service.addCoordinates(planetId, reqBody).then(resp => {return res.status(201).send(resp)})
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