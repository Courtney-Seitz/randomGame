//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
//start counter
let count = 0;
let ran = setInterval(function(){

//select random number between 0 and 1
let num = Math.random();
console.log(num);

//increment counter each time random number is generated
let increm = count+=1;
console.log(increm);

//if greater than .75, stop timer an console.log number of tries to reach greater then .75
if (num > .75) {
clearInterval(ran);
console.log("It took " + increm + " tries before we picked greater than .75!");
}
}, 1000);

}