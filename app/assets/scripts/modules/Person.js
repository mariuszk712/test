function Person(name, color) {
    this.name = name;
    this.color = color;
    this.greet = function () {
        console.log("Hello there " + this.name);
    }
}


console.log("hello from person.js");