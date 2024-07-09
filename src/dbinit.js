const User = require("./roles/user");

 // User.sync({ force: true });  init
User.sync({ alter: true }); //update