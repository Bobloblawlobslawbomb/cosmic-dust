export default class Person {
  constructor (name, age){
    this.name = name
    this.age = age
  }

  ageMercury() {
  this.age = this.age * .24;
  //parseInt(personage * .24);
  }
}