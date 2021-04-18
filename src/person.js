export default function Person(name,age) {
  this.name = name;
  this.age = age;
  this.avgLife = 100;
  this.numOfSnakes = 0;
  this.mercAge = 0;
  this.venAge = 0;
  this.marsAge = 0;
  this.jupAge = 0;
  this.lifeExpect = 0;
}

Person.prototype.ageMercury = function(){
 return this.age * .24;
}