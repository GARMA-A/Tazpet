# Task 3: About Page Component

## Objective
Create the About page component that showcases the company story, statistics, team members, and service features.

## Colors to Use
Based on the existing about page design:

```scss
// About Page Specific Colors
$story-text: #ffffff;               // Main story text
$story-background: transparent;     // Story section background

// Statistics Circles
$circle-outer: #817D7D;             // Outer circle color
$circle-inner: rgba(255, 255, 255, 0.2); // Inner circle with transparency
$stats-number: #ffffff;             // Statistics numbers
$stats-text: rgb(174, 172, 172);    // Statistics description text

// Team Section
$team-card-bg: transparent;         // Team member card background
$team-name: #ffffff;                // Team member names
$team-title: rgb(174, 172, 172);    // Team member job titles

// Service Features
$service-title: #ffffff;            // Service feature titles
$service-desc: rgb(174, 172, 172);  // Service descriptions
```

## HTML Structure to Convert

### 1. Our Story Section
Convert this content section:

```html
<div class="ourstory">
  <div class="p"></div>
  <div class="text">
    <h1>Our Story</h1>
    
    <p class="p1">At TASPET, we are passionate about crafting authentic and unique products that reflect our commitment to
    sustainability and quality. Our journey began with a simple idea: to create handcrafted goods that celebrate artistry
    and creativity while making a positive impact on our community and the planet. Inspired by nature and driven by
    innovation, we curate a thoughtful collection of artisanal pieces that are both timeless and contemporary. From
    ethically sourced materials to eco-friendly practices, every aspect of our process is guided by our values of
    authenticity, transparency, and empathy.</p>

    <p class="p2">We believe in the power of storytelling to connect people and inspire change,
    and it is this belief that drives us to create meaningful experiences for our customers. Join us on our journey as we
    continue to explore new horizons, push boundaries, and redefine what it means to shop consciously and ethically</p>
  </div>
  
  <img src="imgs/Tazpet.jpg" alt="img">
  <div class="p"></div>
</div>
```

### 2. Statistics Circles Section
Convert this statistics display:

```html
<div class="Circles">
  <div class="one">
    <div class="circle1 c1out cout">
      <div class="circle2 c2in cin"></div>
    </div>
    <h2 class="txtc1">10.5K</h2>
    <p>Sallers active in our site</p>
  </div>
  
  <div class="two">
    <div class="circle3 c2out cout">
      <div class="circle3 c3in cin"></div>
    </div>
    <h2 class="txtc2">45.5K</h2>
    <p>Customer active in our site</p>
  </div>
  
  <div class="three">
    <div class="circle4 c4out cout">
      <div class="circle4 c4in cin"></div>
    </div>
    <h2 class="txtc3">25K</h2>
    <p>Anual gross sale in our site</p>
  </div>
</div>
```

### 3. Team Members Section
Convert this team showcase:

```html
<div class="items explore">
  <div class="d"></div>
  
  <div class="item">
    <img src="imgs/eyeMe.jpg" alt="img">
    <div class="discription">
      <h3 class="title">Garma</h3>
      <p></p>
    </div>
  </div>

  <div class="item i3">
    <img src="imgs/lostMe.jpg" alt="img">
    <div class="discription">
      <h3 class="title">Girgis Emad</h3>
      <p>Front End Engineer</p>
    </div>
  </div>

  <div class="item i4">
    <img src="imgs/blackMe.jpg" alt="img">
    <div class="discription">
      <h3 class="title">Garma</h3>
      <p></p>
    </div>
  </div>
  
  <div class="d"></div>
</div>
```

### 4. Service Features Section
Convert this service highlights section:

```html
<div class="Circles move">
  <div class="one">
    <div class="circle1 c1out cout">
      <div class="circle2 c2in cin"></div>
    </div>
    <h2 class="txtc1 fontbig">FREE AND FAST DELIVERY</h2>
    <p class="fontsmall">Free delivery for all orders over $140</p>
  </div>

  <div class="two">
    <div class="circle3 c2out cout">
      <div class="circle3 c3in cin"></div>
    </div>
    <h2 class="txtc2 fontbig">24/7 CUSTOMER SERVICE</h2>
    <p class="fontsmall">Friendly 24/7 customer support</p>
  </div>

  <div class="three">
    <div class="circle4 c4out cout">
      <div class="circle4 c4in cin"></div>
    </div>
    <h2 class="txtc3 fontbig">MONEY BACK GUARANTEE</h2>
    <p class="fontsmall">We return money within 30 days</p>
  </div>
</div>
```

## Key CSS Styles to Implement

### Story Section Styling
```scss
.ourstory {
  .text {
    h1 {
      color: $story-text;
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    
    p {
      color: $story-text;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      
      &.p1 {
        // First paragraph specific styling
      }
      
      &.p2 {
        // Second paragraph specific styling
      }
    }
  }
  
  img {
    // Company image styling
    border-radius: 1rem;
    max-width: 100%;
  }
}
```

### Statistics Circles Styling
```scss
.Circles {
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .one, .two, .three {
    text-align: center;
    
    .cout {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background-color: $circle-outer;
      border-radius: 50%;
      margin: 0 auto 1rem;
      
      .cin {
        width: 2rem;
        height: 2rem;
        background-color: $circle-inner;
        border-radius: 50%;
      }
    }
    
    h2 {
      color: $stats-number;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: $stats-text;
      font-size: 1rem;
    }
  }
}
```

### Team Section Styling
```scss
.items.explore {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  
  .item {
    text-align: center;
    margin: 1rem;
    
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
    }
    
    .discription {
      .title {
        color: $team-name;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      
      p {
        color: $team-title;
        font-size: 1rem;
      }
    }
  }
}
```

## TypeScript Component Logic

### 1. Statistics Interface
```typescript
interface Statistic {
  id: number;
  value: string;
  label: string;
  circleClass: string;
}
```

### 2. Team Member Interface
```typescript
interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio?: string;
}
```

### 3. Service Feature Interface
```typescript
interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  iconClass: string;
}
```

### 4. Component Data
```typescript
export class AboutComponent implements OnInit {
  statistics: Statistic[] = [
    {
      id: 1,
      value: '10.5K',
      label: 'Sallers active in our site',
      circleClass: 'c1out'
    },
    {
      id: 2,
      value: '45.5K',
      label: 'Customer active in our site',
      circleClass: 'c2out'
    },
    {
      id: 3,
      value: '25K',
      label: 'Anual gross sale in our site',
      circleClass: 'c4out'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Garma',
      title: '',
      image: 'assets/imgs/eyeMe.jpg'
    },
    {
      id: 2,
      name: 'Girgis Emad',
      title: 'Front End Engineer',
      image: 'assets/imgs/lostMe.jpg'
    },
    {
      id: 3,
      name: 'Garma',
      title: '',
      image: 'assets/imgs/blackMe.jpg'
    }
  ];

  serviceFeatures: ServiceFeature[] = [
    {
      id: 1,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
      iconClass: 'delivery-icon'
    },
    {
      id: 2,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
      iconClass: 'support-icon'
    },
    {
      id: 3,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
      iconClass: 'guarantee-icon'
    }
  ];
}
```

## Tasks

### 1. Create About Component Structure
- Generate Angular component for about page
- Implement responsive layout matching original design
- Add proper TypeScript typings

### 2. Implement Story Section
- Create hero section with company story
- Add proper typography and spacing
- Ensure responsive image handling

### 3. Build Statistics Display
- Create circular statistics display
- Implement proper styling for circles
- Add animations if needed

### 4. Create Team Section
- Build team member cards
- Handle different image sizes appropriately
- Add hover effects if desired

### 5. Add Service Features
- Implement service highlights section
- Use appropriate icons (Font Awesome or custom)
- Ensure proper responsive layout

## Expected Deliverables
- About component with full functionality
- Responsive design matching original
- Proper TypeScript interfaces
- Clean, maintainable code structure

## Acceptance Criteria
- [ ] About page displays correctly with proper colors
- [ ] Story section is readable and well-formatted
- [ ] Statistics display with correct numbers and styling
- [ ] Team members section shows properly
- [ ] Service features are clearly visible
- [ ] Page is responsive and matches original design
- [ ] All colors match the specified scheme