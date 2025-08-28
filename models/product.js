const mysql = require('mysql2');
const db = require('../config/db');

const Product = {
  getAll: (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], callback);
  },

  create: (productData, callback) => {
    const query = `
      INSERT INTO products 
      (name, price, description, brand, category, stock, rating, numReviews, images, specifications) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      productData.name,
      productData.price,
      productData.description || "",
      productData.brand,
      productData.category,
      productData.stock || 0,
      productData.rating || 0,
      productData.numReviews || 0,
      JSON.stringify(productData.images || []),
      JSON.stringify(productData.specifications || {})
    ];
    db.query(query, values, callback);
  },

  update: (id, productData, callback) => {
    const query = `
      UPDATE products SET 
      name=?, price=?, description=?, brand=?, category=?, stock=?, rating=?, numReviews=?, images=?, specifications=? 
      WHERE id=?`;
    const values = [
      productData.name,
      productData.price,
      productData.description || "",
      productData.brand,
      productData.category,
      productData.stock || 0,
      productData.rating || 0,
      productData.numReviews || 0,
      JSON.stringify(productData.images || []),
      JSON.stringify(productData.specifications || {}),
      id,
    ];
    db.query(query, values, callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Product;
