# Task 5: Items/Products Page Component

## Objective
Create the Products listing page with filtering, product display, modals for product details, and add-to-cart functionality.

## Colors to Use
Based on the existing items page design:

```scss
// Product Display Colors
$product-card-bg: transparent;          // Product card background
$product-title: #ffffff;                // Product titles
$product-price: #ffffff;                // Regular prices
$product-discount: rgb(174, 172, 172);  // Discounted prices
$star-active: #FFAD33;                  // Active star rating
$star-inactive: #8D8D8D;                // Inactive star rating

// Modal/Popup Colors
$modal-bg: rgba(20, 25, 42, 0.95);     // Modal background
$modal-content-bg: #f2f6ff;            // Modal content background
$modal-text: #000000;                   // Modal text color
$close-btn: #ffffff;                    // Close button color

// Range Slider Colors
$slider-track: #ddd;                    // Slider track
$slider-thumb: #DB4444;                 // Slider thumb
$slider-value: #ffffff;                 // Value display

// Add to Cart Button
$cart-btn-bg: #DB4444;                  // Add to cart button
$cart-btn-text: #ffffff;                // Button text
$cart-btn-hover: #c73e3e;               // Button hover state

// Success Message
$success-bg: rgba(0, 149, 60, 0.9);    // Success notification
$success-text: #ffffff;                 // Success text
```

## HTML Structure to Convert

### 1. Product Grid Layout
Convert this product listing structure:

```html
<div class="items">
  <div class="item f4i">
    <div class="box">
      <img src="imgs/playStation.png" alt="img">
    </div>
    <div class="discription">
      <h3 class="title">Play Station 5 hand</h3>
      <div class="prices">
        <h3 class="price">$22.5</h3>
        <h3 class="discount">$35</h3>
      </div>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
  </div>
  
  <div class="item i3 f4i">
    <div class="box">
      <img src="imgs/Keyboard.png" alt="img">
    </div>
    <div class="discription">
      <h3 class="title">Dynamic Gaming keyboard</h3>
      <div class="prices">
        <h3 class="price">$123.25</h3>
        <h3 class="discount"></h3>
      </div>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <span><i class="fa-solid fa-star"></i></span>
    </div>
  </div>
</div>
```

### 2. Product Detail Modal
Convert this popup window structure:

```html
<div class="popBuyWindow firstOne" id="popUpWindow1">
  <i class="fa-solid fa-x xicon" id="XXicon1"></i>
  
  <div class="imgContainer">
    <img src="imgs/chair.png" alt="chair">
  </div>
  
  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <span><i class="fa-solid fa-star"></i></span>
    <p class="ratingNumber">(56)</p>
  </div>
  
  <div class="titleOfImg">
    <h3>HAVIT HV-G92 Gamepad</h3>
    <p>Details about the product and how it will be delivered</p>
    <div class="prices">
      <h3 class="price" style="color: #d46b6b;">$120</h3>
      <h3 class="discount" style="color: #d46b6b;">$160</h3>
    </div>
    
    <div class="allRangeBox">
      <div class="RangeSlider">
        <input type="range" min="1" max="20" step="1" value="1" class="rangeInpt1">
      </div>
      <div class="value1 value">20</div>
    </div>
    
    <div class="correct" style="display: none;">
      <h1>Added successfully</h1>
    </div>
  </div>
  
  <div class="buttonsToBuy popbtn">
    <button class="addToCart1">add to cart 🛒</button>
  </div>
</div>
```

### 3. Success Notification
Convert this success message:

```html
<div class="correct" style="display: none;">
  <h1>Added successfully</h1>
</div>
```

## Key CSS Styles to Implement

### Product Grid Styling
```scss
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  
  .item {
    background: $product-card-bg;
    border-radius: 1rem;
    padding: 1rem;
    transition: transform 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-0.5rem);
    }
    
    .box {
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }
    
    .discription {
      .title {
        color: $product-title;
        font-size: 1.2rem;
        margin: 1rem 0 0.5rem;
      }
      
      .prices {
        display: flex;
        gap: 1rem;
        margin-bottom: 0.5rem;
        
        .price {
          color: $product-price;
          font-weight: 600;
        }
        
        .discount {
          color: $product-discount;
          text-decoration: line-through;
        }
      }
      
      .fa-star {
        color: $star-active;
        margin-right: 0.2rem;
        
        &.inactive {
          color: $star-inactive;
        }
      }
    }
  }
}
```

### Modal Styling
```scss
.popBuyWindow {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 800px;
  height: 60vh;
  background: $modal-bg;
  border-radius: 1rem;
  padding: 2rem;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  
  &.show {
    opacity: 1;
    pointer-events: auto;
  }
  
  .xicon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: $close-btn;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .imgContainer {
    background: $modal-content-bg;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  
  .titleOfImg {
    color: $modal-text;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      margin-bottom: 1rem;
      opacity: 0.8;
    }
    
    .prices {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      
      .price, .discount {
        color: $cart-btn-bg;
      }
    }
  }
  
  .allRangeBox {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .RangeSlider {
      flex: 1;
      
      input[type="range"] {
        width: 100%;
        height: 0.5rem;
        background: $slider-track;
        border-radius: 0.25rem;
        outline: none;
        
        &::-webkit-slider-thumb {
          appearance: none;
          width: 1rem;
          height: 1rem;
          background: $slider-thumb;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
    
    .value {
      color: $slider-value;
      font-weight: 600;
      min-width: 2rem;
    }
  }
  
  .buttonsToBuy {
    text-align: center;
    
    button {
      background: $cart-btn-bg;
      color: $cart-btn-text;
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
      
      &:hover {
        background: $cart-btn-hover;
      }
    }
  }
}
```

## TypeScript Component Logic

### 1. Product Interface
```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  stock: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}
```

### 2. Component Implementation
```typescript
import { Component, OnInit } from '@angular/core';

export class ItemsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      title: 'Play Station 5 hand',
      price: 22.5,
      discountPrice: 35,
      image: 'assets/imgs/playStation.png',
      rating: 5,
      reviews: 88,
      description: 'High-quality gaming controller',
      category: 'gaming',
      stock: 20
    },
    {
      id: 2,
      title: 'Dynamic Gaming keyboard',
      price: 123.25,
      image: 'assets/imgs/Keyboard.png',
      rating: 4,
      reviews: 56,
      description: 'RGB mechanical gaming keyboard',
      category: 'gaming',
      stock: 15
    }
    // Add more products...
  ];

  selectedProduct: Product | null = null;
  showModal = false;
  selectedQuantity = 1;
  showSuccessMessage = false;

  ngOnInit() {
    // Initialize component
  }

  openProductModal(product: Product) {
    this.selectedProduct = product;
    this.selectedQuantity = 1;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }

  updateQuantity(quantity: number) {
    this.selectedQuantity = quantity;
  }

  addToCart() {
    if (this.selectedProduct) {
      const cartItem: CartItem = {
        product: this.selectedProduct,
        quantity: this.selectedQuantity
      };
      
      // Add to cart logic (localStorage or service)
      this.addToCartService(cartItem);
      
      // Show success message
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.closeModal();
      }, 1500);
    }
  }

  private addToCartService(item: CartItem) {
    // Get existing cart data
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if item already exists
    const existingItemIndex = existingCart.findIndex(
      (cartItem: CartItem) => cartItem.product.id === item.product.id
    );
    
    if (existingItemIndex > -1) {
      // Update quantity
      existingCart[existingItemIndex].quantity += item.quantity;
    } else {
      // Add new item
      existingCart.push(item);
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }
}
```

### 3. Filter and Search Logic
```typescript
interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
}

export class ItemsComponent {
  // ... existing code ...
  
  filterOptions: FilterOptions = {
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    rating: 0
  };

  searchTerm = '';
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.filterOptions.category || product.category === this.filterOptions.category;
      const matchesPrice = product.price >= this.filterOptions.minPrice && product.price <= this.filterOptions.maxPrice;
      const matchesRating = product.rating >= this.filterOptions.rating;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }
}
```

## Tasks

### 1. Create Items Component Structure
- Generate Angular component for products page
- Set up product grid layout
- Implement responsive design

### 2. Build Product Cards
- Create product card component
- Display product images, titles, prices, and ratings
- Add click handlers for opening product details

### 3. Implement Product Modal
- Create modal component for product details
- Add quantity selector with range input
- Implement close functionality

### 4. Add Cart Functionality
- Implement add-to-cart logic
- Store cart data in localStorage or service
- Show success notifications

### 5. Add Filtering and Search
- Implement product search functionality
- Add category, price, and rating filters
- Update product list based on filters

### 6. Integrate with Cart Service
- Create cart service for state management
- Handle cart persistence
- Update cart count in navigation

## Expected Deliverables
- Items component with product grid
- Product detail modal component
- Add-to-cart functionality
- Search and filter capabilities
- Cart service integration

## Acceptance Criteria
- [ ] Products display correctly in grid layout
- [ ] Product modal opens with correct information
- [ ] Quantity selector works properly
- [ ] Add-to-cart functionality works
- [ ] Success messages display correctly
- [ ] Search and filtering work as expected
- [ ] All colors match the specified scheme
- [ ] Cart data persists between sessions