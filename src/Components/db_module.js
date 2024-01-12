var mysql = require('mysql');
var db = mysql.createConnection({
	hostname:"localhost",
	user:"root",
	password:"root",
	database:"hiking"
});
db.connect(function(err){
	if(err)
		throw err;
});
module.exports = db;