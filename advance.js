//call, apply,bind
var obj={num:2};

 var addToThis=function(a){

  return this.num+a;

  

 };

 console.log(addToThis.call(obj,3)); //5

 var obj2={num:2};

 var addToThis=function(a,b,c){

  return this.num+a+b+c;

  

 };

 console.log(addToThis.call(obj2,3,4,5)) //14



var obj3={num:2};

 var addToThis=function(a,b,c){

  return this.num+a+b+c;

  

 };

 

 var arr=[3,4,5]

 console.log(addToThis.apply(obj3,arr)) //14



 var obj4={num:2};

 var addToThis=function(a,b,c){

  return this.num+a+b+c;

  

 };

 

 var arr=[3,4,5]

 console.log(addToThis.bind(obj4,arr)) //[Function: bound addToThis]

 var bound= addToThis.bind(obj2)

 console.log(bound(1,2,3)); // 8



var Student={age:20}

 var printAge=function(){

  return this.age;

 }

 var bound= printAge.bind(Student);

 console.log(bound());





//currying

let multiply=function(x,y){

 console.log(x*y);

}

 let multiplyByTwo= multiply.bind(this,2);

 multiplyByTwo(5); //10



 let multiply2= multiply.bind(this,2,3);

 multiply2(5); //overwrite this and prints 6 in output



// using closure

 let multiply1=function(x){

  return function(y){

   console.log(x*y);

  }

 }

 let multiplyByTwo2 = multiply(2);

   multiplyByTwo2(4); // Int8



let multiplyByThree3=multiply(3)

multiplyByThree3(10) // 30