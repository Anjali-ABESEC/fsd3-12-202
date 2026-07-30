//front end clask , vue js , angular js , react js (css) bootstrap , tailwind css , material ui
 //back end JS(node js) , express js , php , python (django) , java (spring boot) ,fastapi 



import{EventEmitter} from 'node:events';
 const login = (name) => {
    console.log(`${name} is logged in`);
 };

 const start=()=>{
    console.log("Application started");
 };
 const working=(name)=>{
    console.log(`${name} add items to cart`);
 };
 const checkout=(name)=>{
    console.log(`${name} logged out`);
 };

 const exit=()=>{
    console.log("system shut down");
 }

 const task=new EventEmitter();
 task.once("greet",start);
 task.on("greet",login);
 task.on("greet",working);
 task.on("greet",checkout);
 task.once("exit",()=>{
    console.log("system shut down");
 });
 
 task.emit("greet","john");
 task.emit("greet","jane");
 task.off("greet",working);
 task.emit("greet","james");
 task.emit("exit","manager");


 