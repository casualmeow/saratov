const db = require("../utility/db");

const createUser = (username, user_id, discordId, register_status, inventory, callback) => {
    const sql = 'INSERT INTO items (username, user_id, discordId, register_status, inventory) VALUES (?, ?, ?, ?, ?)';
    db.run (sql, [username, user_id, discordId, register_status, inventory], function (err) {
        callback(err, {id: this.lastID});
    });
}

const readUser = (callback) => {
    const sql = 'SELECT * FROM user';
    db.all(sql, [], callback);
}
const updateUser = (username, user_id, discordId, register_status, inventory, callback) => {
    const sql = 'UPDATE items SET username = ?, register_status = ?, inventory = ? WHERE discordId = ?, user_id = ?';
    db.run (sql, [username, user_id, discordId, register_status, inventory], callback);
}

const deleteUser = (user_id, callback) => {
    const sql = 'DELETE FROM items WHERE user_id = ?';
    db.run (sql, [user_id, user_id], callback);
}

module.exports = {createUser, readUser, updateUser, deleteUser};