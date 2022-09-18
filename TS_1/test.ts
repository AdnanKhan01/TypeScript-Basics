
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

function sum( x : number , y: number){
    console.log("The sum is ", x+y)
}

sum(5,5)
function greet( name: string , msg= "Hello"){
    console.log(msg,"", name)
}
greet("Adnan", "Hi")

let sum1 = (x: number, y: number): number => {
    return x + y;
}

console.log("Sum is", sum1(10,10))

let fun1= () => {
    console.log("Hi there")
}

fun1()
//Strict null checks
type raw_data = number | boolean    //aliases

let var1 : raw_data

var1= 2
//var1 = "pak"
var1 = 2.5
//var1= null


console.log(var1)

let math1= Math.random() > 0.5
? undefined
: "Mathematician"

console.log(math1)

let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
//admiral.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.

let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase(); // Ok: string
//inventor.toFixed();   //Error
 

// Type of scientist: number | string
let scientist = Math.random() > 0.5
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



let researcher = Math.random() > 0.5
? "rosalind franklin"
: 51;
if (typeof researcher === "string") {
researcher= researcher.toUpperCase(); // Ok: string
}

console.log(researcher)

if (!(typeof researcher === "string")) {
    researcher.toFixed(); // Ok: number
    } else {
    researcher= researcher.toLowerCase(); // Ok: string
    }

console.log(researcher)

typeof researcher === "string"
? researcher.toUpperCase() // Ok: string
: researcher.toFixed(); // Ok: number

let value: number | string;  
value = 190;  
console.log("Numeric value of the value: " + value);  
value = "Welcome to TypeScript!";  
console.log("String value of the value: " + value);


/*Union type annotations can mix and match between literals and primitives.
A representation of a lifespan, for example, might be represented by any
number or one of a couple known edge cases:*/
let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
//lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"

let ar: "adnan" //: when declared with : can only assign this specific value
ar= "adnan"

//ar= "ali"   //error

//let ar= "adnan"
//ar = "ali"   //not ok

let geneticist = Math.random() > 0.5
? "Barbara McClintock"
: undefined;
if (geneticist) {
geneticist.toUpperCase(); // Ok: string
}
//geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.

type RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;


type Id = number | string;
// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined;
function adnan(c ){
    console.log("hello", c)

}
let f = null
type World = "world";
 
type Greeting = `hello ${World}`;
adnan(f)

// Typrscript Objects

// Objects in TS are like a json object

let car= {
    model: "Honda",
    make: 2009,
    "colour": "Red",
    checkM: function(){
        //return this.model
    }
}

car.checkM= function() {
    console.log("The model is :" ,  car.model)
}

car.checkM()

function addTwo(a: number, b: number): number {
    return a + b;
}
 
console.log(addTwo(7, 8)); // logs 15

const poet = {
    born: 1935,
    name: "Mary Oliver",
    };

console.log(poet['name'])
//---------------------------------------
let poetLater: {
    born: number;
    name: string;
    }
    // Ok
    poetLater = {
    born: 1935,
    name: "Mary Oliver"
    };
    type apple = {
        colour: string;
        market: string;
        }

    let anoapple : apple

    anoapple={
        colour :"red",
        market: "isb"
    }
    console.log(anoapple.colour)
    console.log(anoapple.market)

    type FirstAndLastNames = {
        first: string;
        last: string;
        };
        // Ok
        const hasBoth: FirstAndLastNames = {
        first: "Sarojini",
        last: "Naidu",
        };
        // const hasOnlyOne: FirstAndLastNames = {
        // first: "Sappho"
        // };
        // Property 'last' is missing in type '{ first: string; }'
        // but required in type 'FirstAndLastNames'.

        type TimeRange = {
            start: Date;
            };

        const hasStartString: TimeRange = {
        start: new Date('1879/2/19')

        };
console.log(hasStartString.start)

//Excess Property

type Poet = {
    born: number;
    name: string;
    }
    // Ok: all fields match what's expected in Poet
    const poetMatch: Poet = {
    born: 1928,
    name: "Maya Angelou"
    };
    const extraProperty: Poet = {
    //activity: "walking",  //error
    born: 1935,
    name: "Mary Oliver",
    };
    // Error: Type '{ activity: string; born: number; name: string; }'
    // is not assignable to type 'Poet'.
    // Object literal may only specify known properties,
    // and 'activity' does not exist in type 'Poet'.
    
//Nested Objects

type Poem = {
    author: {
    firstName: string;
    lastName: string;
    };
    name: string;
    };
    // Ok
const poemMatch: Poem = {
    author: {
    firstName: "Sylvia",
    lastName: "Plath",
    },
    name: "Lady Lazarus",
    };
 
    //const poemMismatch: Poem = {
       //author: {
       //name: "Sylvia Plath",
        //lastName: "adsad"
      //  },
        // Error: Type '{ name: string; }' is not assignable
        // to type '{ firstName: string; lastName: string; }'.
        // Object literal may only specify known properties, and 'name'
        // does not exist in type '{ firstName: string; lastName: string; }'.
    //     name: "Tulips",
    //    };
        
       type Author = {
        firstName: string;
        lastName: string;
        };
        type Poem1 = {
        author: Author;
        name: string;
        };

        // const poemMismatch: Poem = {
        //     author: {
        //     name: "Sylvia Plath",
        //     },
        //     // Error: Type '{ name: string; }' is not assignable to type 'Author'.
        //     // Object literal may only specify known properties,
        //     // and 'name' does not exist in type 'Author'.
        //     name: "Tulips",
        //     };

        //Optional properties

        type Book = {
            author?: string;
            pages: number;
            };
            // Ok
            const ok: Book = {
            author: "Rita Dove",
            pages: 80,
            };
            const qqq: Book = {
            pages: 20
            };
            // Property 'author' is missing in type qqq but no error as optional
            /*
            Keep in mind there is a difference between optional properties and
properties whose type happens to include undefined in a type union. A
property declared as optional with ? is allowed to not exist. A property
declared as required and | undefined must exist, even if the value is
undefined.

            */

type Writers = {
    author: string | undefined;
    editor?: string;
    };
    // Ok: author is provided as undefined
    const hasRequired: Writers = {
    author: undefined,
    };
    //const missingRequired: Writers = {};
    // ~~~~~~~~~~~~~~~
    // Error: Property 'author' is missing in type
    // '{}' but required in type 'Writers'.

//---------------------------------------------------------------------------------------
