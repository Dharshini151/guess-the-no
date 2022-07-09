const submitButton = document.getElementById("submit-button");
console.log(submitButton);
const message = document.getElementById("message");
const lives = document.getElementById("lives");
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
var text;
var live=10;
alert("Welcome to Number Guessing Game")
submitButton.onclick = () =>{
    var inputValue = document.getElementById("input-number").value;
    console.log(randomNumber);
    live--;
    if(inputValue == randomNumber){
        location.href = "./win.html";
    }
    else if(live==0){
        location.href = "./lose.html";
    }
    else if(inputValue>randomNumber){
        text = `oops! Your guess is too high. You have ${live} lives remaining.`;

    }
    else if(inputValue<randomNumber){
        text = `oops! Your guess is too low. You have ${live} lives remaining.`;
}
message.style.display = "inherit";
message.innerHTML = text;
lives.innerHTML = live;
}