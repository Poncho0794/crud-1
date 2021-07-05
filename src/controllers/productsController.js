const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {'products':products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		const product = products.find(product => product.id === parseInt(req.params.id));
		res.render('detail', {product});
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const product = products.find(product => product.id === parseInt(req.params.id));
		res.render('detail', {product});
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		const product = products.find(product => product.id === parseInt(req.params.id));
		res.render('detail', {product});
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {
		// Do the magic
		const product = products.find(product => product.id === parseInt(req.params.id));
		res.render('detail', {product});
	}
};

module.exports = controller;