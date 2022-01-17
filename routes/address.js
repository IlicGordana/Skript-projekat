const { sequelize, Adress } = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/address', (req, res) => {

    Adress.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/address/:id', (req, res) => {

    Adress.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/address', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Adress.create({ state: req.body.state,
                    city: req.body.city,
                    number: req.body.number  })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/address/:id', (req, res) => {
    
    Adress.findOne({ where: { id: req.params.id } })
        .then( adr => {
            adr.state = req.body.state;
            adr.city = req.body.city;
            adr.number = req.body.number;

            adr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/address/:id', (req, res) => {

    Adress.findOne({ where: { id: req.params.id } })
        .then( adr => {
            adr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});



module.exports = route;