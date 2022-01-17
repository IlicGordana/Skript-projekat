const { sequelize, Productdetails} = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get('/productdetail', (req, res) => {

    Productdetails.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/productdetail/:id', (req, res) => {

    Productdetails.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/productdetail', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Productdetails.create({ quantity: req.body.quantity, 
                   })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/productdetail/:id', (req, res) => {
    
    Productdetails.findOne({ where: { id: req.params.id } })
        .then( prddetail => {
            prddetail.quantity = req.body.quantity;

            prddetail.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/productdetail/:id', (req, res) => {

    Productdetails.findOne({ where: { id: req.params.id } })
        .then( prddetail => {
            prddetail.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;