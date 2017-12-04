class Person{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    
    
    greet() {
        console.log("Hi there " + this.name);
    }
}

module.exports = Person;