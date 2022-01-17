const { sequelize, Order} = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get('/order', (req, res) => {

    Order.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/order/:id', (req, res) => {

    Order.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/order', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Order.create({ orderNumber: req.body.orderNumber, 
                    })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/order/:id', (req, res) => {
    
    Order.findOne({ where: { id: req.params.id } })
        .then( ord => {
            ord.orderNumber = req.body.orderNumber;

            ord.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/order/:id', (req, res) => {

    Order.findOne({ where: { id: req.params.id } })
        .then( ord => {
            ord.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;