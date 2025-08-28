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
    rating: 4.3,
    numReviews: 500,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/312/312/ky8xhu80/mobile/u/g/w/c73-rmx3551-realme-original-imagafejnzm6s7xt.jpeg",
      "https://rukminim1.flixcart.com/image/312/312/ky8xhu80/mobile/u/g/w/c73-rmx3551-realme-original-imagafejnbxgg56zw.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "4GB RAM, 128GB Storage",
      "Display": "6.72 inch AMOLED",
      "Processor": "MediaTek Helio G88",
      "Battery": "5000 mAh",
      "Camera": "64MP AI Dual Camera"
    }),
  },
  {
    name: "REALME P3X 6/128",
    price: 12999,
    description: "Realme P3X with Helio G85 processor, 6GB RAM and vibrant display.",
    brand: "REALME",
    category: "Smartphones",
    stock: 40,
    rating: 4.4,
    numReviews: 300,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/khjbafk0/mobile/q/q/g/realme-p3x-rmx2202-original-imafzydacxebntfv.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kq17ivk0/mobile/q/q/g/realme-p3x-rmx2202-original-imag4tzrbsxptlmu.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "6GB RAM, 128GB Storage",
      "Display": "6.5 inch IPS LCD",
      "Processor": "MediaTek Helio G85",
      "Battery": "5000 mAh",
      "Camera": "50MP AI Dual Camera"
    }),
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
      "RAM/Storage": "6GB RAM, 128GB Storage",
      "Display": "6.72 inch AMOLED",
      "Processor": "MediaTek Helio G99",
      "Battery": "5000 mAh",
      "Camera": "50MP Primary Camera"
    }),
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
      "RAM/Storage": "4GB RAM, 128GB Storage",
      "Display": "6.38 inch AMOLED",
      "Processor": "MediaTek Dimensity 6020+",
      "Battery": "4500 mAh",
      "Camera": "50MP Rear Camera"
    }),
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
      "RAM/Storage": "4GB RAM, 128GB Storage",
      "Display": "6.56 inch IPS LCD",
      "Processor": "MediaTek Helio G35",
      "Battery": "5000 mAh",
      "Camera": "13MP Primary Camera"
    }),
  },
  {
    name: "OPPO A5 6/128",
    price: 15499,
    description: "OPPO A5 offers 6GB RAM with 128GB internal storage.",
    brand: "OPPO",
    category: "Smartphones",
    stock: 30,
    rating: 4.2,
    numReviews: 45,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/kyhy1zk0/mobile/r/l/c/oppo-a5-cph2239-original-imafupz7tbjt3nsx.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kyhy1zk0/mobile/r/l/c/oppo-a5-cph2239-original-imafupz7tbjhztme.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "6GB RAM, 128GB Storage",
      "Display": "6.5 inch HD+ IPS LCD",
      "Processor": "MediaTek Helio G35",
      "Battery": "5000 mAh",
      "Camera": "13MP + 2MP Dual Rear Camera"
    }),
  },
  {
    name: "TECNO SPARK GO 2 4/64",
    price: 7299,
    description: "TECNO SPARK GO 2 with 4GB RAM and 64GB storage.",
    brand: "TECNO",
    category: "Smartphones",
    stock: 50,
    rating: 3.8,
    numReviews: 20,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/ke0fjgw0/mobile/w/y/b/tecno-spark-go-2-cg7-original-imafuyjpkygr6j6h.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/ke0fjgw0/mobile/w/y/b/tecno-spark-go-2-cg7-original-imafuyjqf9fzqvnk.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "4GB RAM, 64GB Storage",
      "Display": "6.52 inch IPS LCD",
      "Processor": "MediaTek Helio A22",
      "Battery": "5000 mAh",
      "Camera": "8MP + VGA Dual Rear Camera"
    }),
  },
  {
    name: "TECNO SPARK GO 5G 4/128",
    price: 9999,
    description: "TECNO SPARK GO 5G with 4GB RAM and 128GB storage.",
    brand: "TECNO",
    category: "Smartphones",
    stock: 45,
    rating: 3.9,
    numReviews: 25,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/l3qnbow0/mobile/v/7/h/tecno-spark-go-5g-nyh-n0-original-imageyurcc8hfnzf.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/l3qnbow0/mobile/v/7/h/tecno-spark-go-5g-nyh-n0-original-imageyurdweq2ba9.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "4GB RAM, 128GB Storage",
      "Display": "6.5 inch IPS LCD",
      "Processor": "MediaTek Dimensity 6020",
      "Battery": "5000 mAh",
      "Camera": "13MP Dual Rear Camera"
    }),
  },
  {
    name: "TECNO POVA 7 8/128",
    price: 14999,
    description: "TECNO POVA 7 with 8GB RAM and 128GB storage, big battery.",
    brand: "TECNO",
    category: "Smartphones",
    stock: 35,
    rating: 4.0,
    numReviews: 30,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/kzfal0w0/mobile/n/t/0/tecno-pova-7-dual-pova-a45a-original-imagb6duq9mvw7uc.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kzfal0w0/mobile/n/t/0/tecno-pova-7-dual-pova-a45a-original-imagb6dukyzznbvh.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "8GB RAM, 128GB Storage",
      "Display": "6.82 inch IPS LCD",
      "Processor": "MediaTek Helio G88",
      "Battery": "6000 mAh",
      "Camera": "50MP Dual Rear Camera"
    }),
  },
  {
    name: "TECNO POVA CURVE 5G 8/128",
    price: 16999,
    description: "TECNO POVA Curve 5G with 8GB RAM and 128GB storage.",
    brand: "TECNO",
    category: "Smartphones",
    stock: 25,
    rating: 4.1,
    numReviews: 18,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/l5j1x8w0/mobile/e/e/c/tecno-pova-curve-dual-standard-pova-curve-original-imagg7kefusx9ytu.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/l5j1x8w0/mobile/e/e/c/tecno-pova-curve-dual-standard-pova-curve-original-imagg7kezrnuzept.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "8GB RAM, 128GB Storage",
      "Display": "6.56 inch IPS LCD",
      "Processor": "MediaTek Dimensity 8050+",
      "Battery": "5000 mAh",
      "Camera": "64MP Dual Rear Camera"
    }),
  },
  {
    name: "INFINIX NOTE 50X 6/128",
    price: 11499,
    description: "Infinix Note 50X with 6GB RAM and 128GB storage.",
    brand: "INFINIX",
    category: "Smartphones",
    stock: 40,
    rating: 4.0,
    numReviews: 40,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/y/c/infinix-note-50-x-nd2303-original-imagk4wph5yykdfz.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/o/d/f/infinix-note-50-x-nd2303-original-imagk4wphhfkodmnh.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "6GB RAM, 128GB Storage",
      "Display": "6.67 inch AMOLED",
      "Processor": "MediaTek Helio G96",
      "Battery": "5000 mAh",
      "Camera": "48MP Dual Rear Camera"
    }),
  },
  {
    name: "INFINIX NOTE 50S 6/128",
    price: 14999,
    description: "Infinix Note 50S with 6GB RAM and 128GB storage.",
    brand: "INFINIX",
    category: "Smartphones",
    stock: 30,
    rating: 4.1,
    numReviews: 35,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/l/v/h/infinix-note-50s-x681c-original-imagjpjygryfz8ns.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/q/g/d/infinix-note-50s-x681c-original-imagjpjyhujn3yxj.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "6GB RAM, 128GB Storage",
      "Display": "6.67 inch AMOLED",
      "Processor": "MediaTek Helio G96",
      "Battery": "5000 mAh",
      "Camera": "50MP Dual Rear Camera"
    }),
  },
  {
    name: "LAVA SHARK 5G 4/64",
    price: 8499,
    description: "Lava Shark 5G with 4GB RAM and 64GB storage.",
    brand: "LAVA",
    category: "Smartphones",
    stock: 25,
    rating: 3.9,
    numReviews: 15,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/kpmf1jk0/mobile/s/f/n/lava-shark-5g-ms1-original-imagfgqx5p8yxxaf.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kpmf1jk0/mobile/s/f/n/lava-shark-5g-ms1-original-imagfgqxfk6fqvkm.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "4GB RAM, 64GB Storage",
      "Display": "6.5 inch IPS LCD",
      "Processor": "MediaTek Helio G80",
      "Battery": "5000 mAh",
      "Camera": "13MP Dual Rear Camera"
    }),
  },
  {
    name: "LAVA BLAZE AMOLED 2 6/128",
    price: 13999,
    description: "Lava Blaze AMOLED 2 with 6GB RAM and 128GB storage.",
    brand: "LAVA",
    category: "Smartphones",
    stock: 20,
    rating: 4.0,
    numReviews: 30,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/l0fp0sw0/mobile/h/q/y/lava-blaze-amd2-l2021-original-imagcsg3czryxqh8.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/l0fp0sw0/mobile/h/q/y/lava-blaze-amd2-l2021-original-imagcsg3q49dxnsa.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "6GB RAM, 128GB Storage",
      "Display": "6.5 inch AMOLED",
      "Processor": "MediaTek Helio G85",
      "Battery": "5000 mAh",
      "Camera": "50MP Dual Rear Camera"
    }),
  },
  {
    name: "ITEL A90 4/64",
    price: 6999,
    description: "Itel A90 with 4GB RAM and 64GB storage.",
    brand: "ITEL",
    category: "Smartphones",
    stock: 30,
    rating: 3.8,
    numReviews: 10,
    images: JSON.stringify([
      "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/6/2/n/itel-a90-original-imag4t2a8mstpnxz.jpeg",
      "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/6/2/n/itel-a90-original-imag4t2aaekuft66.jpeg"
    ]),
    specifications: JSON.stringify({
      "RAM/Storage": "4GB RAM, 64GB Storage",
      "Display": "6.1 inch IPS LCD",
      "Processor": "Unisoc SC9863A",
      "Battery": "4000 mAh",
      "Camera": "8MP Rear Camera"
    }),
  },
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
