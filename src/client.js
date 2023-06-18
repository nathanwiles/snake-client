// Part of Snake project
// Created by Nathan Wiles

// Client side: Handles server connection.

// import required modules
const net = require("net");
const { exit } = require("process");
const { IP, PORT, LOGMESSAGE, ENCODING } = require("./constants");

// function to connect to server
const connect = function () {
  // log message to show connection is being established
  console.log(LOGMESSAGE.connecting);
  // create connection object
  const conn = net.createConnection({
    host: IP, // change to server ip address if external.
    port: PORT, // set appropriate port
  });

  // interpret data as text
  conn.setEncoding(ENCODING);

  
  // log message when connection is established
  conn.on("connect", () => {
    conn.write("Name: NAW");
    console.log(LOGMESSAGE.connected);
  });
  
  // log incoming messages from server
  conn.on('data', (data) => {
    console.log(LOGMESSAGE.fromServer, data);
  });
  // log message when connection is terminated and exit
  conn.on("end", () => {
    console.log(LOGMESSAGE.disconnected);
    exit();
  });

  // return connection object
  return conn;
};

// export connect function
module.exports = { connect };
