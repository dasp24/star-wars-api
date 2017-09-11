const {
    expect
} = require('chai');
const path = require('path');

const {
    findBiggestOribitalPeriod,
    wantedPlanetDetails,
    getDirectors,
    getFilms
} = require(path.join(__dirname, '..', './helperFunctions.js'));

describe('findBiggestOribitalPeriod', () => {
    it('exists', () => {
        expect(findBiggestOribitalPeriod).to.be.a('function');
    });
});