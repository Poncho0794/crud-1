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
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/get', productsController.edit); 
router.get('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.get('/:id', productsController.destroy); 


module.exports = router;
