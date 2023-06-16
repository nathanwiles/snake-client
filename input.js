// Part of Snake project
// Created by Nathan Wiles

// client side code for User Input.

// import and setup required modules
const { exit, stdin } = require("process");

// declare connection variable
let connection;

// fuction to set up user input
const setupInput = (conn) => {
  // set connection variable to connection object
  connection = conn;
  // setup stdin to handle user input
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

// function to handle user input
const handleUserInput = (key) => {
  // helper function to send data to server
  const sendData = (data) => {
    connection.write(data);
  };

  // switch statement to handle movement commands
  switch (key) {
    // ctrl-c: logs termination and closes connection
    case "\u0003":
      console.log("User terminated connection \n");
      exit();
    // movement commands
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
    // message commands
    case "1":
      sendData("Say: I see fresh meat!");
      break;
    case "2":
      sendData("Say: I'm gonna eat you!");
      break;
    case "3":
      sendData("Say: I'm coming for you!");
      break;
    case "4":
      sendData("Say: What a tasty meal!");
      break;
    case "5":
      sendData("Say: oh... woops!");
      break;
    default:
      break;
  }
};

// export setupInput function
module.exports = { setupInput };
