const { Planet } = require('../data/db.js')
const { Coordinate } = require('../data/db.js')



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
        
                    Coordinate.find({ "id": id }, (err, coordinates) => {
        
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
//     const getAllSandwiches = () => {

//         return new Promise((resolve, reject) => {
//             Sandwich.find({}, (err, sandwiches) => {
//                 if(err) {
//                     console.log("DB ERROR")
//                     reject(err)
//                 }
//                 let filteredSandwiches = sandwiches.map(s => {
//                     let returnObj = {};
//                     returnObj["id"]         = s.id;
//                     returnObj["name"]       = s.name;
//                     returnObj["thumbnail"]  = s.thumbnail;
//                     returnObj["price"]      = s.price;
                
//                     return returnObj;
//                 })
//                 resolve(filteredSandwiches)
//             })
//         })              
//     }

//     const getSandwichById = (id) => {

//         return new Promise((resolve, reject) => {

//             Sandwich.findOne({ "id": id }, (err, sandwich) => {

//                 if(err) {
//                     console.log("DB ERROR")
//                     reject(err)
//                 }
//                 resolve(sandwich)
//             })
//         })      
//     }

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


//     return {
//         getAllSandwiches,
//         getSandwichById,
//         postComment
//     }
// }

module.exports = PlanetService()