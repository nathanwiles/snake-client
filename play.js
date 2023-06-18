// Part of Snake project
// Created by Nathan Wiles

// Client side: Initializes snake game

// import required modules
const { connect } = require("./src/client"); // get connect function from client.js
const { setupInput } = require("./src/input"); // get setupInput function from input.js

// function to run game
const run = () => {
  // call connect function and store connection object in conn variable
  const conn = connect();
  // call setupInput function and pass connection object as argument
  setupInput(conn);
};

run(); // run game
