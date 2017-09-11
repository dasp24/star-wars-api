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
        })
        return data.results.reduce((acc,planet)=>{
            if (Number(planet.orbital_period) === orbitalPeriod) return {
                name: planet.name,
                orbitalPeriod: planet.orbital_period
            }
            return acc;
        },{})
        
    })
    .then(function(planet) {
        console.log(planet)
    })