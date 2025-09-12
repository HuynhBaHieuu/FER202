const result = (a, b) => a + b; // arrow function    
console.log(result(1, 2));

let square = num => num * num; // arrow function with single parameter
console.log(square(5));

let greet = (name, timeOfday) =>{
    console.log(`Good ${timeOfday}, ${name}!`);
}
greet("Alice", "morning"); // arrow function with multiple parameters

let sayHello = () => {
    console.log("Hello HuynhBaHieu!");
};
sayHello(); // arrow function with no parameters

let person = {
    name: "Bob",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
person.greet();