const fetch = require('node-fetch');

const {findBiggestOribitalPeriod, wantedPlanetDetails, getDirectors, getFilms} = require('./helperFunctions')
const root = 'http://swapi.co/api/';

// 1) Fetch results from /people and log out an array of all the character's names. 
fetch(`${root}people`)
    .then( (res) =>
         res.json()
    )
    .then( (data) => {
        return data.results.map((person) => {
            return person.name;
        });
    })
    .then( names => {
        console.log(names);
    })
    .catch( error => {
        console.log('Requestfailed', error);
    });

// 2) Fetch results from /planets and log out the name of the planet with the longest orbital period.

fetch(`${root}planets`)
    .then( res =>
         res.json()
    )
    .then(data => {
        // grab the biggest orbital period
        data.results.forEach(findBiggestOribitalPeriod);
        return data.results.reduce(wantedPlanetDetails, {});

    })
    .then(planet => {
        console.log(planet);
    })
    .catch(error => {
        console.log('Requestfailed', error);
    });

// Fetch results from /films and log out an array of all the director's names along with the films they
// directed.
fetch(`${root}films`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        // so i need to grab all the directors and put them in an array
        const directors = data.results.reduce(getDirectors, []);
        // return result is desired format
        return directors.map((director) => {
            return {
                name: director,
                films: getFilms(data.results,director)
            };
        });
    })
    .then(directors => {
        console.log(directors);
    })
    .catch(error => {
        console.log('Requestfailed', error);
    });

// 4) Fetch results from /people/1 and log out the person's name and the vehicles they use (name and
// model). Note: this will require fetching from /vehicles/:vehicleID

fetch(`${root}people/1`)
    .then(res => {
        let name;
        return res.json();
    })
    .then(data => {
        name = data.name;
        const vehicleAddresses = data.vehicles;
        const vehicleInfo = Promise.all(vehicleAddresses.map(address => {
            return fetch(address)
                .then(res => 
                     res.json()
                )
                .then(vehicle => {
                    return {
                        name: vehicle.name,
                        model: vehicle.model
                    };

                });
        }));
        return vehicleInfo;
    })
    .then(vehicleInfo =>
        console.log({
            name: name,
            Vehicles: vehicleInfo
        })
    )
    .catch(error => {
        console.log('Requestfailed', error);
    });

    // module.exports = {findBiggestOribitalPeriod, wantedPlanetDetails, getDirectors, getFilms}