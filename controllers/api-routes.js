// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var sequelModelOfBurger = require("../model/burger.js");

//notify the server administrator that the api-route is connected
console.log("api-routes connected");

module.exports = function(app){

//uses the sequelize .create
    app.post('/add', function(req,res) {
        if(req.body.burger_name){
            sequelModelOfBurger.create({burger_name: req.body.burger_name})
            .then(function(){
                    res.redirect('/');
                });
        }else{
            res.redirect('/');
            return;
        }
    });

    //used sequelizze .update
    app.put('/devour', function(req,res){
        sequelModelOfBurger.update(
            //set value to be updated
            {
                devoured : 1
            },
            // where clause/criteria
            {   where : {
                id: req.body.burgerid
                }
            }
                ).then(function(){
                    res.redirect('/');
                })
    });
    
    //used sequelizze .update
    app.put('/another', function(req,res){
            sequelModelOfBurger.update(
                //set value to be update
                {
                    devoured : 0
                },
                // where clause/criteria
                {   where : {
                        id: req.body.burgerid
                        }
                }
                    ).then(function(){
                        res.redirect('/');
                    })
    });

}
