import Person from './src/Person.js';

describe('Person', () => {
  let person;
  beforeEach(() => {
  person = new Person;
  });

  test('it should give the person an age of 45', () => {
  person.name = 45;
  expect(person.name).toEqual(45);
  });
});
