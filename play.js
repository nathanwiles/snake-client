// Part of Snake project
// Created by Nathan Wiles

// Client side: Initializes snake game

// import required modules
const { connect } = require("./src/client");
const { setupUserInput } = require("./src/input"); 

// connect to server and setup user input
const run = () => {
  const conn = connect();
  setupUserInput(conn);
};

run();
