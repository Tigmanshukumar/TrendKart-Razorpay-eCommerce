import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const location = useLocation();
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  // Filter products based on URL query params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setFilteredProducts(
        products.filter(product => product.category === categoryParam)
      );
    } else {
      setActiveCategory('all');
      setFilteredProducts(products);
    }
  }, [location.search]);
  
  // Handle category filter
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };
  
  // Handle sorting
  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sortedProducts = [...filteredProducts];
    
    switch (value) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (by id)
        sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    setFilteredProducts(sortedProducts);
  };
  
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <button
                    className={`capitalize w-full text-left py-2 px-3 rounded ${
                      activeCategory === category 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Sort By</h2>
              <select 
                className="w-full p-2 border rounded"
                value={sortBy}
                onChange={handleSort}
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600">No products found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    </Link>
                    <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                      <div className="text-yellow-400 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <button 
                      className="w-full btn btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;