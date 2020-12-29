// Login

// var user = ["farooqi@gmail.com", "12345"]

//    var email = "farooqi@gmail.com" ;
//    var password = "12345";
var url = "http://localhost:5000";

function login() {

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;



    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/index");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({
        email : email,
        password : password
    }));
    Http.onreadystatechange = (e) => {
        alert(Http.responseText)
    }
    return false;
}

//Dashboard

// var newpost = [];
// var title;

function recentpost() {

    // title = document.getElementById("title").value;

    newpost.push({
        title: document.getElementById("title").value,
        post: document.getElementById("post").value
    });

    for (var i = 0; i < newpost.length; i++) {
        document.getElementById("heading").innerHTML = newpost[i].title;
        document.getElementById("recent-post").innerHTML = newpost[i].post;
    }

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/index");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(newpost));
    Http.onreadystatechange = (e) => {
        //  JSON.parse(Http.responseText);
        console.log(Http.responseText)
        // alert(JsonResp.message);

    }
    return false
}