const { sequelize, User, Adress, Color, Order, Orderitem, Product, Productdetails, Role, Size } = require('../models');
const express = require('express');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get('/user', (req, res) => {

    User.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/user/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/user', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    User.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/user/:id', (req, res) => {
    
    User.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/user/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

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
    Adress.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/address/:id', (req, res) => {
    
    Adress.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/address/:id', (req, res) => {

    Adress.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

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
    Color.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/color/:id', (req, res) => {
    
    Color.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/color/:id', (req, res) => {

    Color.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


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
    Order.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/order/:id', (req, res) => {
    
    Order.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/order/:id', (req, res) => {

    Order.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


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
    Orderitem.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/orderitem/:id', (req, res) => {
    
    Orderitem.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/orderitem/:id', (req, res) => {

    Orderitem.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


route.get('/product', (req, res) => {

    Product.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/product/:id', (req, res) => {

    Product.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/product', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Product.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/product/:id', (req, res) => {
    
    Product.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/product/:id', (req, res) => {

    Product.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


route.get('/productdetails', (req, res) => {

    Productdetails.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/productdetails/:id', (req, res) => {

    Productdetails.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/productdetails', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Productdetails.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/productdetails/:id', (req, res) => {
    
    Productdetails.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/productdetails/:id', (req, res) => {

    Productdetails.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


route.get('/role', (req, res) => {

    Role.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/role/:id', (req, res) => {

    Role.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/role', (req, res) => {
    //pohvatamo token i pitam da li je admin 
    Role.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/role/:id', (req, res) => {
    
    Role.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/role/:id', (req, res) => {

    Role.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});


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
    Size.create({ name: req.body.name, email: req.body.email })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
        //insert u bazu

});
route.put('/size/:id', (req, res) => {
    
    Size.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.name = req.body.name;
            usr.email = req.body.email;

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});
route.delete('/size/:id', (req, res) => {

    size.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});



module.exports = route;

