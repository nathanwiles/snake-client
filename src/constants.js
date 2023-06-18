// Part of Snake project
// Created by Nathan Wiles

// Client side: Database of constant values.

// IP and PORT for server connection
const IP = "localhost";
const PORT = 50541;
const ENCODING = "utf8";

// object to store key returns
const KEYRETURNS = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  1: "Say: I see fresh meat!",
  2: "Say: I'm gonna eat you!",
  3: "Say: I'm coming for you!",
  4: "Say: What a tasty meal!",
  5: "Say: oh... woops!",
};

// object to store console.log messages
const LOGMESSAGE = {
  connecting: "Connecting ...",
  connected: "Successfully connected to game server",
  userTerminated: "User terminated connection \n",
  fromServer: "Server says: ",
  disconnected: "Disconnected from server",
};

// export IP, PORT, and KEYRETURNS
module.exports = { IP, PORT, KEYRETURNS, LOGMESSAGE, ENCODING };
