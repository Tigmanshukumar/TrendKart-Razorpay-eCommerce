const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Experience premium sound quality with these wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    category: "electronics",
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Track your fitness goals with this advanced smartwatch. Monitors heart rate, sleep patterns, and activity levels. Water-resistant and includes GPS tracking.",
    category: "electronics",
    rating: 4.5,
    stock: 20
  },
  {
    id: 3,
    name: "Designer Leather Backpack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Stylish and functional leather backpack with multiple compartments. Perfect for work, school, or travel. Features padded laptop sleeve and water-resistant exterior.",
    category: "fashion",
    rating: 4.7,
    stock: 12
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Comfortable and eco-friendly organic cotton t-shirt. Available in multiple colors. Ethically sourced and sustainably manufactured.",
    category: "fashion",
    rating: 4.3,
    stock: 50
  },
  {
    id: 5,
    name: "Professional Blender",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "High-performance blender with multiple speed settings. Perfect for smoothies, soups, and sauces. Includes dishwasher-safe components for easy cleaning.",
    category: "home",
    rating: 4.6,
    stock: 8
  },
  {
    id: 6,
    name: "Minimalist Wall Clock",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Modern minimalist wall clock with silent movement. Perfect for home or office. Battery operated and easy to install.",
    category: "home",
    rating: 4.2,
    stock: 25
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Waterproof portable speaker with 360° sound. Features 12-hour battery life and built-in microphone for calls. Compact design perfect for travel.",
    category: "electronics",
    rating: 4.4,
    stock: 18
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Double-walled insulated water bottle. Keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design and BPA-free construction.",
    category: "lifestyle",
    rating: 4.9,
    stock: 30
  },
  {
    id: 9,
    name: "Handcrafted Ceramic Mug Set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Set of 4 handcrafted ceramic mugs. Each piece is unique with a beautiful glazed finish. Microwave and dishwasher safe.",
    category: "home",
    rating: 4.7,
    stock: 10
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and non-slip surface.",
    category: "electronics",
    rating: 4.5,
    stock: 22
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Eco-friendly non-slip yoga mat. Perfect thickness for joint protection and stability. Includes carrying strap for easy transport.",
    category: "fitness",
    rating: 4.6,
    stock: 15
  },
  {
    id: 12,
    name: "Scented Soy Candle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1603006905393-c279c4320be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Hand-poured soy wax candle with essential oils. Long-burning and clean with a subtle, relaxing fragrance. Perfect for creating a cozy atmosphere.",
    category: "home",
    rating: 4.8,
    stock: 40
  }
];

export default products;