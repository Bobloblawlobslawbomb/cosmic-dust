import Person from './../src/Person.js';

describe('Person', () => {
  // let person;
  // beforeEach(() => {
  //   person = new Person;
  //   person.name = 'testPerson'
  //   person.age = 41;
  // });

test('this is a "test-test" to see if I have everything lined up correctly. It should give the person an age of 45', () => {
  const person = new Person;
    person.age = 45;
    expect(person.age).toEqual(45);
  });

test('it should multiply the persons age by .24 to give the persons age in "Mercury years"', () => {
  // console.log(person.age);
  // console.log((person.age*.24)); /*what i want .ageMerc todo*/
  // console.log(person.ageMercury());

  // person.age = person.ageMercury();
  // console.log(person.age);

  const person = new Person;
  person.age = 41;
  person.age = person.ageMercury();
  expect(person.age).toEqual(9.84);
  });
});