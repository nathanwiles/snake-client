// Part of Snake project
// Created by Nathan Wiles

// Client side: Handles user input.

// import and setup required modules
const { exit, stdin } = require("process");
const { KEYRETURNS, LOGMESSAGE, ENCODING } = require("./constants");

// declare connection variable
let connection;

// fuction to set up user input
const setupInput = (conn) => {
  // set connection variable to connection object
  connection = conn;
  // setup stdin to handle user input
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

// function to handle user input
const handleUserInput = (key) => {
  // exit game if user presses ctrl + c
  if (key === "\u0003") {
    console.log(LOGMESSAGE.userTerminated);
    exit();
  }

  // send data to server if key is in KEYRETURNS object
  if (KEYRETURNS[key]) {
    connection.write(KEYRETURNS[key]);
  }
};

// export setupInput function
module.exports = { setupInput };
