# Task 1: Project Setup and Shared Components

## Objective
Set up the Angular project foundation and create shared components that will be used across all pages.

## Colors to Use
Based on the current CSS variables, implement these colors in your Angular project:

```scss
// Primary Colors
$primary-red: #DB4444;          // Main brand color, buttons
$text-white: #ffffff;           // Primary text color
$text-secondary: rgb(174, 172, 172); // Secondary text

// Background Colors  
$bg-primary: #09031B;           // Main background
$bg-secondary: #344162;         // Secondary background
$bg-gradient: linear-gradient(to right, black, rgb(3, 3, 28), rgb(3, 3, 28), black);

// Accent Colors
$green-accent: #00953c;         // Success/confirmation
$star-color: #FFAD33;           // Rating stars
$star-inactive: #8D8D8D;        // Inactive stars
$blue-primary: #326994;         // Links/info
$blue-secondary: #5557d1;       // Secondary blue
$circle-color: #817D7D;         // UI elements
$sub-color: #e4d4f9;            // Subtle elements
$white: #fdfdfd;                // Pure white
```

## Tasks

### 1. Initialize Angular Project
- Create new Angular project with TypeScript
- Install required dependencies:
  - Angular Material or preferred UI library
  - Font Awesome for icons
  - Any animation libraries needed

### 2. Global Styles Setup
- Create `src/styles/variables.scss` with the color scheme above
- Import Google Fonts (Poppins)
- Set up global styles based on existing CSS:

```scss
// From the existing project
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
  font-size: 55.5%;
  background-image: $bg-gradient;
  overflow-x: hidden;
}
```

### 3. Shared Header Component
Create a navigation component with this structure from the existing HTML:

```html
<nav class="home-nav">
  <h2 class="i" style="color: #DB4444;">Tazpet</h2>
  <div class="links">
    <a href="index.html" class="i"> Home</a>
    <a href="contact.html" class="i"> Contact</a>
    <a href="about.html" class="i"> About</a>
    <a href="newUserOrNot.html" class="i"> Sign in</a>
  </div>
  <div class="input" style="display: none;">
    <input type="text" class="i" placeholder="What are you looking for ?">
    <i class="fa-solid fa-magnifying-glass search-icon"></i>
    <i class="fa-regular fa-heart heart"></i>
  </div>
  <h1 class="userName">Welcome</h1>
</nav>
```

**Key styling for navigation:**
- Brand color: `#DB4444` for "Tazpet" logo
- Text color: `#ffffff` for navigation links
- Hover effect: `border-bottom: 0.5rem solid white` and `color: #DB4444`

### 4. Shared Background Animation Component
Implement the bubble animation background that appears on all pages:

```html
<div class="container">
  <div class="bubbles">
    <span style="--i:11"></span>
    <span style="--i:12"></span>
    <span style="--i:24"></span>
    <!-- Add all bubble spans with different --i values -->
  </div>
</div>
```

### 5. Footer Component
Create a simple footer component:

```html
<footer class="footer">
  <div class="div"></div>
</footer>
```

With styling:
- Background: `black`
- Height: `15rem`

### 6. Routing Setup
- Configure Angular router for main pages:
  - `/` - Home page
  - `/about` - About page
  - `/contact` - Contact page
  - `/items` - Products page
  - `/cart` - Shopping cart
  - `/login` - Authentication

### 7. TypeScript Interfaces
Create interfaces for:
- User model
- Product model
- Cart item model
- Navigation menu item model

## Expected Deliverables
- Angular project initialized with TypeScript
- Global styles and color variables implemented
- Shared header, footer, and background components
- Routing configuration
- Basic TypeScript interfaces

## Acceptance Criteria
- [ ] Angular project runs without errors
- [ ] Global styles match the existing design
- [ ] Navigation component displays correctly with proper colors
- [ ] Background animation works as expected
- [ ] Routing between components functions properly