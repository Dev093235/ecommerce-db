const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) console.error('DB connect error:', err);
  else console.log('Connected to DB');
});

const Product = {
  getAll: (cb) => connection.query('SELECT * FROM products', cb),
  getById: (id, cb) => connection.query('SELECT * FROM products WHERE id = ?', [id], cb),
  create: (data, cb) => {
    const sql = `INSERT INTO products (name, price, description, brand, category, stock, rating, numReviews, images, specifications)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const vals = [
      data.name || '',
      data.price || 0,
      data.description || '',
      data.brand || '',
      data.category || '',
      data.stock || 0,
      data.rating || 0,
      data.numReviews || 0,
      JSON.stringify(data.images || []),
      JSON.stringify(data.specifications || {})
    ];
    connection.query(sql, vals, cb);
  },
  update: (id, data, cb) => {
    const sql = `UPDATE products SET name=?, price=?, description=?, brand=?, category=?, stock=?, rating=?, numReviews=?, images=?, specifications=? WHERE id=?`;
    const vals = [
      data.name || '',
      data.price || 0,
      data.description || '',
      data.brand || '',
      data.category || '',
      data.stock || 0,
      data.rating || 0,
      data.numReviews || 0,
      JSON.stringify(data.images || []),
      JSON.stringify(data.specifications || {}),
      id
    ];
    connection.query(sql, vals, cb);
  },
  delete: (id, cb) => connection.query('DELETE FROM products WHERE id=?', [id], cb)
};

module.exports = Product;
