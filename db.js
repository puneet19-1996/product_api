const mongoose = require('mongoose');

//Connect app with database
mongoose.connect("mongodb://127.0.0.1:27017/products_apis").
    then(() => console.log('Connection to database')).
    catch((e) => console.error('Error occured during connection to database ', e))