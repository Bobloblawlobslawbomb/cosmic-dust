import Person from './../src/Person.js';

describe('Person', () => {
  let person;
  beforeEach(() => {
  person = new Person;
  person.age = 41;
  });

  test('it should give the person an age of 45', () => {
  person.age = 45;
  expect(person.age).toEqual(45);
  });

  test('it should give the age of the person in "Mecury years"', () => {
 // person.age = person.ageMecury(person.age);
  expect(person.age).toEqual(9.84);
  });
});