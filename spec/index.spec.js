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

describe('wantedPlanetDetails', () => {
    it('exists', () => {
        expect(wantedPlanetDetails).to.be.a('function');
    });
    it('returns desired planet in correct format', () => {
    
        const data = [{
            name: 'Alderaan',
            orbital_period: '364'
        }, {
            name: 'Hoth',
            orbital_period: '549'
        }];

        data.forEach(findBiggestOribitalPeriod);

        expect(data.reduce(wantedPlanetDetails,{})).to.eql({name:'Hoth',orbitalPeriod:'549'});
    });
});

describe('getDirectors', () => {
    it('exists', () => {
        expect(getDirectors).to.be.a('function');
    });
});

describe('getFilms', () => {
    it('exists', () => {
        expect(getFilms).to.be.a('function');
    });
});