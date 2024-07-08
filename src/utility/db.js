const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();
const dbName = process.env.DB_NAME;

let db = new sqlite3.Database(dbName, err => {
    if (err){
        console.log(err);
    }
    else {
        console.log('Database Connected!');
        db.run('CREATE TABLE IF NOT EXISTS items (username STRING, user_id INTEGER PRIMARY KEY AUTOINCREMENT, discordId STRING, register_status BOOLEAN, coins NUMBER, inventory ARRAY)', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Database created!');
        }
    })
    }
})

module.exports = db;