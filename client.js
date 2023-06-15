const net = require("net");

const connect = function () {
  // establishes a connection with the game server
  const conn = net.createConnection({
    host: "localhost", // change to server ip address if external.
    port: 50541,
  });

  conn.setEncoding("utf8"); // interpret data as text

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };