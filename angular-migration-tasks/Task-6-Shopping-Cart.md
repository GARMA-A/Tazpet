# Task 6: Shopping Cart Component

## Objective
Create the shopping cart page component that displays cart items, allows quantity modification, calculates totals, and handles checkout/delete operations.

## Colors to Use
Based on the existing cart page design:

```scss
// Cart Page Colors
$cart-header-bg: transparent;           // Cart headers background
$cart-header-text: #ffffff;             // Cart column headers
$cart-item-bg: rgba(255, 255, 255, 0.05); // Cart item rows background
$cart-item-text: #ffffff;               // Cart item text color

// Product Information
$product-title: #ffffff;                // Product titles
$price-text: #ffffff;                   // Price display
$quantity-text: #ffffff;                // Quantity numbers
$subtotal-text: #ffffff;                // Subtotal amounts

// Action Buttons
$confirm-btn-bg: #00953c;               // Confirm button background
$confirm-btn-text: #ffffff;             // Confirm button text
$confirm-btn-hover: #007a32;            // Confirm button hover

$delete-btn-bg: #DB4444;                // Delete button background
$delete-btn-text: #ffffff;              // Delete button text
$delete-btn-hover: #c73e3e;             // Delete button hover

// Table Styling
$table-border: rgba(255, 255, 255, 0.1); // Table borders
$table-header-bg: rgba(255, 255, 255, 0.1); // Table header background

// Empty Cart
$empty-cart-text: rgb(174, 172, 172);   // Empty cart message
$empty-cart-bg: transparent;            // Empty cart background
```

## HTML Structure to Convert

### 1. Cart Headers
Convert this table header structure:

```html
<div class="titles product">
  <h2 class="image">Product</h2>
  <h2 class="price">Price</h2>
  <h2 class="quantity">quantity</h2>
  <h2 class="subTotal">subTotal</h2>
</div>
```

### 2. Cart Actions
Convert this action buttons section:

```html
<div class="buyNow">
  <button id="confirm">Confirm</button>
  <button id="deleteAll">Delete All</button>
</div>
```

### 3. Dynamic Cart Item Structure
Based on the JavaScript logic, implement this cart item structure:

```html
<div class="product">
  <h2>${data.title}</h2>
  <h2>${data.price}$</h2>
  <h2>${data.numberOfItems}</h2>
  <h2>${data.subPrice}$</h2>
</div>
```

## Key CSS Styles to Implement

### Cart Container Styling
```scss
.cart-container {
  padding: 2rem;
  min-height: 80vh;
  
  .titles {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    background: $table-header-bg;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    
    h2 {
      color: $cart-header-text;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
      
      &.image {
        text-align: left;
      }
    }
  }
  
  .cart-items {
    .product {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 1rem;
      padding: 1rem;
      background: $cart-item-bg;
      border: 1px solid $table-border;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      align-items: center;
      
      h2 {
        color: $cart-item-text;
        font-size: 1rem;
        text-align: center;
        
        &:first-child {
          text-align: left;
          font-weight: 600;
        }
      }
      
      .quantity-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        
        button {
          background: $delete-btn-bg;
          color: $delete-btn-text;
          border: none;
          border-radius: 0.3rem;
          width: 2rem;
          height: 2rem;
          cursor: pointer;
          font-weight: 600;
          
          &:hover {
            background: $delete-btn-hover;
          }
          
          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
        
        span {
          min-width: 2rem;
          text-align: center;
          color: $quantity-text;
          font-weight: 600;
        }
      }
      
      .remove-item {
        background: $delete-btn-bg;
        color: $delete-btn-text;
        border: none;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
        font-size: 0.9rem;
        
        &:hover {
          background: $delete-btn-hover;
        }
      }
    }
  }
  
  .cart-summary {
    margin-top: 2rem;
    padding: 2rem;
    background: $cart-item-bg;
    border-radius: 1rem;
    text-align: right;
    
    .total-amount {
      color: $cart-header-text;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .tax-info {
      color: $empty-cart-text;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
  
  .buyNow {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    
    button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
      
      &#confirm {
        background: $confirm-btn-bg;
        color: $confirm-btn-text;
        
        &:hover {
          background: $confirm-btn-hover;
        }
      }
      
      &#deleteAll {
        background: $delete-btn-bg;
        color: $delete-btn-text;
        
        &:hover {
          background: $delete-btn-hover;
        }
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
  
  .empty-cart {
    text-align: center;
    padding: 4rem 2rem;
    
    h2 {
      color: $empty-cart-text;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      color: $empty-cart-text;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    
    .continue-shopping {
      background: $confirm-btn-bg;
      color: $confirm-btn-text;
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      
      &:hover {
        background: $confirm-btn-hover;
      }
    }
  }
}
```

## TypeScript Component Logic

### 1. Cart Interfaces
```typescript
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  subtotal: number;
}

interface CartSummary {
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
}
```

### 2. Cart Component Implementation
```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartSummary: CartSummary = {
    itemCount: 0,
    subtotal: 0,
    tax: 0,
    total: 0
  };
  
  isLoading = true;
  isEmpty = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCartItems();
    this.calculateSummary();
  }

  loadCartItems() {
    // Load cart data from localStorage (matching original implementation)
    const allDataArray = localStorage.getItem('popDataArray');
    
    if (allDataArray) {
      const popDataArray = JSON.parse(allDataArray);
      
      this.cartItems = popDataArray.map((item: any) => ({
        id: item.id || Date.now() + Math.random(),
        title: item.title,
        price: parseFloat(item.price),
        quantity: parseInt(item.numberOfItems),
        image: item.image || '',
        subtotal: parseFloat(item.subPrice)
      }));
      
      this.isEmpty = this.cartItems.length === 0;
    } else {
      this.isEmpty = true;
    }
    
    this.isLoading = false;
  }

  updateQuantity(itemId: number, newQuantity: number) {
    if (newQuantity <= 0) {
      this.removeItem(itemId);
      return;
    }
    
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity = newQuantity;
      item.subtotal = item.price * newQuantity;
      this.calculateSummary();
      this.saveCart();
    }
  }

  increaseQuantity(itemId: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      this.updateQuantity(itemId, item.quantity + 1);
    }
  }

  decreaseQuantity(itemId: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      this.updateQuantity(itemId, item.quantity - 1);
    }
  }

  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.isEmpty = this.cartItems.length === 0;
    this.calculateSummary();
    this.saveCart();
  }

  deleteAllItems() {
    if (confirm('Are you sure you want to remove all items from your cart?')) {
      this.cartItems = [];
      this.isEmpty = true;
      this.calculateSummary();
      localStorage.removeItem('popDataArray');
    }
  }

  confirmOrder() {
    if (this.cartItems.length === 0) return;
    
    // Store order data for success page
    const orderData = {
      items: this.cartItems,
      summary: this.cartSummary,
      orderDate: new Date().toISOString(),
      orderId: 'ORD-' + Date.now()
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Clear cart
    this.deleteAllItems();
    
    // Navigate to success page
    this.router.navigate(['/success']);
  }

  continueShopping() {
    this.router.navigate(['/items']);
  }

  private calculateSummary() {
    this.cartSummary.itemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartSummary.subtotal = this.cartItems.reduce((total, item) => total + item.subtotal, 0);
    this.cartSummary.tax = this.cartSummary.subtotal * 0.1; // 10% tax
    this.cartSummary.total = this.cartSummary.subtotal + this.cartSummary.tax;
  }

  private saveCart() {
    // Convert back to original format for compatibility
    const popDataArray = this.cartItems.map(item => ({
      title: item.title,
      price: item.price.toString(),
      numberOfItems: item.quantity.toString(),
      subPrice: item.subtotal.toString(),
      image: item.image
    }));
    
    localStorage.setItem('popDataArray', JSON.stringify(popDataArray));
  }
}
```

### 3. Cart Service
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  private cartCountSubject = new BehaviorSubject<number>(0);
  public cartCount$ = this.cartCountSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.subtotal = existingItem.price * existingItem.quantity;
    } else {
      currentItems.push(item);
    }
    
    this.updateCart(currentItems);
  }

  removeFromCart(itemId: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== itemId);
    this.updateCart(updatedItems);
  }

  updateQuantity(itemId: number, quantity: number) {
    const currentItems = this.cartItemsSubject.value;
    const item = currentItems.find(item => item.id === itemId);
    
    if (item) {
      item.quantity = quantity;
      item.subtotal = item.price * quantity;
      this.updateCart(currentItems);
    }
  }

  clearCart() {
    this.updateCart([]);
  }

  private updateCart(items: CartItem[]) {
    this.cartItemsSubject.next(items);
    this.cartCountSubject.next(items.reduce((total, item) => total + item.quantity, 0));
    this.saveCart(items);
  }

  private loadCart() {
    const cartData = localStorage.getItem('popDataArray');
    if (cartData) {
      const items = JSON.parse(cartData);
      // Convert from old format if needed
      this.cartItemsSubject.next(items);
      this.cartCountSubject.next(items.reduce((total: number, item: any) => total + parseInt(item.numberOfItems), 0));
    }
  }

  private saveCart(items: CartItem[]) {
    localStorage.setItem('popDataArray', JSON.stringify(items));
  }
}
```

## Tasks

### 1. Create Cart Component Structure
- Generate Angular component for cart page
- Implement cart items display table
- Add proper responsive design

### 2. Implement Cart Data Loading
- Load cart items from localStorage
- Handle empty cart state
- Display cart summary information

### 3. Add Quantity Management
- Implement increase/decrease quantity buttons
- Add item removal functionality
- Update totals automatically

### 4. Create Cart Actions
- Implement "Delete All" functionality
- Add confirmation dialog for destructive actions
- Create order confirmation process

### 5. Build Cart Service
- Create shared cart service for state management
- Implement cart persistence
- Add cart count observable for navigation

### 6. Add Checkout Flow
- Create order confirmation
- Store order data for success page
- Clear cart after successful order

## Expected Deliverables
- Cart component with full functionality
- Cart service for state management
- Quantity management controls
- Order confirmation process
- Empty cart state handling

## Acceptance Criteria
- [ ] Cart displays items correctly with proper formatting
- [ ] Quantity controls work properly
- [ ] Total calculations are accurate
- [ ] Delete all functionality works with confirmation
- [ ] Empty cart state displays appropriately
- [ ] Order confirmation process completes successfully
- [ ] All colors match the specified scheme
- [ ] Cart data persists between sessions