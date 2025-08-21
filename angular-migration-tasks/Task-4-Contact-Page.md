# Task 4: Contact Page Component

## Objective
Create the Contact page component with a functional contact form, form validation, and success/error message handling.

## Colors to Use
Based on the existing contact page design:

```scss
// Contact Form Colors
$form-background: rgba(20, 25, 42, 0.9);  // Form container background
$input-background: #f2f6ff;               // Input field backgrounds
$input-text: #000000;                     // Input text color
$input-placeholder: rgba(0, 0, 0, 0.6);   // Placeholder text
$input-border: transparent;               // Input borders

// Button Colors
$submit-btn-bg: #DB4444;                  // Submit button background
$submit-btn-text: #ffffff;                // Submit button text
$submit-btn-hover: #c73e3e;               // Submit button hover state

// Message Colors
$success-bg: rgba(0, 149, 60, 0.9);       // Success message background
$error-bg: rgba(219, 68, 68, 0.9);        // Error message background
$message-text: #ffffff;                   // Message text color

// Icon Colors
$close-icon: #ffffff;                     // Close button color
```

## HTML Structure to Convert

### 1. Contact Form Structure
Convert this form layout:

```html
<section class="contact" id="contact">
  <div class="loginCaontainer">
    <div class="loginFrame">
      <form id="contact-form">
        <div class="twoInptFild">
          <input type="text" id="name" name="name" placeholder="Full name" class="inpt userName" required style="color: black;">
          <input type="email" id="email" name="email" placeholder="Email Address" class="inpt" required>
        </div>
        <div class="twoInptFild">
          <input type="text" id="phone" name="phone" class="inpt" placeholder="Phone Number" required>
          <input type="text" id="title" name="title" class="inpt" placeholder="The Title" required>
        </div>
        <textarea id="message" name="message" class="inpt" placeholder="Message" required></textarea>
        <div class="submitBtn"><button>Send</button></div>
      </form>
    </div>
  </div>
</section>
```

### 2. Success Message Modal
Convert this success notification:

```html
<div class="CorrectContainer">
  <i class="fa-solid fa-x xicon xicon2"></i>
  <div class="CorrectMsg">
    <h1>Send Successfully😄</h1>
  </div>
</div>
```

### 3. Error Message Modal
Convert this error notification:

```html
<div class="errorMsgContainer">
  <i class="fa-solid fa-x xicon xicon1"></i>
  <div class="errorMsg">
    <h1>Failed to send!😥</h1>
  </div>
</div>
```

## Key CSS Styles to Implement

### Form Container Styling
```scss
.loginCaontainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .loginFrame {
    background: $form-background;
    border-radius: 1rem;
    padding: 2rem;
    width: 90%;
    max-width: 600px;
    
    form {
      .twoInptFild {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        
        @media (max-width: 768px) {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
      
      .inpt {
        background-color: $input-background;
        border: 1px solid $input-border;
        border-radius: 0.5rem;
        padding: 1rem;
        font-size: 1rem;
        color: $input-text;
        width: 100%;
        
        &::placeholder {
          color: $input-placeholder;
        }
        
        &:focus {
          outline: none;
          border-color: $primary-red;
        }
      }
      
      textarea.inpt {
        min-height: 120px;
        resize: vertical;
        margin-bottom: 1rem;
      }
      
      .submitBtn {
        text-align: center;
        
        button {
          background-color: $submit-btn-bg;
          color: $submit-btn-text;
          border: none;
          border-radius: 0.5rem;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          
          &:hover {
            background-color: $submit-btn-hover;
          }
          
          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
```

### Message Modal Styling
```scss
.CorrectContainer, .errorMsgContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
  &.show {
    display: flex;
  }
  
  .xicon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: $close-icon;
    font-size: 1.5rem;
    cursor: pointer;
  }
}

.CorrectContainer {
  background-color: $success-bg;
  
  .CorrectMsg {
    text-align: center;
    
    h1 {
      color: $message-text;
      font-size: 2rem;
    }
  }
}

.errorMsgContainer {
  background-color: $error-bg;
  
  .errorMsg {
    text-align: center;
    
    h1 {
      color: $message-text;
      font-size: 2rem;
    }
  }
}
```

## TypeScript Component Logic

### 1. Contact Form Interface
```typescript
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}
```

### 2. Component Implementation
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-()]+$/)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    // Initialize component
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitForm(this.contactForm.value);
    } else {
      this.markFormGroupTouched();
    }
  }

  private submitForm(formData: ContactForm) {
    // Based on the original contact.js implementation
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd3Ov-G5GIaU_gxohd1XZAbfcMolmomUhzgKxvGMP53s6qCDw/formResponse';
    
    const formDataToSend = new URLSearchParams();
    formDataToSend.append('entry.1822134070', formData.name);
    formDataToSend.append('entry.836708183', formData.email);
    formDataToSend.append('entry.1739681311', formData.phone);
    formDataToSend.append('entry.978430069', formData.title);
    formDataToSend.append('entry.184655333', formData.message);

    fetch(googleFormUrl, {
      method: 'POST',
      body: formDataToSend,
      mode: 'no-cors'
    })
    .then(() => {
      this.showSuccessMessage = true;
      this.contactForm.reset();
    })
    .catch(() => {
      this.showErrorMessage = true;
    })
    .finally(() => {
      this.isSubmitting = false;
    });
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  closeSuccessMessage() {
    this.showSuccessMessage = false;
  }

  closeErrorMessage() {
    this.showErrorMessage = false;
  }

  // Getter methods for template validation
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get title() { return this.contactForm.get('title'); }
  get message() { return this.contactForm.get('message'); }
}
```

### 3. Form Validation Helper
```typescript
getFieldError(fieldName: string): string {
  const field = this.contactForm.get(fieldName);
  
  if (field?.errors && field.touched) {
    if (field.errors['required']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (field.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (field.errors['minlength']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is too short`;
    }
    if (field.errors['pattern']) {
      return 'Please enter a valid phone number';
    }
  }
  
  return '';
}
```

## Tasks

### 1. Create Contact Component Structure
- Generate Angular component for contact page
- Set up reactive forms with proper validation
- Import required Angular modules (ReactiveFormsModule)

### 2. Implement Contact Form
- Create form with proper form controls
- Add validation for all fields
- Implement proper error handling and display

### 3. Style the Form
- Apply the color scheme and styling from original design
- Ensure responsive design for mobile devices
- Add proper focus states and transitions

### 4. Add Success/Error Messaging
- Create modal components for success and error messages
- Implement proper show/hide functionality
- Add backdrop blur effect when modals are shown

### 5. Form Submission Logic
- Integrate with Google Forms (or alternative backend)
- Handle async submission with loading states
- Clear form after successful submission

### 6. Add Form Validation Feedback
- Display validation errors below each field
- Show field-specific error messages
- Prevent submission of invalid forms

## Expected Deliverables
- Contact component with reactive form
- Form validation with proper error messages
- Success and error modal components
- Form submission functionality
- Responsive design matching original

## Acceptance Criteria
- [ ] Contact form displays correctly with proper colors
- [ ] All form validation works as expected
- [ ] Success message shows after successful submission
- [ ] Error message shows if submission fails
- [ ] Form is responsive and accessible
- [ ] All colors match the specified scheme
- [ ] Form submission integrates with backend service