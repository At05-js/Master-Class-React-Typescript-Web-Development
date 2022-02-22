// // testing hoisting with var - undefined
// console.log(test);
// var test = "test";
// // testing hoisting with let - error
// console.log(test);
// let test = "test";
// // testing hoisting with const - error
// console.log(test);
// const test = "test";
// // testing hoisting on a function
// test();
// function test() {
//     console.log("I'm a function");
// }
// // scope
// function test() {
//     var nice = "nice";
// }

// console.log(nice);

// // block scope
// if(true) {
//     var test = "test";
// }
// console.log(test)
// if(true) {
//     let test = "test";
// }
// console.log(test)
// if(true) {
//     const test = "test";
// }
// console.log(test)

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         alert(i);
//     }, 500);    
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         alert(i);
//     }, 500);    
// }
// // function factory
// for (var i = 0; i < 3; i++) {(
//     function test(o){
//         alert(o);
//     })(i)
// }