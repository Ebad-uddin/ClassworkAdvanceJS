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


let randNum = Math.round(Math.random() * 100);
if(randNum % 3 === 0){
            console.log("Fizz");
        }
        else if(randNum % 5 === 0){
            console.log("Buzz");
        }
        else if(randNum % 3 === 0 && randNum % 5 === 0 ){
            console.log("FizzBuzz");
        }


console.log(randNum) 



//Task-4

// Task-4

let arr = ["v", "c", "u", "y", "t", "e"];

// let sorting = ;
console.log(arr.sort());