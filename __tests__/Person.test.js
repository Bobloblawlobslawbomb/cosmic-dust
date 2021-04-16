import Person from './../src/Person.js';

describe('Person', () => {
  let personOne;
  beforeEach(() => {
    personOne = new Person;
    personOne.name = 'Person One'
    personOne.age = 41;
  });

test('this is a "test-test" to see if I have everything lined up correctly. It should give the person an age of 45', () => {
  personOne.age = 45;
  expect(personOne.age).toEqual(45);
  });

test('it should multiply the persons age by .24 to give the persons age in "Mercury years"', () => {
  personOne.ageMercury = personOne.ageMercury();
  expect(personOne.ageMercury).toEqual(9.84);
  });
});