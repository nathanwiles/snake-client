// Part of Snake project
// Created by Nathan Wiles

// client side code for connecting to snake game server

// import required modules
const net = require("net");
const { exit } = require("process");

// function to connect to server
const connect = function () {
  // create connection object
  const conn = net.createConnection({
    host: "localhost", // change to server ip address if external.
    port: 50541, // set appropriate port
  });

  // interpret data as text
  conn.setEncoding("utf8");

  // log incoming messages from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // log message when connection is established
  conn.on("connect", () => {
    conn.write("Name: NAW");
    console.log("Successfully connected to game server");
  });

  // log message when connection is terminated and exit
  conn.on("end", () => {
    console.log("Disconnected from server");
    exit();
  });

  return conn;
};

// export connect function
module.exports = { connect };
