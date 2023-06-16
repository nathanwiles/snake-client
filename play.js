// Part of Snake project
// Created by Nathan Wiles

// client side code for initializing snake game

// import required modules
const { connect } = require("./client"); // get connect function from client.js
const { setupInput}  = require("./input"); // get setupInput function from input.js


// log message to show connection is being established
console.log("Connecting ..."); 


// define function to run game
const run = () => {
  conn = connect();
  setupInput();
};


run(); // run game
