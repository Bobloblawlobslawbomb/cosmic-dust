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
 
}



// export default class Person {
//   constructor (name, age){
//     this.name = name;
//     this.age = age;
//     this.avgLife = 100;
//     this.ageMercury = 0;
//     this.ageVenus = 0;
//     this.ageMars = 0;
//     this.ageJupiter = 0;
//     this.lifeExpectancy = 0;
//   }

//   ageMercury() {
//   //this.ageMercury = this.age * .24;
//   }
// }