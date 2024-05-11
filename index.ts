#! /usr/bin/env node

// Importing main packages which I going to use in this program! 

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

// using chalk animation first for setting timeout

const sleep = () => {
    return new Promise((res) => {
        setTimeout (res,3000)
    });
}

// Making a neontitle for program
async function start() {
    let neonTitle = chalkanimation.neon("\n Student Managemt Team \n");
    await sleep()
    neonTitle.stop()
}
// calling the function
await start()

// Now create a function again start the management again!

async function again() {
    
// Now start the writing code for student management system 

// For creating  a student-id write a variable randomnumber
const randomNumber : number = Math.floor(10000 + Math.random() * 90000)

// Create a variable for balance
let myBalance: number = 0

// Create a answer variable for student information and course selection.
let answer = await inquirer.prompt([

    {
        name:"students",
        type:"input",
        message:"Enter student name:"
    },
    {
        name:"courses",
        type:"list",
        message:"Select your choice of course!",
        choices:["Ms-Excel","HTML","CSS","Typescript","Python","AI","Promt-engineering"]
    }
]);

// Create a tution fee variable in object 
const tutionFee :{[key:string]: number}= {
    "Ms-Excel":2000,
    "HTML":3000,
    "CSS":4000,
    "Typescript":5000,
    "Python":10000,
    "AI":20000,
    "Promt-engineering":15000
}
console.log(chalk.red(`\n Tution Fees: ${tutionFee[answer.courses]} \n`))
console.log(chalk.cyan(`\n Balance: ${myBalance} \n`))

// Create a payment type
let paymentType = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment type!",
        choices:["Bank Transfer","Easypaisa","Jazz cash"]
    },
    {
        name:"amount",
        type:"input",
        message:"Transfer money:"

    }
]);
console.log(chalk.blueBright(`\n You select payment method: ${paymentType.payment}`))

// Create a tution fees variable 
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount){
    console.log(chalk.cyanBright(`Congratulations you are successfully enrolled in ${answer.courses} course.\n`));
    
    let ans = await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"Would you like to know about your status or just exit?",
            choices:["View status","Exit"]
        }
    ])

    if (ans.select === "View status"){
        console.log(chalk.redBright('*********Status*********\n'))
        console.log(chalk.magentaBright(`Student name: ${answer.students}\n`))
        console.log(chalk.magentaBright(`Student Id : ${randomNumber}\n`))
        console.log(chalk.magentaBright(`Course: ${answer.courses}\n`))
        console.log(chalk.magentaBright(`Tution Fees paid: ${paymentAmount}\n`))
        console.log(chalk.magentaBright(`Balance: ${myBalance += paymentAmount}\n`))
    } else{
        console.log(chalk.cyanBright('Exiting student management system.\n'))
    }
} else{
    console.log(('Invalid amount due to course \n'))
}
}

// Now create a do and while function for again running the game /
do {
    await again();
    var againstart = await inquirer
        .prompt(
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n: "
            }
        )
    console.log("\n");
} while (againstart.restart == 'y' || againstart.restart == 'Y' || againstart.restart == 'yes' || againstart.restart == 'YES');