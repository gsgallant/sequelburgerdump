// *********************************************************************************
// CHARACTER.JS - THIS FILE CREATES A MODEL OF THE TABLE
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// seqModel (lowercase) references my connection to the DB with sequelize model.
var seqModel = require("../config/connection.js"); 

// Creates a sequelBurger model that matches up with DB
var sequelBurger = seqModel.define("sequelBurgerTable", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	
	burger_name: {
		type: Sequelize.STRING,
	},
	devoured: {
		type: Sequelize.BOOLEAN,
		defaultValue : 0
	},
	date: {
		type: Sequelize.DATE,
	},
	
});

// Syncs with DB
sequelBurger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = sequelBurger;
