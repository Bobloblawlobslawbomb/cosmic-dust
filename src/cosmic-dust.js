export default function Person(name, age, numOfSnakes) {
  this.name = name;
  this.age = age;
  this.avgLife = 100;
  this.numOfSnakes = numOfSnakes;
  this.mercAge = 0;
  this.venAge = 0;
  this.marsAge = 0;
  this.jupAge = 0;
  this.lifeExpect = 100;
  this.timeLeft = 100;
}

Person.prototype.ageMercury = function (ageParam) {
  this.mercAge = parseFloat(ageParam * .24);
  return this.mercAge;
}

Person.prototype.ageVenus = function (ageParam) {
  this.venAge = parseFloat(ageParam * .62);
  return this.venAge;
}

Person.prototype.ageMars = function (ageParam) {
  this.marsAge = parseFloat(ageParam * 1.88);
  return this.marsAge;
}

Person.prototype.ageJupiter = function (ageParam) {
  this.jupAge = parseFloat(ageParam * 11.86);
  return this.jupAge;
}

Person.prototype.lifeExpectancy = function () {
  this.lifeExpect = ((this.numOfSnakes * .2) * this.avgLife)
  return this.lifeExpect;
}

Person.prototype.timeLeft = function () {
  //why is this not a function?
  // this.timeLeft = (this.lifeExpect - this.age);
  // return this.timeLeft;
}