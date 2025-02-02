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
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newId = products.length + 1;
		let data = req.body;
		let newProduct = {
			"id": newId,
			"name": data.name,
			"price": data.price,
			"discount": data.discount,
			"category": data.category,
			"description": data.description,
			"image": data.image
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const productToEdit = products.find(product => product.id === parseInt(req.params.id));
		res.render('product-edit-form', {productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		const productIndex = products.findIndex(product => product.id === parseInt(req.params.id));
		products[productIndex] = {
			...req.body
		}
		
		fs.writeFileSync(productsFilePath,JSON.stringify(products));
		res.render('detail', {product: products[productIndex]});
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {
		// Do the magic
		const index = products.findIndex(product => product.id === parseInt(req.params.id));
		products.splice(index,1);
		fs.writeFileSync(productsFilePath,JSON.stringify(products));
		//res.redirect('/');
		res.render('products', {products}); //TODO cambiar a redirect
	}
};

module.exports = controller;