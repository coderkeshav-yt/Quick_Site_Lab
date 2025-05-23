# Firebase Integration Guide for Launchory Website

This guide will walk you through the process of integrating Firebase with your Launchory Website to store form submissions in Firestore. I've included troubleshooting steps for common issues you might encounter.

## Prerequisites

- Node.js and npm installed
- Your Launchory Website codebase
- A Google account for Firebase

## Step 1: Install Firebase Properly

The first step is to make sure Firebase is installed correctly in your project:

```bash
# Navigate to your project directory
cd "E:\Launchory Website\Quick_Site_Lab\launchory-website"

# Install Firebase
npm install firebase --save

# If you encounter TypeScript errors, install Firebase types
npm install --save-dev @types/firebase
```

## Step 2: Configure Firebase

Create a Firebase configuration file at `src/firebase/config.js` (note: using .js instead of .ts to avoid TypeScript errors):

```javascript
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAumvJ2pmC8mB-VEvfoqdQwmk1Q44ChOQQ",
  authDomain: "quicksitelab-aa089.firebaseapp.com",
  projectId: "quicksitelab-aa089",
  storageBucket: "quicksitelab-aa089.firebasestorage.app",
  messagingSenderId: "1075717901627",
  appId: "1:1075717901627:web:aa387cbc06d633ec9fbb1e",
  measurementId: "G-8CK8BJ1MSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  // Dynamically import analytics to avoid SSR issues
  import('firebase/analytics').then((module) => {
    const { getAnalytics } = module;
    analytics = getAnalytics(app);
  }).catch(err => {
    console.error('Analytics failed to load:', err);
  });
}

export { db, analytics };
```

## Step 3: Create Firebase Services

Create a services file at `src/firebase/services.js`:

```javascript
// src/firebase/services.js
import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

/**
 * Submit contact form data to Firebase
 * @param {Object} formData - Contact form data
 * @returns {Promise} - Promise with submission result
 */
export const submitContactForm = (formData) => {
  const contactData = {
    ...formData,
    timestamp: new Date()
  };
  
  return addDoc(collection(db, 'contactSubmissions'), contactData);
};

/**
 * Submit get started form data to Firebase
 * @param {Object} formData - Get started form data
 * @returns {Promise} - Promise with submission result
 */
export const submitGetStartedForm = (formData) => {
  const projectData = {
    ...formData,
    timestamp: new Date()
  };
  
  return addDoc(collection(db, 'projectRequests'), projectData);
};
```

## Step 4: Integrate with Contact Form

Modify your ContactSection.tsx to use Firebase:

```jsx
// In your imports section
import { submitContactForm } from '../../firebase/services';

// Replace the handleSubmit function with:
const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');
  
  // Submit form data to Firebase
  submitContactForm({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    company: formData.company
  })
    .then(() => {
      // Handle successful submission
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    })
    .catch(error => {
      // Handle error
      setIsSubmitting(false);
      setSubmitError('There was an error submitting your message. Please try again.');
      console.error('Contact form submission error:', error);
    });
};
```

## Step 5: Integrate with Get Started Form

Modify your GetStartedForm.tsx to use Firebase:

```jsx
// In your imports section
import { submitGetStartedForm } from '../../firebase/services';

// Update the handleSubmit function to use Firebase:
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validate form
  const stepErrors = validateForm(formValues, currentStep);
  setFormErrors(stepErrors);
  
  // Mark all fields as touched
  const allTouched = {};
  Object.keys(formValues).forEach(key => {
    allTouched[key] = true;
  });
  setTouched(allTouched);
  
  // If there are no errors, submit form or go to next step
  if (Object.keys(stepErrors).length === 0) {
    if (currentStep === 3) {
      setIsSubmitting(true);
      setSubmitError('');
      
      // Submit form data to Firebase
      submitGetStartedForm({
        fullName: formValues.fullName,
        email: formValues.email,
        phone: formValues.phone,
        companyName: formValues.companyName,
        projectType: formValues.projectType,
        projectDescription: formValues.projectDescription,
        budget: formValues.budget,
        timeline: formValues.timeline,
        additionalInfo: formValues.additionalInfo
      })
        .then(() => {
          // Handle successful submission
          setIsSubmitting(false);
          setSubmitSuccess(true);
        })
        .catch(error => {
          // Handle error
          setIsSubmitting(false);
          setSubmitError('There was an error submitting your request. Please try again.');
          console.error('Get started form submission error:', error);
        });
    } else {
      nextStep();
    }
  }
};
```

## Step 6: Set Up Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "quicksitelab-aa089"
3. Click "Firestore Database" in the left sidebar
4. Click "Create database" if you haven't already
5. Choose "Start in production mode"
6. Select a location closest to your target audience
7. Click "Enable"

## Step 7: Create Collections for Form Data

1. In Firestore, click "Start collection"
2. Create two collections:
   - Name the first collection `contactSubmissions` (for Contact Form)
   - Name the second collection `projectRequests` (for Get Started Form)

## Step 8: Set Up Firebase Rules

1. In the Firebase Console, go to Firestore Database > Rules
2. Update the rules to secure your database:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow only write operations to your form collections
    match /contactSubmissions/{document} {
      allow write: if true;
      allow read: if false;
    }
    match /projectRequests/{document} {
      allow write: if true;
      allow read: if false;
    }
    // Deny access to all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Troubleshooting Common Issues

### 1. "Cannot find module 'firebase/app'" or similar errors

This usually means Firebase isn't properly installed. Run:

```bash
npm install firebase --save
```

### 2. TypeScript errors with Firebase

If you're getting TypeScript errors related to Firebase types, you have a few options:

#### Option A: Install Firebase types
```bash
npm install --save-dev @types/firebase
```

#### Option B: Use .js files instead of .ts
Rename your Firebase files from `.ts` to `.js` to avoid TypeScript errors.

#### Option C: Create declaration files
Create a `firebase.d.ts` file in your src directory:

```typescript
declare module 'firebase/app';
declare module 'firebase/firestore';
declare module 'firebase/analytics';
```

### 3. "Unexpected reserved word 'await'" errors

This error occurs when your JavaScript environment doesn't support async/await. Use promises with .then() instead:

```javascript
// Instead of:
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await submitContactForm(data);
    // success
  } catch (error) {
    // error
  }
};

// Use:
const handleSubmit = (e) => {
  e.preventDefault();
  submitContactForm(data)
    .then(() => {
      // success
    })
    .catch(error => {
      // error
    });
};
```

### 4. "Module not found: Error: Can't resolve 'firebase/firestore'"

This error can occur if:
- Firebase isn't installed properly
- You're trying to import from the wrong path
- There's a bundling issue

Try:
1. Reinstalling Firebase: `npm install firebase --save`
2. Checking your import paths
3. Restarting your development server

## Viewing Form Submissions

To view submitted form data:
1. Go to Firebase Console > Firestore Database
2. Navigate to either the `contactSubmissions` or `projectRequests` collection
3. Each document represents a form submission with all the fields you sent

## Next Steps

- Consider adding form validation before submission
- Set up Firebase Authentication if you need a secure admin area to view submissions
- Create a custom admin dashboard to view and manage form submissions
- Set up email notifications when new forms are submitted using Firebase Cloud Functions

---

For more information, refer to the [Firebase documentation](https://firebase.google.com/docs).
