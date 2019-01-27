var express = require('express');
var router = express.Router();
var login = require('../models/Login');
const jwt = require('jsonwebtoken');
const jwtVerifier = require('express-jwt');
const secret = 'secret';

function createToken(user){
    let expirationDate = Math.floor(Date.now() / 1000) + 300;
    var token = jwt.sign({id_user: user.id_user, first_name:user.first_name, last_name:user.last_name, exp: expirationDate }, secret);
    return token; 
}

router.post('/', function(req, res, next) {  
    if (req.body.email && req.body.password) {
        login.getUsersByEmail(req.body, function(err, rows) {  
            if(JSON.stringify(rows.length)==1) {
                res.json({token:createToken(rows[0])});
            } else {
                res.status(403);
                res.send("Wrong password buddy");
            } 
        });   
    }  
}); 
router.get('/',jwtVerifier({secret:secret}), (req,res) =>{
    res.send('Congratulations, you made it to home');
})
router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(500). send(err.message);
    }
});
module.exports = router;
