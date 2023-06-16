// Part of Snake project
// Created by Nathan Wiles

// client side code for snake game

// import required modules
const net = require("net");
const { stdin, exit } = require("process"); // get stdin from process

// function establishes a connection with the game server
const connect = function () {
  // create connection object
  const conn = net.createConnection({
    host: "localhost", // change to server ip address if external.
    port: 50541, // set appropriate port
  });

  // helper function to send data to server
  const sendData = (data) => {
    conn.write(data);
  };

  conn.setEncoding("utf8"); // interpret data as text

  // log incoming messages from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // log message when connection is established
  conn.on("connect", () => {
    conn.write("Name: NAW");
    console.log("Successfully connected to game server");

    // set up stdin for user input
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    // listen for user input
    stdin.on("data", (data) => {
      switch (
        data // switch statement to handle input
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
          console.log("Invalid input:", data);
          break;
      }
    });
  });

  conn.on("end", () => {
    console.log("Disconnected from server");
    exit();
  });

  return conn;
};

// export connect function
module.exports = { connect };
