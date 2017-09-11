const fetch = require('node-fetch');

const root = 'http://swapi.co/api/';

// 1) Fetch results from /people and log out an array of all the character's names. 
fetch(`${root}people`)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        return data.results.map((person) => {
            return person.name;
        });
    })
    .then(function (names) {
        console.log(names);
    })
    .catch(function (error) {
        console.log('Requestfailed', error)
    });

// 2) Fetch results from /planets and log out the name of the planet with the longest orbital period.
fetch(`${root}planets`)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        // grab the biggest orbital period
        let orbitalPeriod = 0;
        data.results.forEach((planet) => {
            if (Number(planet.orbital_period) > orbitalPeriod) {
                orbitalPeriod = Number(planet.orbital_period)
            }
        });
        return data.results.reduce((acc, planet) => {
            if (Number(planet.orbital_period) === orbitalPeriod) return {
                name: planet.name,
                orbitalPeriod: planet.orbital_period
            };
            return acc;
        }, {});

    })
    .then(function (planet) {
        console.log(planet);
    })
    .catch(function (error) {
        console.log('Requestfailed', error);
    });

// Fetch results from /films and log out an array of all the director's names along with the films they
// directed.
fetch(`${root}films`)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        // so i need to grab all the directors and put them in an array
        const directors = data.results.reduce((acc, film) => {
            if (!acc.includes(film.director)) acc.push(film.director)
            return acc;
        }, []);

        // helper function to get all films for specific director
        function getFilms(director) {
            return data.results.reduce((acc, film) => {
                if (film.director === director) {
                    acc.push(film.title);
                }
                return acc;
            }, []);
        }
        // return result is desired format
        return directors.map((director) => {
            return {
                name: director,
                films: getFilms(director)
            };
        });
    })
    .then(function (directors) {
        console.log(directors)
    })
    .catch(function (error) {
        console.log('Requestfailed', error)
    });

// 4) Fetch results from /people/1 and log out the person's name and the vehicles they use (name and
// model). Note: this will require fetching from /vehicles/:vehicleID

fetch(`${root}people/1`)
    .then(function (res) {
        let name;
        return res.json();
    })
    .then(data => {
        name = data.name;
        const vehicleAddresses = data.vehicles;
        const vehicleInfo = Promise.all(vehicleAddresses.map(address => {
            return fetch(address)
                .then(function (res) {
                    return res.json();
                })
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
    .catch(function (error) {
        console.log('Requestfailed', error);
    });