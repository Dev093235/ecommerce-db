require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
  console.log('DB connected');
});

const products = [
  {
    name: "REALME C73 4/128",
    price: 11499,
    description: "Realme C73 with powerful MediaTek Helio G88 processor and AMOLED display.",
    brand: "REALME",
    category: "Smartphones",
    stock: 50,
    rating: 4.0,
    numReviews: 100,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/312/312/ky8xhu80/mobile/u/g/w/c73-rmx3551-realme-original-imagafejnzm6s7xt.jpeg",
      "https://rukminim1.flixcart.com/image/312/312/ky8xhu80/mobile/u/g/w/c73-rmx3551-realme-original-imagafejnbxgg56zw.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM": "4 GB",
      "Storage": "128 GB",
      "Display": "6.72 inch AMOLED",
      "Processor": "MediaTek Helio G88",
      "Battery": "5000 mAh",
      "Camera": "64MP AI Dual Camera"
    })
  },
  {
    name: "REALME P3X 6/128",
    price: 12999,
    description: "Realme P3X with Helio G85 processor, 6GB RAM and vibrant display.",
    brand: "REALME",
    category: "Smartphones",
    stock: 40,
    rating: 4.2,
    numReviews: 85,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/khjbafk0/mobile/q/q/g/realme-p3x-rmx2202-original-imafzydacxebntfv.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kq17ivk0/mobile/q/q/g/realme-p3x-rmx2202-original-imag4tzrbsxptlmu.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM": "6 GB",
      "Storage": "128 GB",
      "Display": "6.5 inch IPS LCD",
      "Processor": "MediaTek Helio G85",
      "Battery": "5000 mAh",
      "Camera": "50MP AI Dual Camera"
    })
  },
  {
    name: "REALME 14X 6/128",
    price: 14999,
    description: "Realme 14x smartphone with MediaTek Helio G99 and 6GB RAM.",
    brand: "REALME",
    category: "Smartphones",
    stock: 30,
    rating: 4.1,
    numReviews: 60,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/mobile/k/b/2/realme-14x-rmx3560-original-imageyspz5y8zjhf.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/mobile/k/b/2/realme-14x-rmx3560-original-imageyspz5yvezx6.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM": "6 GB",
      "Storage": "128 GB",
      "Display": "6.72 inch AMOLED",
      "Processor": "MediaTek Helio G99",
      "Battery": "5000 mAh",
      "Camera": "50MP Primary Camera"
    })
  },
  {
    name: "VIVO Y29 5GG 4/128",
    price: 13999,
    description: "Vivo Y29 5G with 4GB RAM and 128GB storage.",
    brand: "VIVO",
    category: "Smartphones",
    stock: 40,
    rating: 4.0,
    numReviews: 70,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/l2zxn680/mobile/j/x/m/vivo-y29-5g-pd2316finn-original-imagehsmgfshne72.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/l2zxn680/mobile/j/x/m/vivo-y29-5g-pd2316finn-original-imagehsmgzgkdrpp.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM": "4 GB",
      "Storage": "128 GB",
      "Display": "6.38 inch AMOLED",
      "Processor": "MediaTek Dimensity 6020+",
      "Battery": "4500 mAh",
      "Camera": "50MP Rear Camera"
    })
  },
  {
    name: "OPPO A5X 5G 4/128",
    price: 12999,
    description: "Oppo A5X with 5G capabilities and 4GB RAM.",
    brand: "OPPO",
    category: "Smartphones",
    stock: 35,
    rating: 4.0,
    numReviews: 50,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/l4lrs7k0/mobile/s/l/g/oppo-a5x-cph2365-original-imagfhhumyhvffck.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/l4lrs7k0/mobile/s/l/g/oppo-a5x-cph2365-original-imagfhhwbhftp7zz.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM": "4 GB",
      "Storage": "128 GB",
      "Display": "6.56 inch IPS LCD",
      "Processor": "MediaTek Helio G35",
      "Battery": "5000 mAh",
      "Camera": "13MP Primary Camera"
    })
  },
  // Baaki products bhi isi tarah add kar sakte ho
];

products.forEach(product => {
  const sql = `
    INSERT INTO products (name, price, description, brand, category, stock, rating, numReviews, images, specifications)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    product.name,
    product.price,
    product.description,
    product.brand,
    product.category,
    product.stock,
    product.rating,
    product.numReviews,
    product.images,
    product.specifications,
  ];

  connection.query(sql, values, err => {
    if (err) console.error('Insert error:', err);
  });
});

connection.end(() => {
  console.log('Seed data inserted successfully.');
  process.exit(0);
});
