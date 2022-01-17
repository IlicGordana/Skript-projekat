const { sequelize, Size} = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get('/size', (req, res) => {

    Size.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/size/:id', (req, res) => {

    Size.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/size', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Size.create({ size: req.body.size, 
                   })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/size/:id', (req, res) => {
    
    Size.findOne({ where: { id: req.params.id } })
        .then( sze => {
            sze.size = req.body.size;

            sze.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/size/:id', (req, res) => {

    Size.findOne({ where: { id: req.params.id } })
        .then( sze => {
            sze.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;