

var express = require("express")
var app = express();

app.get("/login", function(req, res) {
   res
   .status(200)
   .send("we are on login page")
});


app.listen(3000, function(){
    console.log("we are serving at ")
});