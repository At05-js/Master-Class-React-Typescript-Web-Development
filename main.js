// class Shape {
//     #privateVariable = 'privateVariable'
//     publicVariable = 'publicVariable'
//     static staticVariable = 'staticVariable'
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     getArea() {
//         return 'not implemented';
//     }
//     getPrivateData() {
//         return this.#privateVariable;
//     }
// }

// const myShape = new Shape(5,10);
// console.log(myShape.publicVariable);
// console.log(myShape.height);
// console.log(myShape.width);
// console.log(myShape.#privateVariable);
// console.log(myShape.staticVariable);
// console.log(Shape.staticVariable);

// class Square extends Shape {
//     getArea() {
//         return this.height * this.width;
//     }
//     getParentClassArea() {
//         return super.getArea()
//     }
// }

// const mySquare = new Square(5,10);
// console.log(mySquare.getArea());
// console.log(mySquare.getParentClassArea());
// console.log(mySquare.getPrivateData());