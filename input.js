// Part of Snake project
// Created by Nathan Wiles

// client side code for User Input.

// fuction to setup user input
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
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

module.exports = { setupInput };
