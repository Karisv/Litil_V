const { Planet } = require('./data/db.js')
const { Coordinate } = require('./data/db.js')



const PlanetService = () => {

    const getAllPlanets = () => {

        return new Promise((resolve, reject) => {
            Planet.find({}, (err, planets) => {
                if(err) {
                    console.log("DB ERROR")
                    reject(err)
                }
                let filteredPlanets = planets.map(s => {
                    let returnObj = {};
                    returnObj["id"]         = s.id;
                    returnObj["name"]       = s.name;
                    returnObj["diameter"]  = s.diameter;
                    returnObj["color"]      = s.color;
                
                    return returnObj;
                })
                resolve(filteredPlanets)
            })
        })              
    }
    const getCoordinatesByPlanetId = (id) => {

        return new Promise((resolve, reject) => {

            Coordinate.find({ planetId: id }, (err, coordinates) => {
                if(err) {
                    console.log("DB ERROR")
                    reject(err)
                }
                
                let filteredCoordinates = coordinates.map(s => {
                    let returnObj = {};
                    returnObj["latitude"]         = s.latitude;
                    returnObj["longitude"]       = s.longitude; 
                    return returnObj;
                })
                resolve(filteredCoordinates)
            })
        })      
    }
     
    return {
        getAllPlanets,
        getCoordinatesByPlanetId,
    }
}

//     const postComment = (body) => {

//         return new Promise((resolve, reject) => {

//             Sandwich.findOneAndUpdate({ "id": body.id }, 
//             { $push: { comments: { "name": body.name, "text": body.text } } },
//             (err, found)  => {

//                 if(err) {
//                     console.log("DB ERR");
//                      reject(err)
//                 }
//                 resolve(body)
//             })
                   
//         })        
//     }


module.exports = PlanetService()