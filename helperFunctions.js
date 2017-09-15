let orbitalPeriod = 0;
 const findBiggestOribitalPeriod = (planet) => {
     if (Number(planet.orbital_period) > orbitalPeriod) {
         orbitalPeriod = Number(planet.orbital_period);
     }
 };

 const wantedPlanetDetails = (acc, planet) => {
     if (Number(planet.orbital_period) === orbitalPeriod) return {
         name: planet.name,
         orbitalPeriod: planet.orbital_period
     };
     return acc;
 };

 const getDirectors = (acc, film) => {
    if (!acc.includes(film.director)) acc.push(film.director);
    return acc;
};

const getFilms = (results,director) => {
    return results.reduce((acc, film) => {
        if (film.director === director) {
            acc.push(film.title);
        }
        return acc;
    }, []);
};

 module.exports = {
     findBiggestOribitalPeriod,
     wantedPlanetDetails,
     getDirectors,
     getFilms
 };