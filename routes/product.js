const express = require('express');
const { sequelize, Products } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).json({ msg: err });
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, product) => {
    
        if (err) return res.status(403).json({ msg: err });
    
        req.product = product;
    
        next();
    });
}

route.get('/product', (req, res) => {

    Products.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/product/:id', (req, res) => {

    Products.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/product', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Products.create({ code: req.body.code, 
                  nameP: req.body.nameP,
                  price: req.body.price,
                    })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/product/:id', (req, res) => {
    
    Products.findOne({ where: { id: req.params.id } })
        .then( prd => {
            prd.code = req.body.code;
            prd.nameP = req.body.nameP;
            prd.price = req.body.price;

            prd.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/product/:id', (req, res) => {

    Products.findOne({ where: { id: req.params.id } })
        .then( prd => {
            prd.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;