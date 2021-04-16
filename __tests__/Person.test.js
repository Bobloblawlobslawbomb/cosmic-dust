import Person from './../src/Person.js';

describe('Person', () => {
  let person;
  beforeEach(() => {
    person = new Person;
    person.name = 'testPerson'
    person.age = 41;
  });

test('this is a "test-test" to see if I have everything lined up correctly. It should give the person an age of 45', () => {
  person.age = 45;
  expect(person.age).toEqual(45);
  });

test('it should give the age of the person in "Mecury years"', () => {
  console.log(person.age);
  console.log((person.age*.24));//what i want .ageMerc todo
  expect(person.age).toEqual(9.84);
  });
});