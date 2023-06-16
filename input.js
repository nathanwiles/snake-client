// Part of Snake project
// Created by Nathan Wiles

// client side code for User Input.

// import and setup required modules
const { exit, stdin } = require("process");

// fuction to setup user input
const setupInput = () => {
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
    conn.write(data);
  };

  // switch statement to handle movement commands
  switch (key) {
    case "\u0003":
      // ctrl-c: logs termination and closes connection
      console.log("User terminated connection \n");
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

// export setupInput function
module.exports = { setupInput };
