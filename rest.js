const express = require('express');
const { sequelize } = require('./models');
const apiRoutes = require('./routes/users');
const path = require('path');

const app = express();

app.use('/admin', apiRoutes);

app.use(express.static(path.join(__dirname, 'static')));

// app.get('/', (req, res) => {
//     res.sendFile('index.html');
// });

app.listen({ port: 7000 }, async () => {
    await sequelize.authenticate();
});