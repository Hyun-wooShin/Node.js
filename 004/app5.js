const express = require('express');
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin5');
const shopRoutes = require('./routes/shop5');
const errorRoutes = require('./routes/error5')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(errorRoutes);

app.listen(3000);
