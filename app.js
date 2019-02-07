 var express = require('express');
 var app = new express();

 var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

var route = require('D:/mean/product/routes/product.route.js');
app.use('/products',route);

var port = 3000;

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://sudo:sudo1234@ds123625.mlab.com:23625/productdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port,() => {
     console.log("port listening on port number"+port);
})
