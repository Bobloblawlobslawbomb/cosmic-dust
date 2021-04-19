import Person from './../src/cosmic-dust.js';

describe('Person', () => {
  let testPerson;
  let personOne;
  beforeEach(() =>{
    personOne = new Person('Person One', 41, 1);
  })

  test('it should correctly create a test person object with a new name and age', () => {
      testPerson = new Person('New Name', 35, 1);
      expect(testPerson.name).toEqual("New Name");
  });

  test('it should correctly create a test person object with a new name and age', () => {
      testPerson = new Person('New Name', 35, 1);
      expect(testPerson.age).toEqual(35);
  });

  test('it should correctly determine personOnes "ageMercury" (age * .24)', () => {
      expect(personOne.ageMercury()).toBeCloseTo(9.84);
  });

  test('it should save a persons "ageMercury" as their mercAge property', () => {
      //does this fall out of scope because person.js is not using class syntax? Or another reason?
      expect(personOne.mercAge).toEqual(personOne.ageMercury());
  });

  test('it should correctly determine personOnes "ageVenus" (age * .62)', () => {
      expect(personOne.ageVenus()).toBeCloseTo(25.42);
  });

  test('it should correctly determine personOnes "ageMars" (age * 1.88)', () => {
      expect(personOne.ageMars()).toBeCloseTo(77.08);
  });
  
  test('it should correctly determine personOnes "ageJupiter" (age * 11.86)', () => {
      expect(personOne.ageJupiter()).toBeCloseTo(486.26);
  });

  test('it should determine a persons "lifeExpectancy" ((numOfSnakes * .2) * avgLife)', () => {
      personOne.numOfSnakes = 3;
      expect(personOne.lifeExpectancy()).toBeCloseTo(60);
  });

  test('it should calculate personOnes "timeLeft" (lifeExpect - age)', () => {
      //why is this not a function?
      expect(personOne.timeLeft()).toBeCloseTo(59);
  });
  
});