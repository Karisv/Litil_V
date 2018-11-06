var request = require('request');

console.log("Worker started")

function post(lat, long, url) {
    request.post(
        url,
        {
            json: {
                "latitude": lat,
                "longitude": long
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
}

function randomLat() {
    const min = -90;
    const max = 90
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomLong() {
    const min = -180;
    const max = 180
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//PROD
prodTime = 5 * 60 * 1000;
setInterval(function () {
    console.log("Post to prod");
    url = "https://planet-service5.herokuapp.com/api/planets/5bdd879ea0193f23a8038696/coordinates"
    post(randomLat(), randomLong(), url);
}, prodTime);

//TEST
testTime = 2 * 60 * 1000;
setInterval(function () {
    console.log("Post to test");
    url = "https://salty-lake-18173.herokuapp.com/api/planets/5bdd879ea0193f23a8038696/coordinates"
    post(randomLat(), randomLong(), url);
}, testTime);

//DEV
devTime = 1 * 60 * 1000;
setInterval(function () {
    console.log("Post to dev");
    url = "https://dry-dusk-86434.herokuapp.com/api/planets/5bdd879ea0193f23a8038696/coordinates"
    post(randomLat(), randomLong(), url);
}, devTime);