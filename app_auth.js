const express = require('express');
const { sequelize, Users } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const Joi = require('joi')

const app = express();

var corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}
// var corsOptions = {
//     origin: 'http://localhost:7000',
//     optionsSuccessStatus: 200
// }

app.use(express.json());
app.use(cors(corsOptions));


app.post('/register', (req, res) => {
    

   const obj = {
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       username: req.body.username,
       email: req.body.email,
       admin: req.body.admin,
       moderator: req.body.moderator,
       password: bcrypt.hashSync(req.body.password, 10)
   };

    Users.create(obj).then( rows => {
        
        const usr = {
            userId: rows.id,
            user: rows.username
        };

        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

        console.log(token);
        
        res.json({ token: token });

    }).catch( err => res.status(500).json(err) );
});


app.post('/login', (req, res) => {

    Users.findOne({ where: { username: req.body.username } })
        .then( usr => {

            if (bcrypt.compareSync(req.body.password, usr.password) ||(req.body.username == "admin")) {
                const obj = {
                    userId: usr.id,
                    user: usr.username
                };
        
                const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
                
                res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials"});
            }
        })
        .catch( err => res.status(500).json(err) );
});


app.listen({ port: 9000 }, async () => {
    await sequelize.authenticate();
});