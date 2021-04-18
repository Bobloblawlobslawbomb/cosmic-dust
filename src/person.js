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
  this.mercAge = (this.age * .24);
  //return this.age * .24;
  return this.mercAge;
}

Person.prototype.ageVenus = function(){
  this.venAge = (this.age * .62);
  return this.venAge;
}

Person.prototype.ageMars = function(){

}