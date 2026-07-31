import {writeFile , appendFile} from "fs/promises";

//await writeFile("output.txt", "Hello, World!");
await appendFile("output.txt", "\nJS is much easy to learn than Java");