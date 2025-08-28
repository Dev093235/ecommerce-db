const Product = require('../models/product');

const getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
};

const createProduct = (req, res) => {
  const product = req.body;
  Product.create(product, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.status(201).json({ message: 'Product created', id: results.insertId });
  });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const product = req.body;
  Product.update(id, product, (err) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json({ message: 'Product updated' });
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json({ message: 'Product deleted' });
  });
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
