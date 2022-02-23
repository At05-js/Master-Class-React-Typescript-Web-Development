// class Printer {
//     name="I am Printer Class"
//     printName() {
//         console.log('printName: ', this.name);
//     }
//     printNameArrowFn=()=>{
//         console.log('printNameArrowFn: ', this.name);
//     }
// }
// console.log(this);
// this.console.log(this);

// const myPrinter = new Printer();
// myPrinter.printName();
// myPrinter.printNameArrowFn();

// const customPrinter = {
//     name: 'I am Custom Printer',
//     printName: myPrinter.printName,
//     printNameArrowFn: myPrinter.printNameArrowFn,
// }

// customPrinter.printName();
// customPrinter.printNameArrowFn();