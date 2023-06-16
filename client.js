const net = require("net");
const { stdin } = require("process"); // get stdin from process

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // change to server ip address if external.
    port: 50541, // set appropriate port
  });

  conn.setEncoding("utf8"); // interpret data as text

  // log messages from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // log message when connection is established
  conn.on("connect", () => {
    conn.write("Name: NAW");
    console.log("Successfully connected to game server");
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", (data) => {
      switch (data) {
        case "\u0003":
          process.exit();
        case "w":
          conn.write("Move: up");
          break;
        default:
          conn.write(data);
          break;
      }
    });
  });

  conn.on("end", () => {
    console.log("Disconnected from server");
    process.exit();
  });

  return conn;
};

// export connect function
module.exports = { connect };
