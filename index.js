const fetch = require('node-fetch');

const root = 'http://swapi.co/api/';

fetch(`${root}people`)
    .then(function (res) {
        return res.json();
    })
    .then(function (json) {
        return json.results.map((person) => {
            return person.name;
        });
    })
    .then(function(names) {
        console.log(names)
    });