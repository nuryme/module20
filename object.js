//-----------------------------    String   -----------------------------------
//----------------------------  declaration
/*
const country = 'Bangladesh';
const division = "Comilla";
const district = `Chandpur`;
const thana = new String('hajigonj'); //special purpose
console.log(typeof district);
console.log(typeof thana);
const capital = "dhaka";
console.log(capital.length);
const city = "dha ka";
console.log(city.length);
//string is imutable = change kora jay na
let a = "dhaka";
a[0] = "D"; //string is immutable
console.log(a);
const school = "RAJ UK Uttara Model College";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
const book = "chemistry";
const subject = "CheMistry";
if(book.toLowerCase() === subject.toLowerCase()) {
    console.log("Book and subject are same");
}
else {
    console.log("Book and subject are not same");
}
const drink = "water";
const liquid = "   water  ";
if(drink.trim() === liquid.trim()) {        //.trim() start and end er space shoray. majher spae shoray na.
    console.log("drink and liquid are same");
}
else {
    console.log("drink and liquid are not same");
}
const address = "andorKilla";
console.log(address.slice(2, 6));
const sentence = "I am the author of the book ";
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));
const friend = "rahim, kahim, dahim, lahim, sahim";
console.log(friend.split(','))   */

//-----------------------------    Array   -----------------------------------
//array is mutable = change kora jay
/*
const num = [10, 11, 12, 13, 14, 15, 16 ];
console.log(num);
num[1] = 100;  //attay is mutable
console.log(num);
const realFriend = ['rahim', 'kahim', 'dahim', 'lahim'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));      */

//-----------------------------    Methods
/*
const first = "Nur";
const Last = "Nahar";
console.log(first.concat(' ').concat(Last))
console.log(first.includes('u'));   */
//---------------  reversing
/*
const sentence = 'I am learning web dev.';
let ultano = '';
for(const letter of sentence) {
    // console.log(letter);
    ultano = letter + ultano;
}
console.log(ultano);
for(let i = 0; i < sentence.length; i++) {
    console.log(i);    //index numbers of sentence
    console.log(sentence[i]);
}
for(let i = 0; i < sentence.length; i++) {
    ultano = sentence[i] + ultano;
}
console.log(ultano)
//shortcut for reversing
const reversed = sentence.split('').reverse().join('');
console.log(reversed);     */

//-----------------------------    Objects   -----------------------------------
/*
const age = 20;
const school = "kurmito";
const isPassed = true;
const subject = ["bangla", "english", "chemistry", "biology"];
//----------------------------- objects = non-primitive types
const bottle = {
    brand: "apple", 
    price: 45,      //number
    color: "white",  //string
    isClean: false,  //boolean
    chapters: ["first", "second", "third"], //array
    exams: {                    //object
        name: "final",
        marks: 100,
    },
    "fav places": ["bandorban", "saintmartin", "kuakata"],      //space jukto key name
}
//dot notation (dot diye object er property er value access kora)
console.log(bottle);
console.log(bottle.brand);
const canDrink = bottle.isClean;
console.log(canDrink);
// console.log(bottle."fav places")     //***space jukto key name dot notation diye access kora jay na
// console.log(bottle.fav places)     //***space jukto key name dot notation diye access kora jay na
//bracket notation
console.log(bottle['fav places']);
//------------- updating new value
bottle.price = 200;     //with dot notation
console.log(bottle.price);
bottle["fav places"]= "just cox-bazar"      //with bracket notation
console.log(bottle["fav places"]);
const newChapters = "chapters";
console.log(bottle[newChapters]);
const Drinking = "isClean";
bottle[Drinking] = true;
console.log(bottle);    */
//------------------------  objects methods
/*
const computer = {
    brand: "Apple",
    price: 15000,
    processor: "i5",
    RAM: 8,
    storage: "1TB SSD",
    doing: {
        game: 'playing',
        reading: 'book',
        watching: 'youtube',
        coding: {
            html: "done",
            css: "done",
            javascript: "not started",
        }
    },
    upcoming: ["mongoBD", "react", "Firebase"],
}
console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(computer.doing)
console.log(computer.doing.watching);
console.log(computer.doing.coding);
console.log(computer.doing.coding.javascript);
computer.doing.coding.javascript = "working on";
console.log(computer.doing.coding.javascript);
console.log(computer.upcoming[1]);
computer.upcoming[1] = "NodeJS";
console.log(computer.upcoming[1]);
//deleting property
delete computer.processor;
console.log(computer);  */
//------------------------------    loop an object
const mobile = {
    brand: "Apple",
    price: 15000,
    RAM: 8,
    storage: "1TB SSD",
    color: "black",
}
for(const lala in mobile){
    console.log(lala);
    console.log(mobile[lala]);
}
const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    // console.log(key);
    console.log(key,"=", mobile[key]);
}
//------------------------------  objects declarations
/* 1. */
const pen = { brand: "Alltime", price: 10, color: "black",}
/* 2. */
const pencitl = new Object();
console.log(pencitl);
/* 3. */
const rubber = Object.create({});
console.log(rubber);
/* 4 */  //using class