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

  test('it should correctly determine personOnes "ageMercury" (age*.24)', () => {
    expect(personOne.ageMercury()).toBeCloseTo(9.84);
  });
  
});
