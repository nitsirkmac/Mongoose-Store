const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const storeController = require('./controllers/store');

require('dotenv').config();

const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {})

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo No5"));
db.on("disconnected", () => console.log("mongo disconnected"));

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use("/store", storeController);
app.use(express.static('public'))

app.listen(PORT, () =>
    console.log("Another beautiful morning! Makes me sick..."))