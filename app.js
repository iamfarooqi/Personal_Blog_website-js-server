// Login

var user = ["farooqi@gmail.com", "12345"]

//    var email = "farooqi@gmail.com" ;
//    var password = "12345";

function login() {

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email === "farooqi@gmail.com" && password === "12345"){

         alert("success")

         window.location.href = "./index.html";
    }else{
        alert("wrong")
    }
    


    return false;
}


//Dashboard

var newpost = [];

function recentpost() {

    newpost.push(document.getElementById("post").value);

    document.getElementById("heading").innerHTML = "Recent Blog";
    document.getElementById("recent-post").innerHTML = newpost;







    return false;
}