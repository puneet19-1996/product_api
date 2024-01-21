const mongoose = require('mongoose');

//Connect app with database
mongoose.connect("mongodb+srv://puneet:puneet09@cluster0.3ynf3rt.mongodb.net/").
    then(() => console.log('Connection to database')).
    catch((e) => console.error('Error occured during connection to database ', e))
