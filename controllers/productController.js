const Product = require('../models/product');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json(results);
  });
};

exports.getProductById = (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (!results.length) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
};

exports.createProduct = (req, res) => {
  const product = req.body;
  if (!product.name || !product.price)
    return res.status(400).json({ message: 'Name and price required' });

  Product.create(product, (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.status(201).json({ message: 'Product created', id: results.insertId });
  });
};

exports.updateProduct = (req, res) => {
  const product = req.body;
  if (!product.name || !product.price)
    return res.status(400).json({ message: 'Name and price required' });

  Product.update(req.params.id, product, (err) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json({ message: 'Product updated' });
  });
};

exports.deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json({ message: 'Product deleted' });
  });
};
