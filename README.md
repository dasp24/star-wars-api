## Star Wars API Notes

● Base URL: http://swapi.co/api.
● Example request: GET http://swapi.co/api/people.
● If you're struggling to find a fetching library, I recommend using node-fetch.

## Questions

1) Fetch results from /people and log out an array of all the character's names. See below for the expected format:

[
"Person 1",
"Person 2",
"Person 3" 
]

2) Fetch results from /planets and log out the name of the planet with the longest orbital period. See below for the expected format:

{
    name: "Planet Name",
    orbitalPeriod: 9999
}

3) Fetch results from /films and log out an array of all the director's names along with the films they directed. See below for the expected format:

[
    {name: "Director Name 1", films: ["Film 1", "Film 2", "Film 3"]},
    {name: "Director Name 2", films: ["Film 4"]},
    {...}
]

4) Fetch results from /people/1 and log out the person's name and the vehicles they use (name and model). Note: this will require fetching from /vehicles/:vehicleID. See below for the expected format:

{
    name: "Person Name",
    vehicles: [
        {name: "Vehicle Name", model: "Vehicle Model"},
{...} ]
}

## Star Wars API Solution

in order to see the solution to the above questions work you must first check you have the most up to date version of node installed. you can check this is installed by running ``node -v`` in your terminal.

You can always download the latest version <a href="https://nodejs.org/en/download/">here</a>.

Once this is done please set the project up locally by following the following steps:

In the terminal do `git clone https://github.com/dasp24/star-wars-api.git`

`cd star-wars-api`

`npm install`

## Running tests

you can call each function in turn to see the solution. alternatively you can run the tests I have written in my index.spec.js file by runing ``npm test`` in the terminal.

This returns all the solutions requested in the questions above and also logs them on the console.

## Built With
Mocha
Chai
Node js

## Author
Daniel Parkes

