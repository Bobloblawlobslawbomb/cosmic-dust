import Person from './../src/cosmic-dust.js';

describe('Person', () => {
    let testPerson;
    let personOne;
    beforeEach(() => {
        personOne = new Person('Person One', 41, 1);
    })

    test('it should correctly create a test person object with a new name and age', () => {
        testPerson = new Person('New Name', 35, 1);
        expect(testPerson.name).toEqual("New Name");
    });

    test('it should correctly create a test person object with a new name and age', () => {
        testPerson = new Person('New Name', 35, 1);
        expect(testPerson.age).toEqual(35);
    })

    test('it should correctly determine personOnes "ageMercury" (age / .24)', () => {
        expect(personOne.ageMercury(personOne.age)).toBeCloseTo(170.83);
    });

    test('it should save a persons "ageMercury" as their mercAge property', () => {
        personOne.ageMercury(personOne.age);
        expect(personOne.mercAge).toEqual(personOne.ageMercury(personOne.age));
    });

    test('it should correctly determine personOnes "ageVenus" (age / .62)', () => {
        expect(personOne.ageVenus(personOne.age)).toBeCloseTo(66.13);
    });

    test('it should save a persons "ageVenus" as their venAge property', () => {
        personOne.ageVenus(personOne.age);
        expect(personOne.venAge).toEqual(personOne.ageVenus(personOne.age));
    });

    test('it should correctly determine personOnes "ageMars" (age / 1.88)', () => {
        expect(personOne.ageMars(personOne.age)).toBeCloseTo(21.81);
    });

    test('it should correctly determine personOnes "ageJupiter" (age / 11.86)', () => {
        expect(personOne.ageJupiter(personOne.age)).toBeCloseTo(3.46);
    });

    test('it should determine a persons "lifeExpectancy" ((numOfSnakes * .2) * avgLife)', () => {
        personOne.numOfSnakes = 3;
        expect(personOne.lifeExpectancy()).toBeCloseTo(60);
    });

    test('it should calculate personOnes "timeLeft" (lifeExpect - age)', () => {
        
        expect(personOne.timeLeft()).toBeCloseTo(59);
    });

});