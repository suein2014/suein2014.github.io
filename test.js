//setTimeout(function () {
//    console.log("First");
//    setTimeout(function () {
//        console.log("Second");
//        setTimeout(function () {
//            console.log("Third");
//        }, 3000);
//    }, 4000);
//}, 1000);


//
//new Promise(function(resolve, reject){ // 当Promise被构造时， 起始函数被异步执行
//    setTimeout(function(){
//        console.log('First');
//        resolve();
//    }, 1000);
//
//}).then(function(){
//    return new Promise(function(resolve, reject){
//        setTimeout(function(){
//            console.log('Second');
//            resolve();
//        }, 4000);
//    });
//}).then(function(){
//    setTimeout(function(){
//        console.log('Third');
//    }, 3000);
//});



//new Promise(function (resolve, reject) {
//    var a = 0;
//    var b = 1;
//    if (b == 0) reject("Divide zero");
//    else resolve(a / b);
//}).then(function (value) {
//    console.log("a / b = " + value);
//}).catch(function (err) {
//    console.log(err);
//}).finally(function () {
//    console.log("End");
//});


//
//new Promise(function (resolve, reject) {
//    console.log(1111);
//    resolve(2222);
//}).then(function (value) {
//    console.log(value);
//    return 3333;
//}).then(function (value) {
//    console.log(value);
//    throw "An error";
//}).catch(function (err) {
//    console.log(err);
//});

//1111
//2222
//3333
//An error


//function print(delay, message){
//    return new Promise(function(){
//        setTimeout(function(){
//            console.log(message);
//            resolve();
//        }, delay);
//    })
//}
//
//print(1000, 'First').then(function(){
//    return print(4000, 'Second');
//}).then(function(){
//    print(3000, 'Third');
//});



//async function asyncFunc() {
//    await print(1000, "First");
//    await print(4000, "Second");
//    await print(3000, "Third");
//}
//asyncFunc();



script start
setTimeout
async1 start
async2
async1 end
promise1
promise2
script end














