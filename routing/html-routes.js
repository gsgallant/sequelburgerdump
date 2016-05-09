// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var sequelModelOfBurger = require("../model/burger.js");
//notify the server administrator that the html route is connected
console.log("html-routes connected");

module.exports = function(app){

//use sequelize .findAll to get all the burgers
	app.get('/', function(req,res) {
	    sequelModelOfBurger.findAll({})
	    	.then(function(burger){
	    		res.render('index',{burger});
	    	})
    });

//destroy table with seuelize .destroy (this is triggered by clicking the "eatme" burger image)
	app.get('/del', function(req,res){
		sequelModelOfBurger.destroy({truncate: true}).then(function(burger){
	    		// res.render('index',{burger});
	    		res.redirect('/');
	    	})
		
	});

//get the burger cartoon image for the main view.
	app.use('/image',function(req, res){
		res.sendFile(path.join(__dirname + '/assets/images/burger.jpg'));
	});
}