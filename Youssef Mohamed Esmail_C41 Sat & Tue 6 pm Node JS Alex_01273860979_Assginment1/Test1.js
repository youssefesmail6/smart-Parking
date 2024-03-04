/*Assginment 1: 
** what is the output of this code with explaination
var num = 8;
var num = 10;
console.log(num);

** what is the output of this code with explaination
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Ayush';
  let age = 21;
}
sayHi();
*/
//-------------------------------------
//Using javascript answers the folllowing questions :

//1. Create a function that takes the age in years and returns the age in days.
/*function Days(age) {
return age * 365;
}
console.log(Days(22));
*/
// 2.Create a function that takes an array of numbers and returns the smallest number in the set.
/*fnction SmallestNumber(arr) {
  
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
    smallest = arr[i];
    }
  }

  return smallest;
}
const arr = [90, 52, 14, 76, 30]; 
console.log(SmallestNumber(arr)); 
*/
/*
//** 3.Create a function that takes any non-negative number as an array and return it with its digits in descending order. Descending order is when you sort from highest to lowest.
/*function descendingOrder(n){
return Number(n.toString().split('').sort((a,b)=> b-a).join(''));
}
const inputNumber = 527014
console.log(descendingOrder(inputNumber));
*/


//4.Create a function that takes an array of numbers and returns the average of this numbers.
/*function average(Array){
let sum =0;
for(i=0;i<Array.length;i++){
sum +=Array[i];
}
return sum/Array.length;
}
const Array = [1,2,3,4]
console.log(average(Array));
*/
//5.what is the output of 
//Console.log( [ ] == [ ] )
//Console.log( { } == { } )
//And explain your answer
//Answer: The Answer will be False cause the .isEqual who check if the two objects or arrays is equal not ==,===.


//** 6.what is the output of this code with explaination

/*function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();*/
//Answer:The Answer will be (A,C,B) cause B is a function in A with a set time so c will be before B

// 7.what is the output of this code with explaination
/*var num = 8;
var num = 10;
console.log(num);*/
//Answer:The out put will be 10 cause the second one wil redeclarition to the Variable'num' also because var hoisted to the top of the scope so it will override.
//** 8.what is the output of this code with explaination
/*function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Ayush'; 
  let age = 21;
}
sayHi();*/ 
//Answer:The Var will be Undefiend but on the other hands let will be RefrenceError Cause The let and const throw the error all because of the Temporal Dead Zone 