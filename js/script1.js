// Array
var email = ["carljohnson@gmail.com", "gennaroboschetti@alice.it, paoloduzioni@boolean.it, johnnystecchino@virgilio.it"];

// Prompt
var user = prompt("Insert your email").toLowerCase();

var userFounded = false;

// Check
for (var i = 0; i < email.length; i++) {

    if (email[i] === user) {
        userFounded = true;
        break;
    }
}

if (userFounded === true) {
    response = "Welcome back";
} else {
    response = "Sorry, user not found";
}

// Output
document.getElementById("email").innerHTML = response;
