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
storeRouter.get("/:id", (req, res) => {
    console.log(req.params.id)
    Product.findById(req.params.id, (error, foundProduct) => {
        console.log(foundProduct)
        console.log(error)
        res.render('show.ejs', {
            product: foundProduct,
        })
    })
})

// SEED
// storeRouter.get("/seed", (req, res) => {
//     Product.create(storeData, (error, data) => {
//         res.redirect("/store")
//     })
// })

module.exports = storeRouter