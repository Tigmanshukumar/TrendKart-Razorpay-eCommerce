# 🛒 TrendKart - Modern E-Commerce Platform

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/React-19.1+-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-7+-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/React_Router-7+-CA4245?logo=react-router" alt="React Router">
  <img src="https://img.shields.io/badge/Context_API-State-purple" alt="Context API">
</div>

<div align="center">
  <p><em>🛍️ Your one-stop destination for modern fashion and lifestyle products with seamless shopping experience</em></p>
  <h3>🌐 <a href="https://trendkartecommerce.netlify.app/">View Live</a></h3>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Pages & Components](#-pages--components)
- [State Management](#-state-management)
- [Dark Mode Implementation](#-dark-mode-implementation)
- [Product Data](#-product-data)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🎯 Overview

**TrendKart** is a modern, full-featured e-commerce web application built with React 19 and Vite. The platform offers a seamless shopping experience with features like product browsing, cart management, dark mode support, and a responsive design optimized for all devices.

### Key Highlights

- **Modern Tech Stack**: Built with React 19, Vite 7, and Tailwind CSS 3
- **Dark Mode**: System-wide dark mode with localStorage persistence
- **Shopping Cart**: Full cart functionality with local storage
- **Responsive Design**: Mobile-first approach with seamless UX
- **Toast Notifications**: Real-time user feedback with react-toastify
- **Category Filtering**: Browse products by categories
- **Product Search**: Sort and filter products efficiently

### Why TrendKart?

TrendKart demonstrates modern e-commerce development practices:
- **Context API**: Efficient state management without Redux
- **React Router v7**: Latest routing with proper navigation
- **Tailwind CSS**: Utility-first styling with custom dark mode
- **Component Architecture**: Reusable, maintainable components
- **Performance**: Optimized with Vite's HMR and build tools

## ✨ Features

### 🛍️ Shopping Features

#### Product Catalog
- **12 Products**: Diverse product range across categories
- **Categories**: Electronics, Fashion, Home, Lifestyle, Fitness
- **Product Details**: Full descriptions, ratings, and stock info
- **Featured Products**: Homepage showcase of top 4 products
- **Category Pages**: Browse by category with filters

#### Shopping Cart
- **Add to Cart**: Quick add from product pages and listings
- **Cart Management**: Update quantities, remove items
- **Cart Persistence**: LocalStorage saves cart between sessions
- **Real-time Updates**: Cart count badge in navbar
- **Cart Total**: Automatic price calculation with tax

#### Checkout Process
- **Billing Info**: Comprehensive shipping form
- **Payment Details**: Card information collection
- **Order Summary**: Review items before purchase
- **Order Confirmation**: Success toast notification
- **Coming Soon**: Payment Gateway Integration (Razorpay planned)

### 🎨 UI/UX Features

#### Dark Mode
- **Toggle Button**: Easy theme switching in navbar
- **System Preference**: Auto-detect OS dark mode preference
- **LocalStorage**: Theme preference persistence
- **Smooth Transition**: 300ms transition animations
- **Full Coverage**: All components support dark mode

#### Responsive Design
- **Mobile-First**: Optimized for small screens
- **Breakpoints**: Tailwind responsive utilities
- **Mobile Menu**: Hamburger navigation for mobile
- **Flexible Layouts**: Grid and flexbox layouts
- **Touch-Optimized**: Mobile-friendly interactions

#### Toast Notifications
- **Add to Cart**: Success notification
- **Remove Item**: Info notification
- **Order Placed**: Success confirmation
- **Custom Styling**: Branded notification design
- **Auto-dismiss**: 3-second timeout

### 🔐 Authentication Pages

#### Login & Signup
- **Login Form**: Email and password authentication
- **Signup Form**: New user registration
- **Remember Me**: Login persistence option
- **Password Confirmation**: Validation on signup
- **Terms & Conditions**: Agreement checkbox
- **Coming Soon**: Backend authentication integration

## 🛠️ Technology Stack

### Core Technologies

```json
{
  "react": "^19.1.1",              // Latest React with concurrent features
  "react-dom": "^19.1.1",          // React DOM rendering
  "react-router-dom": "^7.9.4",    // Client-side routing
  "vite": "^7.1.7",                // Next-gen build tool
  "tailwindcss": "^3.3.5",         // Utility-first CSS
  "react-toastify": "^11.0.5"      // Toast notifications
}
```

### Development Tools

```json
{
  "autoprefixer": "^10.4.21",      // CSS vendor prefixing
  "postcss": "^8.5.6",             // CSS processing
  "@vitejs/plugin-react": "^5.0.4", // Vite React plugin
  "eslint": "^9.36.0"              // Code linting
}
```

### Key Features

- **React Context API**: Global state management
- **LocalStorage**: Cart and theme persistence
- **Tailwind Dark Mode**: Class-based dark mode
- **React Router**: Declarative routing
- **Toast Notifications**: User feedback system

## 🚀 Installation

### Prerequisites

```bash
# Required Software
- Node.js >= 18.0.0
- npm >= 8.0.0 or yarn >= 1.22.0
- Git for version control
```

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Tigmanshukumar/trendkart.git
cd trendkart

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:4000
```

### Installation Details

```bash
# Install all dependencies
npm install

# Key dependencies installed:
# - react & react-dom: Core React
# - react-router-dom: Routing
# - tailwindcss: Styling
# - react-toastify: Notifications
# - autoprefixer & postcss: CSS processing
```

### Available Scripts

```bash
# Development server (port 4000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
trendkart/
├── public/                      # Static assets
│   ├── headphones.webp
│   ├── smartfitnesswatch.webp
│   ├── bag.webp
│   ├── tshirt.jpg
│   ├── blender.jpg
│   ├── wallclock.jpg
│   ├── smartwatch.jpg
│   ├── bottle.webp
│   ├── mug.webp
│   ├── charging pad.webp
│   ├── yoga.jpg
│   └── soy candle.jpg
│
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx          # Navigation with cart badge
│   │   └── Footer.jsx          # Footer with links
│   │
│   ├── context/                # Context providers
│   │   ├── CartContext.jsx     # Shopping cart state
│   │   └── ThemeContext.jsx    # Dark mode state
│   │
│   ├── pages/                  # Route pages
│   │   ├── Home.jsx            # Landing page
│   │   ├── Products.jsx        # Product listing
│   │   ├── ProductDetails.jsx  # Single product view
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── Checkout.jsx        # Checkout form
│   │   ├── Login.jsx           # Login page
│   │   └── Signup.jsx          # Registration page
│   │
│   ├── data/
│   │   └── products.js         # Product data (12 products)
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
│
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind config with dark mode
├── postcss.config.js           # PostCSS config
└── README.md
```

## 📄 Pages & Components

### Pages

#### 1. Home Page (`Home.jsx`)
```jsx
Features:
- Hero section with CTA
- Featured products (4 items)
- Shop by category section
- Responsive grid layout
```

#### 2. Products Page (`Products.jsx`)
```jsx
Features:
- All 12 products displayed
- Category filter sidebar
- Sort by price/rating dropdown
- Add to cart functionality
- URL query parameter filtering
```

#### 3. Product Details (`ProductDetails.jsx`)
```jsx
Features:
- Large product image
- Full description
- Star rating display
- Stock availability
- Quantity selector
- Add to cart button
- Back to products link
```

#### 4. Cart Page (`Cart.jsx`)
```jsx
Features:
- Cart items table
- Quantity adjustment (+/-)
- Remove item button
- Subtotal calculation
- Tax calculation (10%)
- Checkout button
- Empty cart state
```

#### 5. Checkout Page (`Checkout.jsx`)
```jsx
Features:
- Shipping information form
- Payment details form (coming soon)
- Order summary sidebar
- Form validation
- Success toast on submit
- Clears cart after order
```

#### 6. Login/Signup Pages
```jsx
Features:
- Email/password forms
- Remember me checkbox
- Form validation
- Link to other auth page
- Coming soon: Backend integration
```

### Components

#### Navbar Component
```jsx
Features:
- TrendKart logo
- Navigation links (Home, Products, Cart)
- Cart badge with item count
- Dark mode toggle button
- Mobile hamburger menu
- Responsive design
```

#### Footer Component
```jsx
Features:
- Company information
- Quick links section
- Categories links
- Contact information
- Social media icons
- Copyright notice
- Dark mode support
```

## 🔄 State Management

### Cart Context (`CartContext.jsx`)

```javascript
// Context provides:
const {
  cart,                    // Array of cart items
  addToCart,              // Add product to cart
  removeFromCart,         // Remove product from cart
  updateQuantity,         // Update item quantity
  clearCart,              // Clear all items
  getCartTotal,           // Calculate total price
  getCartItemsCount       // Get total item count
} = useCart();

// LocalStorage integration:
- Loads cart on mount from localStorage
- Saves cart to localStorage on every change
- Persists between browser sessions
```

### Theme Context (`ThemeContext.jsx`)

```javascript
// Context provides:
const {
  darkMode,               // Boolean: dark mode state
  toggleTheme            // Function: toggle dark/light mode
} = useTheme();

// Features:
- Detects OS dark mode preference on first load
- Persists theme choice in localStorage
- Adds/removes 'dark' class on document root
- 300ms transition on theme change
```

### Usage Example

```jsx
// In any component
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { addToCart, cart } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => addToCart(product, 1)}>
        Add to Cart
      </button>
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
```

## 🌙 Dark Mode Implementation

### Configuration

```javascript
// tailwind.config.js
export default {
  darkMode: 'class',  // Class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          input: '#334155'
        }
      }
    }
  }
}
```

### CSS Implementation

```css
/* index.css */
body {
  background-color: #f9fafb;
  color: #1f2937;
  transition: background-color 0.3s ease;
}

.dark body {
  background-color: #0f172a;
  color: #e2e8f0;
}

/* Dark mode for cards */
.dark .bg-white {
  background-color: #1e293b !important;
  color: #e2e8f0;
}

/* Dark mode for inputs */
.dark input,
.dark select,
.dark textarea {
  background-color: #334155;
  border-color: #475569;
  color: #e2e8f0;
}
```

### Component Usage

```jsx
// Navbar component
<nav className="bg-white dark:bg-dark-secondary">
  <button onClick={toggleTheme}>
    {darkMode ? <SunIcon /> : <MoonIcon />}
  </button>
</nav>

// Product card
<div className="bg-white dark:bg-dark-card">
  <p className="text-gray-600 dark:text-gray-300">
    Product description
  </p>
</div>
```

## 📦 Product Data

### Product Structure (`products.js`)

```javascript
const product = {
  id: 1,                           // Unique identifier
  name: "Product Name",            // Product title
  price: 99.99,                    // Price in USD
  image: "/image.webp",            // Image path
  description: "Full description", // Detailed description
  category: "electronics",         // Product category
  rating: 4.8,                     // Star rating (1-5)
  stock: 15                        // Available quantity
};
```

### Categories

```javascript
Available categories:
- electronics  // Headphones, speakers, chargers
- fashion      // Clothing, bags, accessories
- home         // Blender, clock, mugs, candles
- lifestyle    // Water bottles, general items
- fitness      // Yoga mats, fitness gear
```

### Featured Products

```javascript
// First 4 products displayed on home page
Products #1-4:
1. Gaming Wireless Headphones ($999.99)
2. Smart Fitness Watch ($149.99)
3. Designer Leather Backpack ($599.99)
4. Organic Cotton T-Shirt ($29.99)
```

## 📱 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Page - Light Mode
![Home Light](screenshots/home-light.png)
*Hero section with featured products and category browsing*

### Home Page - Dark Mode
![Home Dark](screenshots/home-dark.png)
*Beautiful dark mode with smooth transitions*

### Products Page
![Products](screenshots/products-page.png)
*Product grid with category filters and sorting options*

### Product Details
![Product Details](screenshots/product-details.png)
*Detailed product view with add to cart functionality*

### Shopping Cart
![Cart](screenshots/cart-page.png)
*Cart management with quantity controls and price summary*

### Checkout Page
![Checkout](screenshots/checkout-page.png)
*Comprehensive checkout form with order summary*

### Mobile Responsive
![Mobile View](screenshots/mobile-responsive.png)
*Mobile-optimized navigation and layouts*

### Dark Mode Toggle
![Dark Mode](screenshots/dark-mode-toggle.png)
*Seamless theme switching with system preference detection*

</details>

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy dist folder
# or use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Environment Variables

```env
# Create .env file if needed for future features
VITE_API_URL=your_api_url
VITE_RAZORPAY_KEY=your_razorpay_key
```

### Build Configuration

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

## 🚀 Future Enhancements

### Coming Soon Features

#### Payment Integration
- **Razorpay Gateway**: Secure payment processing (Planned)
- **Multiple Payment Methods**: Cards, UPI, Wallets
- **Order Tracking**: Track order status and delivery
- **Invoice Generation**: PDF invoices for orders

#### Backend Integration
- **User Authentication**: JWT-based auth with backend
- **Product API**: Dynamic product loading from database
- **User Profiles**: Order history and saved addresses
- **Wishlist**: Save products for later
- **Reviews & Ratings**: User-generated product reviews

#### Enhanced Features
- **Product Search**: Advanced search with filters
- **Product Recommendations**: AI-based suggestions
- **Discount Coupons**: Promo code system
- **Multi-currency**: Support for different currencies
- **Multi-language**: i18n internationalization
- **Email Notifications**: Order confirmations and updates

#### Performance & SEO
- **Image Optimization**: WebP format and lazy loading
- **SEO Optimization**: Meta tags and Open Graph
- **PWA Support**: Offline functionality
- **Analytics**: Google Analytics integration
- **Performance Monitoring**: Core Web Vitals tracking

#### Admin Features
- **Admin Dashboard**: Product and order management
- **Inventory Management**: Stock tracking and alerts
- **Analytics Dashboard**: Sales and user metrics
- **Customer Management**: User data and support

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Contribution Ideas

- [ ] Add product search functionality
- [ ] Implement wishlist feature
- [ ] Add product reviews and ratings
- [ ] Create admin dashboard
- [ ] Integrate Razorpay payment gateway
- [ ] Add order tracking system
- [ ] Implement user authentication backend
- [ ] Add email notifications
- [ ] Create mobile app (React Native)
- [ ] Add product comparison feature
- [ ] Implement advanced filtering
- [ ] Add social sharing buttons

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork https://github.com/Tigmanshukumar/trendkart.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Test thoroughly
   - Update documentation

4. **Commit Your Changes**
   ```bash
   git commit -m "feat: Add amazing feature"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads correctly
- [ ] Products page displays all items
- [ ] Category filtering works
- [ ] Sort functionality works
- [ ] Add to cart functionality
- [ ] Cart updates correctly
- [ ] Quantity controls work
- [ ] Remove from cart works
- [ ] Checkout form validates
- [ ] Dark mode toggles correctly
- [ ] Theme persists on refresh
- [ ] Mobile menu works
- [ ] Responsive on all devices
- [ ] Toast notifications appear
- [ ] LocalStorage persists cart

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Tigmanshu Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📞 Contact

**Developer**: Tigmanshu Kumar  
**Email**: [tigmanshukumar5@gmail.com](mailto:tigmanshukumar5@gmail.com)  
**LinkedIn**: [Connect with me](https://www.linkedin.com/in/tigmanshu-kumar-a774082b7/)  
**GitHub**: [@Tigmanshukumar](https://github.com/Tigmanshukumar)

### Get in Touch

- 🐛 **Bug Reports**: [Create an issue](https://github.com/Tigmanshukumar/trendkart/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/Tigmanshukumar/trendkart/discussions)
- 🛍️ **E-commerce Projects**: Open for freelance work
- 🤝 **Collaboration**: Interested in React and e-commerce projects

---

<div align="center">
  <p>
    <strong>⭐ If you find TrendKart useful, please give it a star!</strong>
  </p>
  <p>
    Made with ❤️ by <strong>Tigmanshu Kumar</strong>
  </p>
  <p>
    <em>🛒 "Shop Smart, Shop TrendKart"</em>
  </p>
</div>

---

## 🙏 Acknowledgments

### Technologies & Libraries

- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[React Router](https://reactrouter.com/)** - Declarative routing for React
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Beautiful notifications
- **[Unsplash](https://unsplash.com/)** - High-quality category images

### Inspiration

- Modern e-commerce platforms for UX design
- React Context API best practices
- Tailwind CSS dark mode patterns
- Community feedback and contributions

### Special Thanks

- React and Vite teams for amazing tools
- Tailwind CSS for the utility-first approach
- Open source community for inspiration
- All contributors and star-gazers

<div align="center">
  <sub>🚀 Building the future of e-commerce, one component at a time</sub>
</div>
