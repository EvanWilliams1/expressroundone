var express = require('express');
var router = express.Router();
var Products = require('../product_model');

router.get('/', function(req, res, next){
    res.render('home', {title: 'Home'});
});

router.get('/products', function(req, res, next){
    res.render('products', {title: 'Products', products: Products.getProducts()});
});

router.get('/add', function(req, res, next){
    res.render('add',{ title: 'Add' });
});

router.get('/edit', function(req, res, next){
    res.render('edit',{ title: 'Edit' });
});

router.delete('/products/:id', function(req, res, next){
    Products.deleteProduct(req.params.id*1);
    res.redirect('/products');
});

router.put('/products/:id', function(req, res, next){
    Products.editProduct(req.params.id*1, 'myEdit');
    res.redirect('/products');
});

router.post('/products', function(req, res, next){
    Products.add(req.body.text);
    res.redirect('/products');
})

module.exports = router;