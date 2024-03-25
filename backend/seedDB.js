const mongoose = require("mongoose");
const Product = require("./models/product");
const connectDatabase = require("./config/database");

connectDatabase();

const products = [
  {
    name: "Lenovo Ideapad",
    price: 999,
    description: "High-performance laptop for gaming and productivity",
    ratings: 4.5,
    images: [
      {
        public_id: "image1",
        url: "https://imgs.search.brave.com/Ks_iLTtGYqC1KvlYJJN2XR1qjeJ86ZzGtpVxVZ8FWhg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDc5/ODYyMzU3L3Bob3Rv/L2EtbGVub3ZvLWlk/ZWFwYWQtejUwMC10/b3VjaC1nYW1pbmct/bGFwdG9wLXBob3Rv/Z3JhcGhlZC1vbi1h/LXdoaXRlLWJhY2tn/cm91bmQtdGFrZW4t/b24tanVseS0zLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1z/Vlp3UGFubWZVRElR/TkhzX3JUX2h3MTBM/OHY0UVU5QmU0MC1O/a1hUdWFnPQ",
      },
      {
        public_id: "image2",
        url: "https://example.com/image2.jpg",
      },
    ],
    category: "Laptops",
    seller: "Best Electronics",
    stock: 10,
    numOfReviews: 50,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "John Doe",
        rating: 4,
        comment: "Great laptop, very fast!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent product, highly recommended!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
  {
    name: "Samsung Galaxy F12",
    price: 799,
    description: "High-quality smartphone with advanced features",
    ratings: 4.2,
    images: [
      {
        public_id: "image3",
        url: "https://imgs.search.brave.com/jazrFp5LO5FF2ZgYL7tmOBnwVEVLRRcrrALSv-N74pg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOGJh/YTYxNWYtMDQwYy00/NWVhLThlMDMtNjky/Y2Y4MDMzNzVmLjcx/ZjRjMmYxZGFiMDg2/NzU1NjhlYjlhMmQ3/MDgzZGVkLmpwZWc_/b2RuSGVpZ2h0PTc4/NCZvZG5XaWR0aD01/ODAmb2RuQmc9RkZG/RkZG",
      },
      {
        public_id: "image4",
        url: "https://example.com/image4.jpg",
      },
    ],
    category: "Electronics",
    seller: "Tech Emporium",
    stock: 20,
    numOfReviews: 35,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "Alice Johnson",
        rating: 4,
        comment: "Great smartphone, good camera quality!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Bob Williams",
        rating: 4.5,
        comment: "Fast delivery, excellent product!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
  {
    name: "Boat Airdopes",
    price: 149,
    description: "Wireless headphones with noise-cancelling technology",
    ratings: 4.8,
    images: [
      {
        public_id: "image5",
        url: "https://imgs.search.brave.com/xirftWtOnht3byNh2Bd95mKK3b6mZ0WmTjn_n6CznRw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYveGlm/MHEvaGVhZHBob25l/LzUvZy83Ly1vcmln/aW5hbC1pbWFncWhz/d3FyeDdzbjN3Lmpw/ZWc_cT03MA",
      },
      {
        public_id: "image6",
        url: "https://example.com/image6.jpg",
      },
    ],
    category: "Headphones",
    seller: "Audio World",
    stock: 15,
    numOfReviews: 28,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "David Brown",
        rating: 5,
        comment: "Amazing sound quality, comfortable to wear!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Emily Taylor",
        rating: 4.5,
        comment: "Love the design, great value for money!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
  {
    name: "Canon DSLR",
    price: 1299,
    description: "Professional DSLR camera for photography enthusiasts",
    ratings: 4.7,
    images: [
      {
        public_id: "image7",
        url: "https://imgs.search.brave.com/C8rbORuiSL0mgJpeWGBsP0OIpSGYsGIpfZvKCGE9VvM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhlL0VPU182NTBE/LmpwZw",
      },
      {
        public_id: "image8",
        url: "https://example.com/image8.jpg",
      },
    ],
    category: "Cameras",
    seller: "Photography Pro",
    stock: 8,
    numOfReviews: 42,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "Sophia Clark",
        rating: 4.7,
        comment: "Fantastic camera, captures stunning photos!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Ethan Hall",
        rating: 4.8,
        comment: "Impressed with the quality, highly recommended!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
  {
    name: "Noise Smart Watch",
    price: 199,
    description: "Advanced smartwatch with fitness tracking features",
    ratings: 4.4,
    images: [
      {
        public_id: "image11",
        url: "https://imgs.search.brave.com/Ctf1_Vn-x01PKi1IjlJgJfWH-V0WPZXzDeEpscuitCQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvc21hcnR3YXRj/aC94LzkvNC8tb3Jp/Z2luYWwtaW1hZ3Rk/cWtoejN4ZGtkdC5q/cGVnP3E9OTA",
      },
      {
        public_id: "image12",
        url: "https://example.com/image12.jpg",
      },
    ],
    category: "Accessories",
    seller: "Tech Trends",
    stock: 18,
    numOfReviews: 22,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "Michael Rodriguez",
        rating: 4.2,
        comment: "Sleek design, great functionality!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Sophie Garcia",
        rating: 4.5,
        comment: "Love the features, highly recommended!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
  {
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse for comfortable usage",
    ratings: 4.6,
    images: [
      {
        public_id: "image13",
        url: "https://imgs.search.brave.com/DmV9o-GLAS1k4nWUYsSEm_DXtdec8XmVEzbQtLw30-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFrVnViNytNYUwu/anBn",
      },
      {
        public_id: "image14",
        url: "https://example.com/image14.jpg",
      },
    ],
    category: "Accessories",
    seller: "Tech Gear",
    stock: 25,
    numOfReviews: 15,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "Aiden Wilson",
        rating: 4.8,
        comment: "Excellent mouse, very responsive!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Chloe Lopez",
        rating: 4.7,
        comment: "Comfortable grip, works flawlessly!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
  {
    name: "Smart Speaker",
    price: 149.99,
    description: "Voice-controlled smart speaker with built-in assistant",
    ratings: 4.3,
    images: [
      {
        public_id: "image15",
        url: "https://imgs.search.brave.com/mBPXu4ddk7jqxjkF2YxXx19AjjzWnVb4cNYhMQx4WgY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Yx/NDQzMGFkOTU4ZWY3/OGFiNWZhZGUyZTRj/NjU5NDc3NWVhN2Vm/OWEvaHViLzIwMTgv/MDIvMTUvMzk3OTM0/ZjQtODJkOC00NGJm/LTlkYTAtZmNkOGI4/MjgzZGVjL2JnLXNt/YXJ0LXNwZWFrZXJz/LTIwLmpwZz9hdXRv/PXdlYnAmd2lkdGg9/NzY4",
      },
      {
        public_id: "image16",
        url: "https://example.com/image16.jpg",
      },
    ],
    category: "Electronics",
    seller: "Audio Tech",
    stock: 30,
    numOfReviews: 20,
    reviews: [
      {
        user: "660056387d3f93d347630b3a",
        name: "William Brown",
        rating: 4.5,
        comment: "Impressive sound quality, highly satisfied!",
      },
      {
        user: "660056387d3f93d347630b3a",
        name: "Mia Martinez",
        rating: 4.2,
        comment: "Great addition to my home entertainment setup!",
      },
    ],
    user: "660056387d3f93d347630b3a",
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(products); // Insert new data
    console.log("Seed data inserted successfully");
    mongoose.connection.close(); // Close the connection after seeding
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedProducts();
