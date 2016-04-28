"use strict"

// This is the first iife that you created. Remember this when you go through and augment it. This iife is the first thing that happens when the page loads. It is designed to get the data from the json file and store it into memory. 
var CarLot = (function () {
// This iife starts with a variable defined as an empty array. This variable is where the data that is loaded from the json file is going to be placed or "parse".  
  let inventory = [];
  
// this function is supposed to return the inventory after it is loaded from the json file and make the inventory available for use. 
  return {
   getInventory: function () {
    return inventory
   },

  // this function goes and gets the data from the json file and loads it. Then, it takes that information and attaches or "parse" it to the private variable "inventory" which is an empty array.
    loadInventory: function (callback) {
      let inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        // use a callback function to tell javascript to continue with the next step of the process RIGHT AFTER the the json file has finished loading and parsed to the empty array called "inventory"
        callback(inventory);
      })
    }
  }

})();