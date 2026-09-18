//document object model (dom)

import { EventEmitter } from "events";

const button = new EventEmitter();
button.on("click",()=>{
    console.log("Button clicked"); 
});
console.log("Before click");

button.emit("click");
console.log("After click");
