const express = require('express');
const storeRouter = express.Router();
const storeData = require('../models/seed.js');

const Product = require('../models/products.js');

// INDEX
storeRouter.get('/', (req, res) => {
    // res.send("Welcome to The Witch's Cupboard")
    Product.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts
        })
    })
})
// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

// SEED
// storeRouter.get("/seed", (req, res) => {
//     Product.create(storeData, (error, data) => {
//         res.redirect("/store")
//     })
// })

module.exports = storeRouter