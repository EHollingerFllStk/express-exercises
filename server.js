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


//Exercise 3 - Magic 8 Ball at use magic/random
const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const random = magic[Math.floor(Math.random() * magic.length)]

 app.get("/magic/:random", (req, res) => {
    res.send(`Magic Ball says ${random}`)
 })

//Set up listener
app.listen(3000, () => {
    console.log("Express is listening!")
})



