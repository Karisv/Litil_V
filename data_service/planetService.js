const { Sandwich } = require('../data/db')

const SandwichService = () => {

    const getAllSandwiches = () => {

        return new Promise((resolve, reject) => {
            Sandwich.find({}, (err, sandwiches) => {
                if(err) {
                    console.log("DB ERROR")
                    reject(err)
                }
                let filteredSandwiches = sandwiches.map(s => {
                    let returnObj = {};
                    returnObj["id"]         = s.id;
                    returnObj["name"]       = s.name;
                    returnObj["thumbnail"]  = s.thumbnail;
                    returnObj["price"]      = s.price;
                
                    return returnObj;
                })
                resolve(filteredSandwiches)
            })
        })              
    }

    const getSandwichById = (id) => {

        return new Promise((resolve, reject) => {

            Sandwich.findOne({ "id": id }, (err, sandwich) => {

                if(err) {
                    console.log("DB ERROR")
                    reject(err)
                }
                resolve(sandwich)
            })
        })      
    }

    const postComment = (body) => {

        return new Promise((resolve, reject) => {

            Sandwich.findOneAndUpdate({ "id": body.id }, 
            { $push: { comments: { "name": body.name, "text": body.text } } },
            (err, found)  => {

                if(err) {
                    console.log("DB ERR");
                     reject(err)
                }
                resolve(body)
            })
                   
        })        
    }


    return {
        getAllSandwiches,
        getSandwichById,
        postComment
    }
}

module.exports = SandwichService() 