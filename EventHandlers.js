"use strict"

var CarLot = function (originalCarLot) {

let firstCar = document.getElementById("car0");	
let secondCar = document.getElementById("car1");	
let thirdCar = document.getElementById("car2");	
let fourthCar = document.getElementById("car3");	
let cars = document.getElementsByClassName("car");

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
	originalCarLot.colorChange(event);
	// CarLot.borderChange (event);
});
}



	
	originalCarLot.colorChange = function(event) {
		if(event.target.parentNode.id === firstCar.id || event.target.id === firstCar.id ){
		firstCar.classList.add("firstbackground")
	}
		else if(event.target.parentNode.id === secondCar.id || event.target.id === secondCar.id){
			secondCar.classList.add("secondbackground")
		}
			else if (event.target.parentNode.id === thirdCar.id || event.target.id === thirdCar.id) {
				thirdCar.classList.add("thirdbackground")
			}
				else if (event.target.parentNode.id === fourthCar.id || event.target.id === fourthCar.id) {
					fourthCar.classList.add("fourthbackground")
				};
			};
		
return originalCarLot;
// 	// else if(event.target.parentNode)

}(CarLot);

