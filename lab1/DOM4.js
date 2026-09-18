import{EventEmitter} from "events";
const form = new EventEmitter();

form.on("submit" , (username, password) => {
    console.log('Form submitted ');
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
});

form.emit("submit", "Raju", "12345");
// for the above code, the output will be:
// Form submitted
// Username: Raju
// Password: 12345