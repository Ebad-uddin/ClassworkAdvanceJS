// synchronouse

// console.log("hello");
// console.log("hello again");

// // Asynchrous

// setTimeout(() => {
//     console.log("i will give your time");
// }, 2000);

// setInterval(() => {
//     console.log("Set Interval Function")
// }, 1000);

// let a = 2;
// let b = 4;
// console.log( a + b );

// //CallBack Functions

// function fullName(firstName, lastName, cb){

//     console.log(firstName + lastName)
//     cb()
// }

// function FatherName(){
//     console.log("Imran Khan");
// }

// fullName("Asad", "Umer", FatherName);

// function CreateAccount(cb) {
//     setTimeout(() => {
//       cb();

//   }, 2000);
// }
// function Login(cb) {
//   setTimeout(() => {
//   cb()
//   }, 2500);
// }
// function DataCollected(cb) {
//   setTimeout(() => {
//     cb()
//   }, 3000);
// }
// function DataDisplayed() {
//   setTimeout(() => {
//     console.log("Data Displayed on browser");
//   }, 1000);
// }

// //CallBack Hell

// CreateAccount(function () {
//     console.log("registration");
//     Login(function(){
//         console.log("Successfully login");
//         DataCollected(function(){
//             console.log("Data collected");

//             DataDisplayed();
//         });
//     });
//   });

//Promises

// function TaskComplete(workDone) {
//   return new Promise(function (resolve, reject) {
//     if (workDone) {
//       resolve("successfully done");
//     } else {
//       reject("error");
//     }
//   });
// }

// function fullfilled(res) {
//   console.log(res);
// }
// function error(err) {
//   console.log(err);
// }

// TaskComplete(false).then(fullfilled);
// TaskComplete(false).catch(error);

// console.log()

// function prom(complete){
//   return new Promise(function(resolve, reject){
// console.log("Please wait while fetching data")
//     setTimeout(function(){
// if(complete){
//   resolve("completed");
// }
// else{
//   reject("error")
// }
// }, 1000)
//   })
// }

// let a = prom(true)
// console.log(a)
// prom(false).then(function(res){
// console.log(res);
// }).catch(function(err){
// console.log(err);
// })

function returnVAlue(promCom) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (promCom) {
        resolve("promise successful");
      } else {
        reject("promise rejected");
      }
    }, 2000);
  });
}

// let a = returnVAlue(true)
// console.log(a)

// returnVAlue(true).then(function(result){
// console.log(result)
// }).catch(function(error){
// console.log(error)
// })
// returnVAlue(false)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//Async Await

// async function returnSum(){
//   let a = 3;
//   let b = 4;
//   let result = a + b
//   await console.log("Addition of two numbers is")
//       // console.log(result)
//       return result
// }

// console.log("Please wait . . .")
// returnSum().then(res => console.log(res)).catch(err => console.log(err))
// // let a = returnSum()
// // console.log(a)
// console.log("hold on")
let con = document.getElementById('container');

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
for(let i = 0; i < data.length; i++){
con.innerHTML += data[i].id + " " + "<h3>" + data[i].title+  "</h3>" + "<br>"

}

  });

