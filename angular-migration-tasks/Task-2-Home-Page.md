# Task 2: Home Page Component

## Objective
Create the main home page component that displays the product catalog, categories, and flash sales section.

## Colors to Use
Based on the existing home page design:

```scss
// Product Cards
$card-background: transparent;      // Product card background
$price-color: #ffffff;              // Regular price text
$discount-color: rgb(174, 172, 172); // Crossed-out price
$star-active: #FFAD33;              // Active star rating
$star-inactive: #8D8D8D;            // Inactive star rating

// Categories Section
$category-text: #ffffff;            // Category links
$category-hover: #DB4444;           // Hover state

// Flash Sales Timer
$timer-background: transparent;     // Timer section background
$timer-text: #ffffff;               // Timer display text
$timer-accent: #DB4444;             // Timer highlights
```

## HTML Structure to Convert

### 1. Category Sidebar
Convert this existing HTML structure:

```html
<div class="category">
  <div class="text">
    <h2 class="woman"><a href="items.html">Woman's fashion</a></h2>
    <h2 class="mens"><a href="items.html">men's fashion</a></h2>
    <h2 class="Electric"><a href="items.html">Electronics</a></h2>
    <h2 class="home"><a href="items.html">Home & lifestyle</a></h2>
    <h2 class="medicine"><a href="items.html">medicine</a></h2>
    <h2 class="Sports"><a href="items.html">Sports & Outdoor</a></h2>
    <h2 class="baby"><a href="items.html">Baby's & Toys</a></h2>
    <h2 class="groceries"><a href="items.html">Groceries & Pets</a></h2>
    <h2 class="Health"><a href="items.html">Health & Beauty</a></h2>
  </div>
  <div class="slider">
    <img src="https://gifdb.com/images/high/iphone-14-pro-498-x-280-gif-5qf87mwgq3iicrqx.gif" alt="img">
  </div>
</div>
```

### 2. Flash Sales Timer Section
Convert this time display component:

```html
<div class="today">
  <h1></h1>
  <h3>Today's</h3>
</div>
<div class="flash-sales f2">
  <div class="flashAndTime">
    <div class="flash">
      <h2>Time now</h2>
    </div>
    <div class="time">
      <h2 class="d hours">Hours</h2>
      <h2 class="d minuts">Minuts</h2>
      <h2 class="d seconds">seconds</h2>
      <h2 id="displayHours">23<span>:</span></h2>
      <h2 id="displayMinuts">19<span>:</span></h2>
      <h2 class="sec" id="displaySeconds">56</h2>
    </div>
  </div>
</div>
```

### 3. Product Cards Grid
Convert this product card structure:

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

## Key CSS Styles to Implement

### Product Card Styling
```scss
.item {
  // Product card container styles
  .box {
    // Image container
    img {
      // Product image styles
    }
  }
  
  .discription {
    .title {
      color: $text-white;
      // Title styling
    }
    
    .prices {
      .price {
        color: $text-white;
        // Regular price styling
      }
      
      .discount {
        color: $text-secondary;
        text-decoration: line-through;
        // Discount price styling
      }
    }
    
    .fa-star {
      color: $star-active;
      // Star rating styling
    }
  }
}
```

### Category Section Styling
```scss
.category {
  .text {
    h2 {
      a {
        color: $text-white;
        text-decoration: none;
        
        &:hover {
          color: $category-hover;
        }
      }
    }
  }
  
  .slider {
    img {
      // Hero image styling
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
  category: string;
}
```

### 2. Category Interface
```typescript
interface Category {
  id: number;
  name: string;
  link: string;
  className: string;
}
```

### 3. Timer Logic
Implement real-time clock display functionality that was in the original `main.js`:

```typescript
export class HomeComponent implements OnInit {
  currentTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    period: 'AM'
  };

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    this.currentTime = {
      hours: hours % 12 || 12,
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      period: hours >= 12 ? 'PM' : 'AM'
    };
  }
}
```

## Tasks

### 1. Create Home Component Structure
- Generate Angular component for home page
- Implement responsive layout matching original design
- Add proper TypeScript typings

### 2. Implement Category Navigation
- Create category list with proper routing
- Add hover effects matching original colors
- Make categories clickable and route to items page

### 3. Build Product Cards Component
- Create reusable product card component
- Implement star rating display
- Add price formatting with discount logic
- Ensure responsive design

### 4. Add Real-time Timer
- Implement clock functionality from original JavaScript
- Display current time in the format: Hours:Minutes:Seconds AM/PM
- Update every second

### 5. Integrate Hero Section
- Add the promotional image/GIF area
- Ensure proper responsive behavior

## Expected Deliverables
- Home component with full functionality
- Product card component
- Category navigation
- Real-time timer display
- Responsive design matching original

## Acceptance Criteria
- [ ] Home page displays correctly with proper colors
- [ ] Product cards show images, titles, prices, and ratings
- [ ] Timer updates in real-time
- [ ] Category navigation works and routes properly
- [ ] Page is responsive and matches original design
- [ ] All colors match the specified scheme