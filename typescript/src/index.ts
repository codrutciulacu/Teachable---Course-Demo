import {utilities} from "./utils"

console.log("TypeScript project initialized.");

let age: number = 25;
let name: string = "Codrut"
let numbers: number[] = [1, 2, 3, 4, 5, 6]
let val: any = 10
let x = 10;
let user: [string, number] = ["Codrut", 20]
let unknownVar: unknown = "str";
type ID = string | number;

let y: ID = 10;
utilities.func()

y = "str";

let pet: { name: string; age: number } = { name: "Azorel", age: 2};

interface Pet {
    name: string;
    age: number;
}

interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}

interface Children extends Person {
    noOfGames: number;
}

let pet2: Pet = {name: "Azorel2", age: 4}
let pet3: Pet = {name: "Azorel2", age: 4}
let employee1: Person = { name: "Gigel" };
let employee2: Employee = { name: "Gigel", salary: 100 };

function greetPerson(person: Person) {
    console.log("Hello " + person.name)
}

function greetEmployee(person: Employee) {
    console.log("Hello " + person.name + " with salary " + person.salary)
}

greetPerson(employee1)
greetPerson(employee2)
greetEmployee(employee2)

if(typeof unknownVar === "string") {
    console.log(unknownVar.toLowerCase())
}

numbers.map(elem => elem + 1)
numbers.map(elem => elem + 2)

user[0]
user[1]

function increaseAge(age: number) {
    return age + 1
}

greet("Codrut")
greet2("Codrut")

function doWork(work: (a: number, b: number) => number) {
    work(1, 2)
}

function greet(name: string, greeting?: string){
    if(greeting !== undefined){
        
    }
}

function greet2(name: string, greeting: string = "Hello"){
}

function stringify<T>(value: T){
    // doSomething with T
}

stringify(employee1)
stringify(employee2)

type SourceType = string;

// backend1, backend2, backend3
interface Information {
    source: SourceType;
    name: string;
}

interface Product {
    title: string;
    photoUrl: string;
    price: number;
}

let productList: Product[] = [{
    title: "ABC",
    photoUrl: "https://alabala.com/photo.png",
    price: 10
}, {
    title: "ABC2",
    photoUrl: "https://alabala.com/photo2.png",
    price: 9
}, {
    title: "ABC2",
    photoUrl: "https://alabala.com/photo2.png",
    price: 9
}]