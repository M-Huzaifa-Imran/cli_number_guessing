#! /usr/bin/env node 


import inquirer from "inquirer";

const randomNum = Math.floor(Math.random() * 6) ;

const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message:"I rolled a dice guess the Number:",
    },
]);
console.log(answer);

if (answer.userGussedNumber === randomNum){
    console.log("Congratulations! You guess the right number"); 
}
else {
    console.log("You guess the wrong number");

}
console.log("The number is" , randomNum)