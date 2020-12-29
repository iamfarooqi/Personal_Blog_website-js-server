var admin = {
    email: "farooqi@gmail.com",
    pass: "12345"
}
var PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require("cors");
var morgan = require('morgan');
var bodyParser = require('body-parser');
let users = [];
const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get("/", (req, res, next) => {
    res.send("Hello")
})

app.post("/index", (req, res, next) => {
    if (admin.email === req.body.email && admin.pass === req.body.password) {
        res.send("Login")
    } else {
        res.send("wrong")
    }
})


app.listen(PORT, () => {
    console.log("server is running on " + PORT);
})