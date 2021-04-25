import Person from './../src/cosmic-dust.js';

describe('Person', () => {
  let testPerson;
  let personOne;
  beforeEach(() => {
    personOne = new Person('Person One', 41, 1);
  })

  test('it should correctly create a test person object with a new name and age', () => {
    testPerson = new Person('New Name', 35, 1);
    expect(testPerson.age).toEqual(35);
    expect(testPerson.name).toEqual("New Name");
  });

  test('it should correctly determine personOnes "ageMercury" (age / .24)', () => {
    expect(personOne.ageMercury()).toBeCloseTo(170.83);
  });

  test('it should save a persons "ageMercury" as their mercAge property', () => {
    personOne.ageMercury();
    expect(personOne.mercAge).toEqual(personOne.ageMercury());
  });

  test('it should correctly determine personOnes "ageVenus" (age / .62)', () => {
    expect(personOne.ageVenus()).toBeCloseTo(66.13);
  });

  test('it should save a persons "ageVenus" as their venAge property', () => {
    personOne.ageVenus();
    expect(personOne.venAge).toEqual(personOne.ageVenus());
  });

  test('it should correctly determine personOnes "ageMars" (age / 1.88)', () => {
    expect(personOne.ageMars()).toBeCloseTo(21.81);
  });

  test('it should correctly determine personOnes "ageJupiter" (age / 11.86)', () => {
    expect(personOne.ageJupiter()).toBeCloseTo(3.46);
  });

  test('it should determine a persons "lifeExpectancy" ((numOfSnakes * .2) * avgLife)', () => {
    personOne.numOfSnakes = 3;
    expect(personOne.lifeExpectancy()).toBeCloseTo(60);
  });

  test('it should calculate personOnes "lifeLeft" (lifeExpect - age)', () => {
    expect(personOne.lifeLeft()).toBeCloseTo(59);
  });

  test('it should let the user know how many years past their life expectancy they have lived', () => {
    testPerson = new Person('Cool N. Person',120,1);
    expect(testPerson.lifeLeft()).toEqual("You have outlived your life expectancy by: " + 20 + " years");
  });  
});