const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const jwt = require('jsonwebtoken');
const jwtVerifier = require('express-jwt')
const user = { email: 'demo@gmail.com', password: 1234 }

const secret = 'secret';

app.use(bodyParser.urlencoded({extended: false}));

function createToken(){
    let expirationDate = Math.floor(Date.now() / 1000) + 300
    var token = jwt.sign({ userID: user.email, exp: expirationDate }, secret);
    return token; 
}




app.get('/home',jwtVerifier({secret:secret}), (req,res) =>{
    res.send('Congratulations, you made it to home');
})

app.post('/login', (req, res) => {
    if (req.body.email == user.email && req.body.password == user.password){
        res.send(createToken())
    }else{
        res.sendStatus(400);
    }
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(500). send(err.message);
    }
});

app.listen(8090, () => console.log('Example app listening on port 8090!'))
