var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDislplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset (){
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//Change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//Add initial colors to squares 
	squares[i].style.background = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.background;
		//Compare color to picked square
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//Loop through all squares
	for(var i = 0; i < squares.length; i++){
		//Change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Add an Array
	var arr = []
	//Rapeat num times
	for(var i =0; i < num; i++){
		//Get random color and push into arr
		arr.push(randomColor())
	}
	//Return that array 
	return arr;
}

function randomColor(){
	//Pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//Pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//Pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g +", " + b +")";
}
