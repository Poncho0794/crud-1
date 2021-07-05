// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 


/*** CREATE ONE PRODUCT ***/ 
router.get('/get/', productsController.create); 
router.get('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id/', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.get('/edit/:id', productsController.edit); 
router.delete('/delete/:id/', productsController.delete); 

module.exports = router;
