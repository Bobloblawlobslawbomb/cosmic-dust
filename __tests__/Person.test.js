import Person from './../src/Person.js';

describe('Person', () => {
  let testPerson;
  let personOne;
  beforeEach(() =>{
    personOne = new Person('Person One', 41);
  })

  test('it should correctly create a test person object with a new name and age', () => {
    testPerson = new Person('New Name', 35);
    expect(testPerson.name).toEqual("New Name");
  });

  test('it should correctly create a test person object with a new name and age', () => {
    testPerson = new Person('New Name', 35);
    expect(testPerson.age).toEqual(35);
  });

  test('it should correctly determine personOnes "ageMercury" (age * .24)', () => {
    expect(personOne.ageMercury()).toBeCloseTo(9.84);
  });

  test('it should save a persons "ageMercury" as their mercAge property', () => {

    expect(personOne.mercAge).toEqual(personOne.ageMercury());
  });

  test('it should correctly dertermine a personOnes "ageVenus" (age * .62)', () => {
    expect(personOne.ageVenus()).toBeCloseTo(25.42);
  });

  test('it should correctly dertermine a personOnes "ageMars" (age * 1.88)', () => {
    expect(personOne.ageMars()).toBeCloseTo(77.08);
  });
  
  test('it should correctly dertermine a personOnes "ageJupiter" (age * 11.86)', () => {
    expect(personOne.ageJupiter()).toBeCloseTo(486.26);
  });

  test('it should determine a persons "lifeExpectancy" ((numOfSnakes * .2) * avgLife)', () => {
    personOne.numOfSnakes = 3;
    expect(personOne.lifeExpectancy()).toBeCloseTo(60);
  });
  
  
  
});