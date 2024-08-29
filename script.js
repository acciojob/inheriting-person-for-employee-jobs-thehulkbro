// Define the Person class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add the greet method to the Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Define the Employee class that inherits from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor to set the name and age properties for Employee
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the Person prototype for Employee
Employee.prototype = Object.create(Person.prototype);
// Reset the constructor property to Employee
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Example Test Case:

// Create an instance of Person
const alice = new Person("Alice", 25);
alice.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Create an instance of Employee
const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
