
// 1
// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."


function tellFortune(jobtitle,geographiclocation,partenersname,numberofchild){

let result=    `You will be a ${jobtitle} in ${geographiclocation} and maried to ${partenersname} with ${numberofchild} kids.`;
return result;
}


let descriptin=tellFortune('Civil Engineer','Jordan','Maya','4');
console.log('tellfortune: '+ descriptin);

console.log('_____________________________________');
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(puppyage){
let result=puppyage*7;
return result;

}

let agedoggie=calculateDogAge(1);
console.log('Your doggie is ' +agedoggie+' year old in dog year');


console.log('_____________________________________');
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age,amountperDay){
  
 let remainingage =100-age;
 let remainingday=remainingage*365;
let remainingamount=remainingday*amountperDay;

return remainingamount;
}
let toltal=calculateSupply(30,3);
console.log(`You will need ${calculateSupply(30,3)} to the last until the ripe old age of 100`)




console.log('_____________________________________');
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/




function greet(name){
    let result=`Hello ${name}`;
    return result;
}
let name1=greet('Adam');
console.log(`"${name1}"`);

console.log('_____________________________________');

// 5
// what is the error:
// error : cat is decleare but is never read beacuse deosnt use it in the function and use alternate x ,x is not defined. and this function doesn't call .
function double(cat) {
    return 2 * x;
  }
//   true function
  function double(cat) {
  
    return 2 *cat;
  }
console.log(double(5));

console.log('_____________________________________');

// error : syntax error because function contain parameter and the parameter should be variable  not specific number; 
// function double(7) {
//   return 2 * 7;
// }
function double(num) {
  return 2 * num;
}

console.log(double(8))

// error : '7' is not identifier such as 7 parameter should be like variable (vaild identifier)
// function double('7') {
//     return 2 * 'x';
// True
  function double(string) {
    return 2 * string;
  }
console.log(double(7))


console.log('_____________________________________');
// 6
// fix these functions:

// func double1(x {
//   return 2 * x ;
// }

 function double1(x ){
   return 2 * x ;
 }
console.log(double1(10));


// functiondouble2 x)
// return 2 * x;
// }

 function double2(x){
return 2 * x;
 }
console.log(double2(50));


// function (x) double3 {
//   return 2 * x;
function double3(x) {
  return 2 * x;
}
console.log(double3(80));



console.log('_____________________________________');
// 7
// Write a function called cube that:
// accept 1 parameter and calculate the cube of this number

// Ex: cube(4)
// => 64

function cube(number)
{
    // POWER IN JAVASCRIPT :: Math.pow(number,الأس)// number**الاس//number*number*number
let calcnum=Math.pow(number,3);
return calcnum;
}
console.log(cube(4));
console.log('_____________________________________');
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1,num2){
    let result=num1*num2;
    return result;
}  
let T=multiply(3,4);
console.log(multiply(3,4));
console.log(multiply(5,4));



console.log('_____________________________________');

// 9
// Write a function called canIGetADrivingLicense that:
// accept 1 parameter represent the age
// and if the age greater than or equal to 20 return "yes you can"
// otherwise return "please come back after X years to get one"

// Ex: canIGetADrivingLicense(21)
// => "yes you can"

// Ex: canIGetADrivingLicense(17)
// => "please come back after 3 years to get one"

// Ex: canIGetADrivingLicense(20)
// => "yes you can"
 function canIGetADrivingLicense(age){

    if(age>=20){
        return  `"yes you can"`
    }
    else{
        return `"please come back after 3 years to get one"`
    }
 }
var result=canIGetADrivingLicense(20);
console.log(result);
var result=canIGetADrivingLicense(15);
console.log(result);




console.log('_____________________________________');
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(string1,string2){

    if(string1.length== string2.length)
        {return true;}
    else{
        return false;
    }
}
console.log(sameLength('Abed','Mona'));
console.log(sameLength('Rawaah','Omran'))


console.log('_____________________________________');
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


function largerNubmer(num1,num2) {
    if(num1>=num2){
        let larger=num1;
        return larger;
    }
    else{

        let larger=num2;
        return larger;
    }
    
}
console.log('larger Number:'+ largerNubmer(100,1));
console.log('larger Number:'+ largerNubmer(-8,1));


console.log('_____________________________________');
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1,num2,num3) {
if(num1<num2&&num1<num3)
{return num1;}
else if( num2<num1&&num1<num3  ) {
    return num2;
}   
else{return num3;}
}
console.log('smallerNumber  : '+ smallerNubmer(10,1,100));
console.log('_____________________________________');
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterstring(string1,string2,string3,string4,string5){

    if(string1.length< string2.length&&string1.length<string3.length&&string1.length<string4.length&& string1<string5.length)
        {return string1;}
    else if(string2.length< string1.length&&string2.length<string3.length&&string2.length<string4.length&& string2<string5.length){
        return string2;
    }
    else if (string3.length< string1.length&&string3.length<string2.length&&string3.length<string4.length&& string3<string5.length){return string3}
    else if (string4.length< string1.length&&string4.length<string2.length&&string4.length<string3.length&& string4<string5.length){return string4}
        else {return string5};
}
console.log('shorterstring is :'+shorterstring('Abed','Mona','mohammed','omran','by'));



console.log('_____________________________________');
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(string1,string2,string3,string4,string5){

    if(string1.length> string2.length&&string1.length>string3.length&&string1.length>string4.length)
        {return string1;}
    else if(string2.length> string1.length&&string2.length>string3.length&&string2.length>string4.length){
        return string2;
    }
    else if (string3.length>string1.length&&string3.length>string2.length&&string3.length>string4.length){return string3}
    else  {string4}
}
console.log('longerstring is :'+ longerString('Abed','Mona','mohammed','omran','by'));


console.log('_____________________________________');
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function iseven(num){

    if( num%2 ==0){
        return true;
    }
    else{ return false}
}
console.log(iseven(5));
console.log(iseven(100));
console.log('_____________________________________');
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isodd(num){

    if( num%2 !=0){
        return true;
    }
     else if( num%2 ==0){
        return false;
    }
    
}
console.log(isodd(5));
console.log(isodd(100));
console.log('_____________________________________');
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
    

if(num>=0){
    return num;
}
else{
    let result=num*-1;
    return result;
}
}
console.log(positive(-5));
console.log(positive(5));


// ممكن أستخدم القيمة المطلقة
function positive1(num) {
    return Math.abs(num);
}
console.log(positive1(-100));
console.log(positive1(100));
    
console.log('_____________________________________');
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName) {
    let x=firstName;
    let y=lastName;
    return x.concat(y);
    
}
console.log(fullName('Rawaah ','Ababneh'))
console.log('_____________________________________');
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(x,y,z,c,n) {
    let ave=(x+y+z+c+n)/5;
    return ave;
    
} console.log(average(2,2,4,8,4));
console.log('_____________________________________');
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function RandomNumber() { 
    return Math.random();
    
  }
  console.log(RandomNumber())
console.log('_____________________________________');
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function RandomBetweenNumber(min,max) {
   return (Math.random()* (min,max) +min);

  }

  console.log(RandomBetweenNumber(3,100));
console.log('_____________________________________');
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94n2
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(score){
if( 95<=score&&score<=100){
    return `"A"`;
}
else if ( 85<=score&&score<=94)
    { return `"B"`}
else if( 70<=score&&score<=84 )
{return `"C"`}

else if( 50<=score&&score<=69 )
{return `"D"`}

else if( 0<=score&&score<=49 )
    {return `"F"`}
}
console.log(scoreInUniversty(95));
console.log(scoreInUniversty(71));
console.log(scoreInUniversty(3));
console.log('_____________________________________');
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and nstart from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3
//  هون لاحظت لازم أخلي العداد أعرفه بالجلوبل لحتى يرجع يزيداما لو عرفته باللوكل بضل يصفر
*/
let count = 0;
function counter() {
    return count++;
}

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter());



console.log('_____________________________________');

// 24
// Write a function called resetCounter
// that will reset the previuos function
// and return the number before reset and
// a string say that the counter reset

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

// Ex: resetCounter()
// => 3 and the counter reset now

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: resetCounter()
// => 2 and the counter reset now

// // Ex: counter()
// // => 1


 function counter(){
   
    return count++;
 }
 function resetCounter(){
    const newcount=count;
count=0; 
return `${newcount} - The counter has been reset` ;}
console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());
console.log(counter());
console.log(resetCounter());

console.log('_____________________________________');




var array = [0,5,7,9];
array.pop();
array.push(8);
array.push(9);
array.push(10);
array.shift();
array.shift();
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
console.log(array);

