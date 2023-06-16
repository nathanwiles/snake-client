// Part of Snake project
// Created by Nathan Wiles

// client side code for initializing snake game


const { connect } = require("./client"); // get connect function from client.js
const { setupInput}  = require("./input"); // get setupInput function from input.js
const { stdin, exit } = require("process"); // get stdin and exit from process module


console.log("Connecting ..."); // log message to show connection is being established





// function to run game
const run = () => {
  conn = connect();
  setupInput();
};

run();
