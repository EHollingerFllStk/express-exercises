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



app.listen(3000, () => {
    console.log("Express is listening!")
})

