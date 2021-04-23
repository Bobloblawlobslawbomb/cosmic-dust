export default class Person {
  constructor(name, age, numOfSnakes) {
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

  ageMercury(ageParam) {
    this.mercAge = parseFloat(ageParam / .24);
    return this.mercAge;
  }

  ageVenus(ageParam) {
    this.venAge = parseFloat(ageParam / .62);
    return this.venAge;
  }

  ageMars(ageParam) {
    this.marsAge = parseFloat(ageParam / 1.88);
    return this.marsAge;
  }

  ageJupiter(ageParam) {
    this.jupAge = parseFloat(ageParam / 11.86);
    return this.jupAge;
  }

  lifeExpectancy() {
    this.lifeExpect = ((this.numOfSnakes * .2) * this.avgLife);
    return this.lifeExpect;
  }

  lifeLeft(ageParam) {
    this.timeLeft = (this.lifeExpect - ageParam);
    return this.timeLeft;
  }
}

//this.timeLeft = this.lifeExpectancy - ageParam;
//return this.timeLeft;