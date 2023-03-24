



//random number is created 
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

//random number is assigned to dice.png
var dice = "dice" + randomNumber1 + ".png";

//images/ is then added to dice
var source = "images/" + dice;

//The 1 image tag is selected by using [0] selects the first one in the array
document.querySelectorAll("img")[0].setAttribute("src", source);

//random number is created 
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var source1 = "images/dice" + randomNumber2 + ".png";

//The 2 image tag is selected by using [1] second one in the array
document.querySelectorAll("img")[1].setAttribute("src", source1);

//if dice 1 is a larger number than dice to print you won
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "You Won";
}

//if dice 2 is a larger number than dice to print you lost
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "You Lost";
}

//if dice 2 or dice 1 are neither larger than one another print draw
else {
    document.querySelector("h1").textContent = "Draw";
}