import { EventEmitter } from "events";

const button=new EventEmitter();

button.on("click",()=>{
    console.log("Task 1");
});

button.on("click",()=>{
    console.log("Task 2");
});
// task 1 and task 2 will be executed when the button is clicked

button.emit("click");
