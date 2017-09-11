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

    it('returns an array of directors', () => {
        const data = [{
            title: 'A New Hope',
            director: 'George Lucas'
        },{
            title: 'Return of the Jedi',
            director: 'Richard Marquand'
        }];
        expect(data.reduce(getDirectors,[])).to.eql(['George Lucas','Richard Marquand']);
    });

    it('doesn\'t add same director twice', () => {
        const data = [{
            title: 'A New Hope',
            director: 'George Lucas'
        },{
            title: 'Return of the Jedi',
            director: 'George Lucas'
        }];
        expect(data.reduce(getDirectors,[])).to.eql(['George Lucas']);
    });
});

describe('getFilms', () => {
    it('exists', () => {
        expect(getFilms).to.be.a('function');
    });
    it('returns an array of films for a specific director', () => {
        const director = 'George Lucas';
        const director2 = 'peorge pucas';
        
        const results = [{
            title: 'A New Hope',
            director: 'George Lucas'
        },{
            title: 'Return of the Jedi',
            director: 'George Lucas'
        }];
        expect(getFilms(results,director)).to.eql([ 'A New Hope', 'Return of the Jedi' ]);
        expect(getFilms(results,director2)).to.eql([]);
    });
    it('returns an empty array if director isn\'t there', () => {
        const director = 'peorge pucas';
        const results = [{
            title: 'A New Hope',
            director: 'George Lucas'
        },{
            title: 'Return of the Jedi',
            director: 'George Lucas'
        }];
        expect(getFilms(results,director)).to.eql([]);
    });
});