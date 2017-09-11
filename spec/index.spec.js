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

const {
    getListofPeople,
    findBiggestOrbitalPlanet,
    directorsAndTheirFilmes,
    nameAndVehicles
} = require(path.join(__dirname, '..', './index.js'));

describe('getListofPeople', function () {
    this.timeout(10000);
    it('returns the names of characters', (done) => {
        getListofPeople.then((value) => {
            expect(value).to.be.an('array');
            expect(value).to.eql(['Luke Skywalker',
                'C-3PO',
                'R2-D2',
                'Darth Vader',
                'Leia Organa',
                'Owen Lars',
                'Beru Whitesun lars',
                'R5-D4',
                'Biggs Darklighter',
                'Obi-Wan Kenobi'
            ]);
            done();
        });
    });
});

describe('findBiggestOrbitalPlanet', function () {
    this.timeout(10000);
    it('finds the biggest planet and returns it', (done) => {
        findBiggestOrbitalPlanet.then((value) => {
            expect(value).to.be.an('object');
            expect(value).to.eql({
                name: 'Bespin',
                orbitalPeriod: '5110'
            });
            done();
        });
    });
});

describe('findBiggestOrbitalPlanet', function () {
    this.timeout(10000);
    it('finds the biggest planet and returns it', (done) => {
        findBiggestOrbitalPlanet.then((value) => {
            expect(value).to.be.an('object');
            expect(value).to.eql({
                name: 'Bespin',
                orbitalPeriod: '5110'
            });
            done();
        });
    });
});

describe('directorsAndTheirFilmes', function () {
    this.timeout(10000);
    it('returns the directors with their films', (done) => {
            directorsAndTheirFilmes.then((value) => {
                    expect(value).to.eql([{
                        name: 'George Lucas',
                        films: ['A New Hope',
                            'Attack of the Clones',
                            'The Phantom Menace',
                            'Revenge of the Sith'
                        ]
                    }, {
                        name: 'Richard Marquand',
                        films: ['Return of the Jedi']
                    }, {
                        name: 'Irvin Kershner',
                        films: ['The Empire Strikes Back']
                    }, {
                        name: 'J. J. Abrams',
                        films: ['The Force Awakens']
                    }]); 
                    done();
            });
    });
});

describe('nameAndVehicles', function () {
    this.timeout(10000);
    it('gets the name and returns the vehicles', (done) => {
        nameAndVehicles.then((value) => {
            expect(value).to.eql( {name: 'Luke Skywalker',
            Vehicles:
             [ { name: 'Snowspeeder', model: 't-47 airspeeder' },
               { name: 'Imperial Speeder Bike', model: '74-Z speeder bike' } ] });
            done();
        });
    });
});

describe('findBiggestOribitalPeriod', () => {
    it('exists', () => {
        expect(findBiggestOribitalPeriod).to.be.a('function');
    });
});

describe('wantedPlanetDetails', () => {
    it('exists', () => {
        expect(wantedPlanetDetails).to.be.a('function');
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
        }, {
            title: 'Return of the Jedi',
            director: 'Richard Marquand'
        }];
        expect(data.reduce(getDirectors, [])).to.eql(['George Lucas', 'Richard Marquand']);
    });

    it('doesn\'t add same director twice', () => {
        const data = [{
            title: 'A New Hope',
            director: 'George Lucas'
        }, {
            title: 'Return of the Jedi',
            director: 'George Lucas'
        }];
        expect(data.reduce(getDirectors, [])).to.eql(['George Lucas']);
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
        }, {
            title: 'Return of the Jedi',
            director: 'George Lucas'
        }];
        expect(getFilms(results, director)).to.eql(['A New Hope', 'Return of the Jedi']);
        expect(getFilms(results, director2)).to.eql([]);
    });
    it('returns an empty array if director isn\'t there', () => {
        const director = 'peorge pucas';
        const results = [{
            title: 'A New Hope',
            director: 'George Lucas'
        }, {
            title: 'Return of the Jedi',
            director: 'George Lucas'
        }];
        expect(getFilms(results, director)).to.eql([]);
    });
});