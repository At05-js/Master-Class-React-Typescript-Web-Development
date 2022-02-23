// function calculateSquareArea() {
//     setTimeout(()=>{
//         const squareArea = 5*5;
//         console.log(squareArea);
//     },500);
// }
// calculateSquareArea();

// function calculateSquareArea() {
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const squareArea = 5*5;
//             resolve(squareArea);
//             // reject(squareArea);
//         },500);
//     })
// }
// function onFulFilled(data) {
//     console.log('onFulFilled: ',data);
//     console.log('onFulFilled: ',data0);
// }
// function onRejected(data) {
//     console.log('onRejected: ',data);
// }
// calculateSquareArea()
// .then(onFulFilled)
// .catch((reason) => { 
//     console.log('catch: ',reason);
// });

// Promise.resolve('testresolve')
// Promise.reject('testresolve')
// calculateSquareArea()
// .then(onFulFilled)
// .catch((reason) => { 
//     console.log('catch: ',reason);
// });

// const myPromises = [
//     new Promise((resolve,reject) => setTimeout(resolve(100),500)),
//     new Promise((resolve,reject) => setTimeout(resolve(200),500)),
//     new Promise((resolve,reject) => setTimeout(resolve(300),500))
//    new Promise((resolve,reject) => setTimeout(reject,500))
// ];
// function onFulFilled(data) {
//     console.log('onFulFilled: ',data);
// }
// Promise.all(myPromises)
// Promise.allSettled(myPromises)
// Promise.any(myPromises)
// .then(onFulFilled)
// .catch((reason) => { 
//     console.log('catch: ',reason);
// });

let myNumber = 5;
function changeNumber() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            myNumber = 10;
            resolve(myNumber);
        },500);
    })
}
async function startChange() {
    await changeNumber();
    console.log(myNumber);
}
startChange();