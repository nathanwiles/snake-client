// Part of Snake project
// Created by Nathan Wiles

// Client side: Handles server connection.

// import required modules
const net = require("net");
const { exit } = require("process");
const { IP, PORT, LOGMESSAGES, ENCODING } = require("./constants");

// function to connect to server
const connect = function() {
  
  console.log(LOGMESSAGES.connecting);

  // create connection object
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Use ENCODING from constants.js
  conn.setEncoding(ENCODING);

  // log message when connection is established
  conn.on("connect", () => {
    conn.write("Name: NAW");
    console.log(LOGMESSAGES.connected);
  });
  
  // log incoming messages from server
  conn.on('data', (data) => {
    console.log(LOGMESSAGES.fromServer, data);
  });

  // log message when connection is terminated and exit
  conn.on("end", () => {
    console.log(LOGMESSAGES.disconnected);
    exit();
  });


  return conn;
};

module.exports = { connect };
