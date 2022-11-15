//require packages and dependencies
const express = require("express");
const port = 3000;

//Initialize the express app
const app = express();

//define routes
app.get("/", (req, res) => {
    res.send("Hello World!")
});

//Exercise #1 
app.get("/greeting/:name", (req, res) => {
    res.send(`What's up ${req.params.name}?`)
})

//Exercise 2 Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip is $" + req.params.total * (req.params.tipPercentage/100) + ".")
})

//Set up listener
app.listen(3000, () => {
    console.log("Express is listening!")
})



