export default function Person(name,age) {
  this.name = name;
  this.age = age;
  this.avgLife = 100;
  this.numOfSnakes = 0;
  this.mercAge = 0;
  this.venAge = 0;
  this.marsAge = 0;
  this.jupAge = 0;
  this.lifeExpect = 100;
  this.timeLeft = 100;
}

Person.prototype.ageMercury = function() {
  this.mercAge = (this.age * .24);
  return this.mercAge;
}

Person.prototype.ageVenus = function() {
  this.venAge = (this.age * .62);
  return this.venAge;
}

Person.prototype.ageMars = function() {
  this.marsAge = (this.age * 1.88);
  return this.marsAge;
}

Person.prototype.ageJupiter = function() {
  this.jupAge = (this.age * 11.86);
  return this.jupAge;
}

Person.prototype.lifeExpectancy = function() {
  this.lifeExpect = ((this.numOfSnakes * .2) * this.avgLife)
  return this.lifeExpect;
}

Person.prototype.timeLeft = function() {
  //why is this not a function?
  // this.timeLeft = (this.lifeExpect - this.age);
  // return this.timeLeft;
}