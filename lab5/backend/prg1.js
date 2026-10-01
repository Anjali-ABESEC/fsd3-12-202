import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");

res.send(`
    <h1>Welcome to Express</h1>
    <h2> I am responding from express framework</h2>
    <h3> The code is minimal and easy to understand</h3>
    `)});

    app.get("/about", (req, res) => {
        res,send("<h2> About page</h2>");
    });

    app.get("/products", (req, res) => {
        const products = {
            id : 1,
            name : "Iphone 14",
            price : 120000,
        };
        res.send(products);
    });

    // this must be the last line of code in this file
app.listen(4444, () => console.log("prg1 is running at 4444"));