##Star Wars API Notes

● Base URL: http://swapi.co/api.
● Example request: GET http://swapi.co/api/people.
● If you're struggling to find a fetching library, I recommend using node-fetch.

##Questions

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