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

 const task=new EventEmitter();
 task.on("greet",login);
 task.emit("greet","john");

 start();
 login("john");
 working("john");
 checkout("john");
