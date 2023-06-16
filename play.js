const { connect } = require("./client"); // get connect function from client.js

console.log("Connecting ...");


// initiate connection to server
conn = connect();

//while connection is open, listen for user input
conn.on("connect", () => {
  
});
