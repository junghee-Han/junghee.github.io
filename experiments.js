
const monthlyRent = 500;
let yearlyRent = monthlyRent *12;
//console.log(monthlyRent, yearlyRent);
//yearlyRent = 1;
//console.log(yearlyRent);

//String
const firstName = "Junghee";
const lastName = "Han";
//Boolean
//const isTheSkyBlue = false;
//console.log(isTheSkyBlue);

//Template String
//const sentence = `Hello ${firstName} ${lastName}! How are you?`; 
//console.log(sentence);

// No matter type string->number->boolean whatever.
let myName ="Brian";
myName = 15;
//console.log(myName);

const num =-5.00;
//console.log(num + 1.1234);

/*
//Control Flow
const isSkyBlue = true;
let greeting;

if(isSkyBlue){
    greeting = "The sky is blue!";
}else{
    greeting = "The sky is .. not blue?";
}

console.log(greeting);
*/

const myVariable = 10;
// if using == with if statemnet, 2+2 =="4" true
// but when we use ==== , 2+2 === "4" -> false
/*
if( 2+2 === 4){
    console.log("Hooray! Math still works");
}else{
    console.log("Uhm panic?");
}
*/

/* Else-If Statements
const friendsAtYourParty = 10;

if(friendsAtYourParty === 0){
    Console.log("Cool, now I have all the nachos to myself");
}else if(friendsAtYourParty <= 4){
    Console.log("Perfect amount to play some Mario Kart");
}else{
    console.log("Woooo, play the dance music");
}
*/

// let friendsAtYourPart =0;

// for(let i=0; i<=10; i++){
//     friendsAtYourPart++;
// }
//console.log(friendsAtYourPart);

// while(friendsAtYourPart < 10){
//     // this is some comment to my future self.
    
//     // console.log(friendsAtYourPart);
//     //same function
//     // friendsAtYourPart += 1;
//     // friendsAtYourPart ++;

// }

// const character='f';
// const timesToRepeat = 5;
// let myString = '';

// for(let i =0; i < timesToRepeat; i ++){
//     myString += character;
// }

// console.log(myString);

// function addTwo(number){
//     return number+2;
// }
// const finalAnswer = addTwo(5);
// console.log(finalAnswer);
// console.log(giveBackFive());

// function giveBackFive(){
//     return 5;
// }

// function add(num1, num2){
//     return num1 + num2;
// }

//  console.log(add(5,10));

// function greet(firstName, lastName, honorific, greeting){
//     return `${greeting} ${honorific} ${lastName}! I', extremely pleased you could join us.`
// }

//     console.log(greet("H","Brian","Lord","Salutations"));

// const myHomeCity = "Seoul";
// const myHomeCountry = "Korea";

// function logOutYourHome(city,country){
//     console.log(`You are from ${city} , ${country}`);
// }

// logOutYourHome(myHomeCity, myHomeCountry);

//Scope
/*
function addFive(number){
    const someVariable = "You can't see me outside this function";
    
    console.log(anotherVariable);
    return number +5;
}

if(true){
    const yetSomeOtherVariable = 'Only in scope for the if statement';
    console.log(yetSomeOtherVariable);
}

const anotherVariable = "something else";

addFive(10);
console.log(someVariable);
*/

//const sentence = "This has weitd Casing on It";

//Console.log(sentence.toLowerCase());

//console.log(Math.min(2, 3,1));

///const name = "Brian Holt";
//console.log(name.substr(6,3));

/*
const person = {
    name: "Junghee",
    city: "Seoul",
    favoiteFood :"Kimbap",
    wantsKimbapRightNow: true,
    numberOfKimbapWanted: 5

};

console.log(person);
console.log(person.name);
console.log(person["name"]);
*/

const dog ={
    name: "dong",
    speak(){
        console.log("woof woof");
    }
};

console.log(dog.speak());
console.log(dog.name);

const me ={
    name: {
        first: "junghee",
        last: "Han"
    },
    location: {
        city: "Calgary",
        country: "Korea"
    },
    getAddress(){
        return `${this.name.first} ${this.name.last}
${this.location.city} ${this.location.country} `;
    }
};

console.log(me.getAddress());

// [ => Has Order]
// { -> Not follow the order}
const dayOfTheWeek = [
    "Monday",
    "Tuesday",
    "WednesDay"
];

// console.log(dayOfTheWeek[0]);
const primeNumbers = [10, 1,2,3,5,7,11,13,17];
//String sort
console.log(primeNumbers.sort());

// console.log(primeNumbers.sort(function(num1, num2){
//     if(num1 > num2){
//         return 1;
//     }else if(numb2 > num1){
//         return -1;
//     }
//     return 0;
// }));

console.log(primeNumbers.length);
console.log(primeNumbers.join( " | "));


const courses = [
     { teacher:"Cheryl", course: "JS Functions"},
     { teacher: "Chris", course: "Intro to Vue"},
     { teacher: "Berik", course: "Complete Intro to React"}
];

courses.push({ teacher: "K", course : "webpack"});

// last element delete from the lists
//const course = courses.pop();

// console.log(courses);
// console.log(course);
// make a new list "subarray" first element = index, second element select counts , third element put in the list
// rest items are left in courses
// const subarray = courses.splice(1,3, {course : "Introto Angular"});

// console.log(subarray);
// console.log(courses);

/*
const cities = [
    "Sea",
    "San",
    "Salt",
    "Amsterdam",
    "Hong"
];

// object.foreach --> for is working object.length
cities.forEach(function(name){
    console.log(name, index);
});

const someFunction = function(){ return 5};
const someOtherFunction = function(fn){ return fn()};

someOtherFunction(someFunction);
// .map working similar to foreach
const newCities = cities.map(function(city){
    // return something --> put somethingto new Array
    return city.toUpperCase();
});


const strings = ['a','c','b','d','f'];
strings.map(function(string){ return string.toUpperCase()}).sort();

// => seems similar with function
strings.map((string) => { return string.toUpperCase()}).sort();

const x = 'this is some thing';

x.split('')
    .map(s => s.toUpperCase())
    .joing('');

x.split('')
    .map(s => s.toUpperCase())
    .filter(s => s !== 'I')
    .join('');


const x =5;
const y =10;
const z = 11;

const isTrue = true;

if( x !== y){
    console.log('hese are not equal');
}

if(x === y && y ===z && isTrue){
    console.log('these are all equl');
}

if (isTrue || x ===z) {
   console.log('this is an or statement');
}

*/