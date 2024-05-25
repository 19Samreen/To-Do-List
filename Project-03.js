//To Do List
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want to do in your to do list?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do yo want to add more?",
            default: false
        }
    ]);
    const { todo, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your todo List: \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found.");
}
