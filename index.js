// let firstName = "Sunday"; //or use "sunday "
// let lastName = "Muuo";
// let fullName = firstName + " " + lastName;
// fullName = "Sunday Titus";
// let nameJina = "Obama";
// let greeting = "Hi there";
// //write a function that warns  you "Hi there, Obama!"
// function greetingfun() {
//   let greetStr = greeting + ", " + nameJina + "!";
//   console.log(greetStr);
// }
// greetingfun();
// let myPoints = 3;
// create 2 functions one adds 3 points the other removes 1 point
// function add3points() {
//  myPoints = myPoints + 3;
// }
// function remove1point() {
//   myPoints -= 1;
// }

// add3points();
// add3points();
// add3points();
// remove1point();
// remove1point();

// console.log(myPoints);
let errorParagrapgh;

errorParagrapgh = document.getElementById("error");

function purchase() {
  errorParagrapgh.textContent = "Something Went Wrong, Please try again";
  // console.log("bought!");
}
