// require mySQL
var mysql = require("mysql");

var connection;

// setup the connection to the JawsDB database for deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "",
  database: "burgers_db"
});
};

connection.connect();
// export connection
module.exports = connection;