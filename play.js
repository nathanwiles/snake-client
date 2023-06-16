// Part of Snake project
// Created by Nathan Wiles

// client side code for initializing snake game


const { connect } = require("./client"); // get connect function from client.js
const { stdin, exit } = require("process"); // get stdin and exit from process module
console.log("Connecting ..."); // log message to show connection is being established

// fuction to setup user input
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// helper function to send data to server
const sendData = (data) => {
  conn.write(data);
};

// function to handle user input
const handleUserInput = (key) => {
  switch (
    key // switch statement to handle movement commands
  ) {
    case "\u0003": // ctrl-c closes connection
      console.log("User terminated connection");
      exit();
    case "w":
      sendData("Move: up");
      break;
    case "a":
      sendData("Move: left");
      break;
    case "s":
      sendData("Move: down");
      break;
    case "d":
      sendData("Move: right");
      break;

    default:
      break;
  }
};

// listen for user input
stdin.on("data", (data) => {
  handleUserInput(data);
});


// function to run game
const run = () => {
  conn = connect();
  setupInput();
  handleUserInput();
};

run();
