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
storeRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

// DELETE
storeRouter.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        res.redirect('/store')
    });
})

// UPDATE
storeRouter.put('/:id', (req, res) => {
    Product.findByIdAndUpdate (
        req.params.id, 
        req.body,
        { new: true },
        (err, updatedProduct) => {
            res.redirect(`store/${req.params.id}`)
        }
    )
})

// BUY BUTTON
storeRouter.put('/cart/:id', (req, res) => {
    Product.findByIdAndUpdate (
        req.params.id,
        req.body,
        (err, purchasedProduct) => {
            console.log(purchasedProduct)
            purchasedProduct.qty -= 1
            purchasedProduct.save()
            res.redirect(`/store/${req.params.id}`)
        }
    )
})

// CREATE
storeRouter.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        res.redirect("/store")
    })
})

// EDIT
storeRouter.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('edit.ejs', {
            item: foundProduct
        })
    })
})

// SHOW
storeRouter.get("/:id", (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('show.ejs', {
            product: foundProduct,
            id: req.params.id,
            qty: foundProduct.qty
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