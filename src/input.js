// Part of Snake Client project
// Created by Nathan Wiles


// import and deconstruct required modules
const { exit, stdin } = require("process");
const { MOVES, CANNEDMESSAGES, LOGMESSAGES, ENCODING } = require("./constants");



const setupUserInput = (conn) => {
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data, conn);
  });

  return stdin;
};

// function to handle user input
const handleUserInput = (key, conn) => {

  // exit game if user presses ctrl + c
  if (key === "\u0003") {
    console.log(LOGMESSAGES.userTerminated);
    exit();
  }

  if (MOVES[key] || CANNEDMESSAGES[key]){
    let message = MOVES[key] || CANNEDMESSAGES[key]; 
    conn.write(message);
  }
};


module.exports = { setupUserInput };
