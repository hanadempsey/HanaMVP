var mysql = require('mysql');

const Data = sequelize.define('data', {
    name: Sequelize.STRING,
    population: Sequelize.INTEGER,
    latlog: Sequelize.INTERGER,
    neighbors: Sequelize.STRING,
    currency: Sequelize.STRING
})




// var dbConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'student',
//     password: 'student',
//     database: 'drone'
// });

// dbConnection.connect(function (err) {
//     if (err) {
//         console.log("Error")
//         throw err;
//     }
// });

// dbConnection.query("select * from ___ where ____ is ____", function (err, results) {
//     if (results.length === 0) {
//         dbConnection.query("insert into ____ (____) values ('Drone')",
//             function (err) {
//                 console.log("Added to database");
//             }
//         )
//     }
// });

module.exports = dbConnection;