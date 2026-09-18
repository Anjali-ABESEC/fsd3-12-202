import{EventEmitter}from "events";

const button=new EventEmitter();

button.on("click",(uname)=>{
    console.log(`button clicked by ${uname}`);
});
// task 1 and task 2 will be executed when the button is clicked

button.emit("click", "Raju");
button.emit("click", "Ramesh");
button.emit("click", "Suresh");
button.emit("click");