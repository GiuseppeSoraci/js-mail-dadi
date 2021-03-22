// Generate a random number
var player = Math.floor(Math.random() * 6) + 1;

var cpu = Math.floor(Math.random() * 6) + 1;

// Check 
if (player > cpu) {
    result = "Congratulations, you have won!";
} else if (player = cpu) {
    result = "You and the CPU tied";
} else {
    result = "Sorry, you lost";
}


// Output
document.getElementById("user").innerHTML = player;
document.getElementById("cpu").innerHTML = cpu;
document.getElementById("result").innerHTML = result;