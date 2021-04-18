import Person from './../src/Person.js';

describe('Person', () => {
  let testPerson;

  test('it should correctly create a person object with a new name and age', () => {
    testPerson = new Person('New Name', 35);
    expect(testPerson.name).toEqual("New Name");
  });

  test('it should correctly create a person object with a new name and age', () => {
    testPerson = new Person('New Name', 35);
    expect(testPerson.age).toEqual(35);
  });
  
});
