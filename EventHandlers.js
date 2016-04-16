"use strict"

// This is the beginning of the iife in which the variables are set at the top. 
var CarLot = ( function (originalCarLot) {	
// create a variable that captures the class you created when you were building the string for each car.
var cars = document.getElementsByClassName("car");
// create a variable that captures the id of the input field. You created the Id in the html file.
let input = document.getElementById("userInput");
// create an undefined gobal variable that you will use within the activateEvents function in order to target the car that is clicked. 
var selectedCar;

// The events are all called in this function.
originalCarLot.activateEvents = function () {		
// loop through each car with the class of "car" and add a click event to each of them waiting to be clicked.
for(var i = 0; i < cars.length; i++) {	
	cars[i].addEventListener("click", function (event) {	
		 console.log(event);
		 // create an "if else" statement that says that wherever you click on the car card, the car selcted car will be targetted. You must first find out how to target the whole card.
		 if (event.target.offsetParent !== document.getElementsByTagName('body')[0]){
		  	console.log("this is a p tag or h2");
		  	selectedCar = event.target.offsetParent;
		 	
		 	} 
		 else {
		 	console.log("this is a div");
		 	selectedCar = event.target;
		 	}
		 	// add a class called "selected" as the condition that happens whether the body or the div of the selected card is clicked. 
		 	selectedCar.classList.add("selected");

	// this is where you are calling the function that removes the border and color class so that it does not stay once you click on a different card. This function takes on 2 arguments (the class that changes the card's background and the border size) and removes them.
	originalCarLot.removeSelection("colorBack", "borderBack");
	// this is where you are calling a function that changes the color of the selected car to the background color class that is defined within the CSS. This function also takes on 2 arguments because it needs the information of the selected car and the color class.
	originalCarLot.colorChange(selectedCar, "colorBack");
	// this is where you are calling a function that changes the border size of the selected car to border size class class that is defined within the CSS. This function also takes on 2 arguments because it needs the information of the selected car and the border class.
	originalCarLot.borderChange(selectedCar, "borderBack");
			});
	}

	// This is the function that takes the description of the selected card and changes it (or mirrors it) to whatever the user types into the input text field at the top of the page. This is where it is called.
	originalCarLot.bindItUp();
};


	// This function is supposed to remove deselect the car that was previously clicked on when another car is clicked.
	originalCarLot.removeSelection = function (ClassName, BorderName) {
		for(var i = 0; i < cars.length; i++){
			cars[i].classList.remove(ClassName, BorderName)
		}
	}
		//This function will allow the user to change the description for the selected car 
	originalCarLot.bindItUp = function() {
			// the event says that as soon as the user presses a key on their keyboard, the description of that selected card (which is targetted as the "lastChild") will be the same as whatever the user types.
			input.addEventListener("keypress", function(event){
				// the selected car's "lastChild" is the "bio" class we want for that selected card, and the value of that html tag is the same as saying ".innerHTML". So here, we just set that equal to the value of the user's input (whatever they type in)
				selectedCar.lastChild.innerHTML = input.value
			})
		}
// The iife is called and immediately loads.
return originalCarLot;

}) (CarLot);