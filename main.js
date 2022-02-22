// OBJECT

// const orig = {
//     test: "test",
//     userDetails: {
//         address: {
//             province: 'Province',
//             country: 'country'
//         },
//         name: 'myObject'
//     }
// }
// const copy = orig;
// copy.test = 'newTest';
// console.log('orig',orig);
// console.log('copy',copy);

// const orig = {
//     test: "test",
//     userDetails: {
//         address: {
//             province: 'Province',
//             country: 'country'
//         },
//         name: 'myObject'
//     }
// }
// const copy = Object.assign({}, orig);
// copy.userDetails.name = 'newName';
// console.log('orig',orig);
// console.log('copy',copy);

// const orig = {
//     test: "test",
//     userDetails: {
//         address: {
//             province: 'Province',
//             country: 'country'
//         },
//         name: 'myObject'
//     },
//     myFn: () => {},
//     undef: undefined,
// }
// const copy = JSON.parse(JSON.stringify(orig));
// copy.userDetails.name = 'newName';
// console.log('orig',orig);
// console.log('copy',copy);

// ARRAY

// const orig = ['avocado', 'apple', { name: 'strawberry' }];
// const copy = orig;
// copy.push('guava');
// console.log('orig: ', orig);
// console.log('copy: ', copy);

// const orig = ['avocado', 'apple', { name: 'strawberry' }];
// const copy = orig.slice();
// copy.push('guava');
// console.log('orig: ', orig);
// console.log('copy: ', copy);

// const orig = ['avocado', 'apple', { name: 'strawberry' }];
// const copy = orig.slice();
// copy[2].name = 'coconut';
// console.log('orig: ', orig);
// console.log('copy: ', copy);

const orig = ['avocado', 'apple', { name: 'strawberry' }];
const copy = JSON.parse(JSON.stringify(orig));
copy[2].name = 'coconut';
console.log('orig: ', orig);
console.log('copy: ', copy);