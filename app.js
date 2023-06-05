//task-2 


// for(let i = 0; i <= 100; i++){
//     console.log(i)
//     if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else if(i % 3 === 0 && i % 5 === 0 ){
//         console.log("FizzBuzz");
//     }
//     else{
//         console.log("Error");
//     }
// }


// let randNum = Math.round(Math.random() * 100);
// if(randNum % 3 === 0){
//             console.log("Fizz");
//         }
//         else if(randNum % 5 === 0){
//             console.log("Buzz");
//         }
//         else if(randNum % 3 === 0 && randNum % 5 === 0 ){
//             console.log("FizzBuzz");
//         }


// console.log(randNum) 



// //Task-4

// // Task-4

// let arr = ["v", "c", "u", "y", "t", "e"];

// // let sorting = ;
// console.log(arr.sort());

// Immediately invoke function

(async function (){
await fetch('/json/recipes.json').then(response => response.json()).then(data => {
    console.log(data)
    let container = document.getElementById('container');
    let rootElem = document.getElementById('rootElem');
    for(let i = 0; i < data.length; i++){
        // console.log(data[i])
        rootElem.innerHTML += `
        <div class="card">
    <div class="card-body">
    <h5 class="card-title"> ${data[i].title} </h5>
    <p class="card-text"> ${data[i].ingredients}</p>

  </div>
</div>
     `

    }



})  

})()


























