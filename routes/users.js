const express = require('express');
const { sequelize, Users } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// function authToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
  
//     if (token == null) return res.status(401).json({ msg: err });
  
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
//         if (err) return res.status(403).json({ msg: err });
    
//         req.user = user;
    
//         next();
//     });
// }


route.get('/users', (req, res) => {

    Users.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/users/:id', (req, res) => {

    Users.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/users', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Users.create({ 
                  firstName: req.body.firstName, 
                  lastName: req.body.lastName,
                  email: req.body.email,
                  username: req.body.username,
                  password:req.body.password,
                  isAadmin:req.body.isAadmin,
                  isModerator:req.body.isModerator,

                    })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/users/:id', (req, res) => {
    
    Users.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.firstname = req.body.firstname;
            usr.lastname = req.body.lastname;
            usr.email = req.body.email;
            usr.username = req.body.username;
            usr.password = req.body.password;

            ;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/users/:id', (req, res) => {

    Users.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

//route.use(authToken);

module.exports = route;