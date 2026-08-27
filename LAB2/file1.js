import {writeFile , appendFile , readFile} from "fs/promises";

// await writeFile("output.txt", "Hello, World!");
await appendFile("output.txt", "\nJS is much easy to learn than Java 😒 ");
const data = await readFile("output.txt", "utf-8 ");
 console.log(data);
