const { sequelize, Orderitem} = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get('/orderitem', (req, res) => {

    Orderitem.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/orderitem/:id', (req, res) => {

    Orderitem.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/orderitem', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Orderitem.create({ quantity: req.body.quantity, 
                    })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/orderitem/:id', (req, res) => {
    
    Orderitem.findOne({ where: { id: req.params.id } })
        .then( orditem => {
            orditem.quantity = req.body.quantity;
         
            orditem.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/orderitem/:id', (req, res) => {

    Orderitem.findOne({ where: { id: req.params.id } })
        .then( orditem => {
            orditem.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;