require('./db') //When configure your connection with database

const express = require('express')
const app = express();

//When use your app any json object or form fill up
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const routers = require('./src/routers') //Connect your routes here

app.use('/api/product', routers) //Can define path or respose of your apis path


const Server = process.env.SERVER || 'http://localhost';
const Port = process.env.PORT || 8000;

app.listen(Port, () => console.info(`Application listen at ${Server}:${Port}`))