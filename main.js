// function sum(...thisArgs) {
//     return thisArgs.reduce(function(previous, current) {
//         return previous + current;
//     })
// }
// console.log(sum(5,5,5))

// const userDetails = {
//     name: 'Rysh',
//     address: 'Anywhere',
//     sample: {
//         test: 'test'
//     }
// }
// const newUserDetails = {...userDetails, name: 'May' }
// console.log('userDetails: ', userDetails);
// console.log('newUserDetails: ', newUserDetails);

// const fruits = [ 'apple', 'avocado']
// const newFruits = [...fruits, 'guava']
// console.log('fruits: ', fruits);
// console.log('newFruits: ', newFruits);

// const userDetails = {
//     name: 'Rysh',
//     address: 'Anywhere',
//     sample: {
//         test: 'test'
//     }
// }
// const { name: newName = 'May', address, ...otherDetails } = userDetails;
// console.log(newName);
// console.log(address);
// console.log(otherDetails);

// const fruits = [ undefined, 'guava', 'coconut'];
// const [ firstFruit='strawberry', ...otherFruits ] = fruits;
// console.log(firstFruit);
// console.log(otherFruits);