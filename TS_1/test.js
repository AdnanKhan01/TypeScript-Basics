// console.log("Hello world")
// var greet: string= "hello from typescript"
// var num: number[];
// num=[1,2,3,4,5]
// var firstname: string= "Adnan"
// console.log(firstname)
// let age= 25;
// let pi: number= 3.14
// let test: any= true
// console.log(age)
// console.log(pi)
// console.log(test)
// console.log(greet)
// console.log(num)
// console.log(num[3])
function sum(x, y) {
    console.log("The sum is ", x + y);
}
sum(5, 5);
function greet(name, msg) {
    if (msg === void 0) { msg = "Hello"; }
    console.log(msg, "", name);
}
greet("Adnan", "Hi");
var sum1 = function (x, y) {
    return x + y;
};
console.log("Sum is", sum1(10, 10));
var fun1 = function () {
    console.log("Hi there");
};
fun1();
var var1;
var1 = 2;
//var1 = "pak"
var1 = 2.5;
//var1= null
console.log(var1);
var math1 = Math.random() > 0.5
    ? undefined
    : "Mathematician";
console.log(math1);
var admiral;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
//admiral.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.
var inventor = "Hedy Lamarr";
inventor.toUpperCase(); // Ok: string
//inventor.toFixed();   //Error
// Type of scientist: number | string
var scientist = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;
if (scientist === "Rosalind Franklin") {
    // Type of scientist: string
    scientist.toUpperCase(); // Ok
}
// Type of scientist: number | string
//scientist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
var researcher = Math.random() > 0.5
    ? "rosalind franklin"
    : 51;
if (typeof researcher === "string") {
    researcher = researcher.toUpperCase(); // Ok: string
}
console.log(researcher);
if (!(typeof researcher === "string")) {
    researcher.toFixed(); // Ok: number
}
else {
    researcher = researcher.toLowerCase(); // Ok: string
}
console.log(researcher);
typeof researcher === "string"
    ? researcher.toUpperCase() // Ok: string
    : researcher.toFixed(); // Ok: number
var value;
value = 190;
console.log("Numeric value of the value: " + value);
value = "Welcome to TypeScript!";
console.log("String value of the value: " + value);
/*Union type annotations can mix and match between literals and primitives.
A representation of a lifespan, for example, might be represented by any
number or one of a couple known edge cases:*/
var lifespan;
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
//lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"
var ar; //: when declared with : can only assign this specific value
ar = "adnan";
//ar= "ali"   //error
//let ar= "adnan"
//ar = "ali"   //not ok
var geneticist = Math.random() > 0.5
    ? "Barbara McClintock"
    : undefined;
if (geneticist) {
    geneticist.toUpperCase(); // Ok: string
}
var rawDataFirst;
var rawDataSecond;
var rawDataThird;
function adnan(c) {
    console.log("hello", c);
}
var f = null;
adnan(f);
// Typrscript Objects
// Objects in TS are like a json object
var car = {
    model: "Honda",
    make: 2009,
    "colour": "Red",
    checkM: function () {
        //return this.model
    }
};
car.checkM = function () {
    console.log("The model is :", car.model);
};
car.checkM();
function addTwo(a, b) {
    return a + b;
}
console.log(addTwo(7, 8)); // logs 15
var poet = {
    born: 1935,
    name: "Mary Oliver"
};
console.log(poet['name']);
//---------------------------------------
var poetLater;
// Ok
poetLater = {
    born: 1935,
    name: "Mary Oliver"
};
var anoapple;
anoapple = {
    colour: "red",
    market: "isb"
};
console.log(anoapple.colour);
console.log(anoapple.market);
// Ok
var hasBoth = {
    first: "Sarojini",
    last: "Naidu"
};
var hasStartString = {
    start: new Date('1879/2/19')
};
console.log(hasStartString.start);
// Ok: all fields match what's expected in Poet
var poetMatch = {
    born: 1928,
    name: "Maya Angelou"
};
var extraProperty = {
    //activity: "walking",  //error
    born: 1935,
    name: "Mary Oliver"
};
// Ok
var poemMatch = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath"
    },
    name: "Lady Lazarus"
};
// Ok
var ok = {
    author: "Rita Dove",
    pages: 80
};
var qqq = {
    pages: 20
};
// Ok: author is provided as undefined
var hasRequired = {
    author: undefined
};
//const missingRequired: Writers = {};
// ~~~~~~~~~~~~~~~
// Error: Property 'author' is missing in type
// '{}' but required in type 'Writers'.
//---------------------------------------------------------------------------------------
