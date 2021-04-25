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
  this.timeLeft = 0;
}

  ageMercury() {
    this.mercAge = parseFloat(this.age / .24);
    return this.mercAge;
  }

  ageVenus() {
    this.venAge = parseFloat(this.age / .62);
    return this.venAge;
  }

  ageMars() {
    this.marsAge = parseFloat(this.age / 1.88);
    return this.marsAge;
  }

  ageJupiter() {
    this.jupAge = parseFloat(this.age / 11.86);
    return this.jupAge;
  }

  lifeExpectancy() {
    this.lifeExpect = ((this.numOfSnakes * .2) * this.avgLife);
    return this.lifeExpect;
  }

  lifeLeft() {
    this.timeLeft = (this.lifeExpect - this.age);
    if (this.timeLeft < 0) {
      return ("You have outlived your life expectancy by: " + Math.abs(this.timeLeft) + " years");
    } else {
    return this.timeLeft;
    }
  }
}