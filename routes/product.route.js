var express = require('express');
var router = express.Router();

var products = require('D:/mean/product/controllers/product.controller.js');



router.post('/create',products.product_create); //Create
router.get('/:id',products.product_details); //read       router.get('/read',product_Controller.product_details);
router.put('/:id/update',products.product_update); //updation
router.delete('/:id/delete',products.delete);
module.exports = router;
