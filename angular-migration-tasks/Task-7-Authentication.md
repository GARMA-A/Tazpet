# Task 7: Authentication Components (Login/Signup)

## Objective
Create authentication components including login, signup, user management, and authentication routing with proper form validation and user state management.

## Colors to Use
Based on the existing authentication pages design:

```scss
// Authentication Form Colors
$auth-container-bg: rgba(20, 25, 42, 0.95);   // Form container background
$auth-form-bg: rgba(255, 255, 255, 0.1);      // Form background
$auth-input-bg: #f2f6ff;                      // Input field backgrounds
$auth-input-text: #000000;                    // Input text color
$auth-input-placeholder: rgba(0, 0, 0, 0.6);  // Placeholder text
$auth-input-border: transparent;              // Input borders
$auth-input-focus: #DB4444;                   // Input focus border

// Button Colors
$login-btn-bg: #DB4444;                       // Login button background
$login-btn-text: #ffffff;                     // Login button text
$login-btn-hover: #c73e3e;                    // Login button hover

$signup-btn-bg: #00953c;                      // Signup button background
$signup-btn-text: #ffffff;                    // Signup button text
$signup-btn-hover: #007a32;                   // Signup button hover

$logout-btn-bg: #326994;                      // Logout button background
$logout-btn-text: #ffffff;                    // Logout button text
$logout-btn-hover: #2a5a82;                   // Logout button hover

$delete-btn-bg: #DB4444;                      // Delete account button
$delete-btn-text: #ffffff;                    // Delete button text
$delete-btn-hover: #c73e3e;                   // Delete button hover

// Message Colors
$welcome-text: #ffffff;                       // Welcome message
$error-bg: rgba(219, 68, 68, 0.9);            // Error message background
$error-text: #ffffff;                         // Error message text
$success-bg: rgba(0, 149, 60, 0.9);           // Success message background
$success-text: #ffffff;                       // Success message text

// Form Title
$form-title: #ffffff;                         // Form titles
$brand-color: #DB4444;                        // Brand color in nav
```

## HTML Structure to Convert

### 1. User Management Hub (newUserOrNot.html)
Convert this user action center:

```html
<div class="loginCaontainer">
  <div class="loginFrame">
    <h1>Welcome!😄</h1>
    <div class="submitBtn" id="haveAccount"><button>Log In</button></div>
    <div class="submitBtn" id="logOut"><button class="out">Log Out</button></div> 
    <div class="submitBtn" id="createAcount"><button>Sign In</button></div>
    <div class="submitBtn" id="deleteAccount"><button>Delete Your Accounts</button></div>
  </div>
</div>
```

### 2. Login Form (login.html)
Convert this login structure:

```html
<div class="loginCaontainer">
  <div class="loginFrame">
    <form>
      <input type="text" placeholder="first name" class="inpt userName">
      <input type="text" placeholder="password" class="inpt password">
      <div class="submitBtn"><button>Log In</button></div>
    </form>
  </div>
</div>
```

### 3. Signup Form (newAcount.html)
Convert this registration structure:

```html
<div class="loginCaontainer">
  <div class="loginFrame">
    <form>
      <input type="text" placeholder="First Name" class="inpt firstName">
      <input type="text" placeholder="Second Name" class="inpt secondName">
      <input type="text" placeholder="password" class="inpt password">
      <input type="text" placeholder="Confirm password" class="inpt confirmPassword">
      <div class="submitBtn"><button>Create Account</button></div>
    </form>
  </div>
</div>
```

### 4. Error/Success Messages
Convert these notification structures:

```html
<!-- Error Messages -->
<div class="errorMsgContainer">
  <i class="fa-solid fa-x xicon xicon1"></i>
  <div class="errorMsg">
    <h1>First and second name required</h1>
    <h1>password consist of only numbers</h1>
    <h1>password must match</h1>
    <h1>confirm password</h1>
  </div>
</div>

<!-- Success Messages -->
<div class="CorrectContainer">
  <i class="fa-solid fa-x xicon xicon2"></i>
  <div class="CorrectMsg">
    <h1>Added Successfully</h1>
  </div>
</div>
```

## Key CSS Styles to Implement

### Authentication Container Styling
```scss
.loginCaontainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $auth-container-bg;
  
  .loginFrame {
    background: $auth-form-bg;
    border-radius: 1rem;
    padding: 3rem;
    width: 90%;
    max-width: 500px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    h1 {
      color: $form-title;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
    form {
      .inpt {
        width: 100%;
        background: $auth-input-bg;
        border: 2px solid $auth-input-border;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: $auth-input-text;
        transition: border-color 0.3s ease;
        
        &::placeholder {
          color: $auth-input-placeholder;
        }
        
        &:focus {
          outline: none;
          border-color: $auth-input-focus;
        }
        
        &.error {
          border-color: $delete-btn-bg;
        }
      }
    }
    
    .submitBtn {
      margin-bottom: 1rem;
      
      button {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        // Default login button styling
        background: $login-btn-bg;
        color: $login-btn-text;
        
        &:hover {
          background: $login-btn-hover;
        }
        
        // Signup button variant
        &.signup {
          background: $signup-btn-bg;
          
          &:hover {
            background: $signup-btn-hover;
          }
        }
        
        // Logout button variant
        &.out {
          background: $logout-btn-bg;
          
          &:hover {
            background: $logout-btn-hover;
          }
        }
        
        // Delete button variant
        &.delete {
          background: $delete-btn-bg;
          
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
  }
}
```

### Message Modal Styling
```scss
.errorMsgContainer, .CorrectContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  
  &.show {
    display: flex;
  }
  
  .xicon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: $error-text;
    font-size: 1.5rem;
    cursor: pointer;
  }
}

.errorMsgContainer {
  background: $error-bg;
  
  .errorMsg {
    text-align: center;
    padding: 2rem;
    
    h1 {
      color: $error-text;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
}

.CorrectContainer {
  background: $success-bg;
  
  .CorrectMsg {
    text-align: center;
    padding: 2rem;
    
    h1 {
      color: $success-text;
      font-size: 1.5rem;
    }
  }
}
```

## TypeScript Component Logic

### 1. Authentication Interfaces
```typescript
interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
}

interface LoginCredentials {
  firstName: string;
  password: string;
}

interface SignupData {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
  token?: string;
}
```

### 2. Authentication Service
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStateSubject = new BehaviorSubject<AuthState>({
    isAuthenticated: false,
    currentUser: null
  });
  
  public authState$ = this.authStateSubject.asObservable();

  constructor(private router: Router) {
    this.loadAuthState();
  }

  login(credentials: LoginCredentials): Observable<boolean> {
    return new Observable(observer => {
      // Get stored users
      const users = this.getStoredUsers();
      const user = users.find(u => 
        u.firstName === credentials.firstName && 
        u.password === credentials.password
      );
      
      if (user) {
        const authState: AuthState = {
          isAuthenticated: true,
          currentUser: user,
          token: this.generateToken()
        };
        
        this.authStateSubject.next(authState);
        this.saveAuthState(authState);
        localStorage.setItem('currentUserName', user.firstName);
        
        observer.next(true);
        observer.complete();
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }

  signup(userData: SignupData): Observable<boolean> {
    return new Observable(observer => {
      // Validate data
      if (!this.validateSignupData(userData)) {
        observer.next(false);
        observer.complete();
        return;
      }
      
      const users = this.getStoredUsers();
      
      // Check if user already exists
      const existingUser = users.find(u => u.firstName === userData.firstName);
      if (existingUser) {
        observer.next(false);
        observer.complete();
        return;
      }
      
      // Create new user
      const newUser: User = {
        id: this.generateId(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        createdAt: new Date()
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      observer.next(true);
      observer.complete();
    });
  }

  logout() {
    const authState: AuthState = {
      isAuthenticated: false,
      currentUser: null
    };
    
    this.authStateSubject.next(authState);
    localStorage.removeItem('authState');
    localStorage.removeItem('currentUserName');
    this.router.navigate(['/']);
  }

  deleteAccount(): Observable<boolean> {
    return new Observable(observer => {
      const currentState = this.authStateSubject.value;
      if (currentState.currentUser) {
        const users = this.getStoredUsers();
        const updatedUsers = users.filter(u => u.id !== currentState.currentUser!.id);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        this.logout();
        observer.next(true);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }

  private validateSignupData(data: SignupData): boolean {
    // First and last name required
    if (!data.firstName.trim() || !data.lastName.trim()) return false;
    
    // Password validation (only numbers in original)
    if (!/^\d+$/.test(data.password)) return false;
    
    // Password confirmation
    if (data.password !== data.confirmPassword) return false;
    
    return true;
  }

  private getStoredUsers(): User[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  private generateToken(): string {
    return 'token_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private generateId(): string {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private loadAuthState() {
    const authState = localStorage.getItem('authState');
    if (authState) {
      const state = JSON.parse(authState);
      this.authStateSubject.next(state);
    }
  }

  private saveAuthState(state: AuthState) {
    localStorage.setItem('authState', JSON.stringify(state));
  }
}
```

### 3. Login Component
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  showError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showError = false;
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/']);
          } else {
            this.showError = true;
            this.errorMessage = 'Invalid credentials';
          }
          this.isSubmitting = false;
        },
        error: () => {
          this.showError = true;
          this.errorMessage = 'Login failed';
          this.isSubmitting = false;
        }
      });
    }
  }

  closeError() {
    this.showError = false;
  }
}
```

### 4. Signup Component
```typescript
export class SignupComponent {
  signupForm: FormGroup;
  isSubmitting = false;
  showError = false;
  showSuccess = false;
  errorMessages: string[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showError = false;
      this.errorMessages = [];
      
      // Validate passwords match
      if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
        this.errorMessages.push('Passwords must match');
        this.showError = true;
        this.isSubmitting = false;
        return;
      }
      
      this.authService.signup(this.signupForm.value).subscribe({
        next: (success) => {
          if (success) {
            this.showSuccess = true;
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
            }, 2000);
          } else {
            this.errorMessages = [
              'First and second name required',
              'Password must consist of only numbers',
              'User already exists'
            ];
            this.showError = true;
          }
          this.isSubmitting = false;
        },
        error: () => {
          this.errorMessages = ['Signup failed'];
          this.showError = true;
          this.isSubmitting = false;
        }
      });
    }
  }

  closeError() {
    this.showError = false;
  }

  closeSuccess() {
    this.showSuccess = false;
  }
}
```

### 5. User Management Component
```typescript
export class UserManagementComponent implements OnInit {
  authState$ = this.authService.authState$;
  showDeleteConfirmation = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToSignup() {
    this.router.navigate(['/auth/signup']);
  }

  logout() {
    this.authService.logout();
  }

  confirmDeleteAccount() {
    this.showDeleteConfirmation = true;
  }

  deleteAccount() {
    this.authService.deleteAccount().subscribe({
      next: (success) => {
        if (success) {
          // Show success message and redirect
          this.router.navigate(['/']);
        }
      }
    });
  }

  cancelDelete() {
    this.showDeleteConfirmation = false;
  }
}
```

## Tasks

### 1. Create Authentication Module
- Generate auth module with routing
- Create login, signup, and user management components
- Set up authentication guards and interceptors

### 2. Implement Authentication Service
- Create user management service with localStorage
- Add form validation matching original requirements
- Handle authentication state management

### 3. Build Login Component
- Create reactive form with validation
- Implement login logic with error handling
- Add proper styling and user feedback

### 4. Build Signup Component
- Create registration form with validation
- Implement password confirmation and number-only validation
- Add success/error message handling

### 5. Create User Management Hub
- Build central auth management component
- Add logout and delete account functionality
- Implement proper confirmation dialogs

### 6. Add Authentication Guards
- Create route guards for protected pages
- Implement authentication interceptors
- Handle token management and session persistence

## Expected Deliverables
- Complete authentication module
- Login and signup components
- User management functionality
- Authentication service with state management
- Route guards and session handling

## Acceptance Criteria
- [ ] Login form works with proper validation
- [ ] Signup form creates accounts with validation
- [ ] User management hub displays correct options
- [ ] Authentication state persists across sessions
- [ ] Logout functionality works correctly
- [ ] Delete account feature works with confirmation
- [ ] All colors match the specified scheme
- [ ] Error and success messages display properly