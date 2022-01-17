
const { sequelize, Color } = require('../models');
const express = require('express');
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/color', (req, res) => {

    Color.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/color/:id', (req, res) => {

    Color.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/color', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Color.create({ nameColor: req.body.nameColor
                })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/color/:id', (req, res) => {
    
    Color.findOne({ where: { id: req.params.id } })
        .then( clr => {
            clr.nameColor = req.body.nameColor;
            
            clr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/color/:id', (req, res) => {

    Color.findOne({ where: { id: req.params.id } })
        .then( clr => {
            clr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


module.exports = route;

