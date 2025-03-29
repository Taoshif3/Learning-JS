// OOP = Object Oriented Programming (in JavaScript)
// class, object, constructor 
// 4 key features -> Encapsulation, Inheritance, Abstraction, Polymorphism

// Encapsulation -> binding data & functions that manipulate the data (grouping + protecting)

// Person => name, age, displayInfo()
// Student => name, age, id, displayInfo()
// Teacher => name, age, id, salary, displayInfo()

class Person { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log("\nName: " + this.name);
        console.log("Age: " + this.age );
    }
}

// Inheritance -> one class can inherit
// 1. Single Inheritance
// 2. Multiple Inheritance (JavaScript doesn't have direct multiple inheritance of classes)
// 3. Multilevel Inheritance
// 4. Hierarchical Inheritance
// 5. Hybrid Inheritance

class Student extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo(); 
        console.log('Student ID: ' + this.id );
    }
}

class Teacher extends Person {
    constructor(name, age, id, salary) {
        super(name, age);
        this.id = id;
        this.salary = salary;
    }
    displayInfo() {
        super.displayInfo();
        console.log('Teacher ID: ' + this.id);
        console.log('Salary: ' + this.salary + '\n');
    }
}

const s1 = new Student('Gazi', 18, 1234);
const p1 = new Person('Badhon', 19);
const t1 = new Teacher('Dhamai Sir', 40, "a123", 50000);

s1.displayInfo();
p1.displayInfo();
t1.displayInfo();

// Polymorphism -> many forms
// 1. Method Overloading (JavaScript doesn't have true method overloading)
// 2. Method Overriding
// 3. Operator Overloading (JavaScript has limited operator overloading)

// Abstraction -> hiding the complexity
// 1. Abstract Class (JavaScript doesn't have abstract classes in the traditional sense)
// 2. Interface (JavaScript doesn't have interfaces like Java or C#)
// 3. Abstract Method (Can be simulated with errors or placeholders)
// 4. Abstract Data Type (General concept, not specific to JavaScript classes)