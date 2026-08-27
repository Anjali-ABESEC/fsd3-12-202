
import {readFile , appendFile , writeFile} from "fs/promises";


const readData= async (filename)=>{
    try{
 const content = await readFile(filename , "utf-8");
 return content;
}
 catch(e){
    console.log(e.message);
    console.log("File not found");
 }
 finally{
    console.log("Read operation completed");
 }
};

const writeData= async (filename , content)=>{
   try{
    await writeFile(filename , content);
   }
   catch(error){
    console.log(error.message);
   }
};

const appendData = async (filename , content)=>{
    try{
        await appendFile(filename , content);
    }
    catch(error){
        console.log(error.message);
    }
};

const deleteFile= async (filename)=>{
    try{
        await unlink(filename);
    }
    catch(error){
        console.log("file not found");
    }
};

// if a function uses await keyword , then the fn must be async

const data = await readData ("file4.js");
console.log(data);