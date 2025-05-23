# Firebase Integration Guide for Launchory Website Forms

This guide will walk you through the process of integrating Firebase with your website's contact and get started forms to store incoming messages in Firestore.

## Prerequisites

- A Google account
- Your Launchory Website codebase

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "Launchory Website")
4. Follow the setup wizard (you can disable Google Analytics if not needed)
5. Click "Create project"

## Step 2: Set Up Firestore Database

1. In your Firebase project dashboard, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" (recommended for live websites)
4. Select a location closest to your target audience
5. Click "Enable"

## Step 3: Create Collections for Form Data

1. In Firestore, click "Start collection"
2. Create two collections:
   - Name the first collection `contactSubmissions` (for Contact Form)
   - Name the second collection `projectRequests` (for Get Started Form)
   - You don't need to add documents manually; they'll be created when forms are submitted

## Step 4: Register Your Web App

1. In your Firebase project dashboard, click the web icon (</>) to add a web app
2. Enter a nickname for your app (e.g., "Launchory Website")
3. Check "Also set up Firebase Hosting" if you plan to use Firebase Hosting
4. Click "Register app"
5. Firebase will generate configuration code. Copy this configuration as you'll need it in the next step

## Step 5: Install Firebase in Your Project

1. Open your terminal and navigate to your project directory
2. Run the following command to install Firebase:

```bash
npm install firebase
```

## Step 6: Create Firebase Configuration

1. Create a `firebase` directory in your `src` folder:

```bash
mkdir src/firebase
```

2. Create a `config.ts` file in the `firebase` directory:

```typescript
// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Replace with your own Firebase config values from Step 4
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

3. Create a `services.ts` file in the `firebase` directory:

```typescript
// src/firebase/services.ts
import { db } from './config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Interface for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  company?: string;
  timestamp?: any;
}

// Interface for get started form data
export interface GetStartedFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
  additionalInfo?: string;
  timestamp?: any;
}

/**
 * Submit contact form data to Firebase
 * @param formData Contact form data
 * @returns Promise with submission result
 */
export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  try {
    // Add timestamp to the data
    const dataWithTimestamp = {
      ...formData,
      timestamp: serverTimestamp()
    };
    
    // Add document to 'contactSubmissions' collection
    const docRef = await addDoc(collection(db, 'contactSubmissions'), dataWithTimestamp);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Submit get started form data to Firebase
 * @param formData Get started form data
 * @returns Promise with submission result
 */
export const submitGetStartedForm = async (formData: GetStartedFormData): Promise<string> => {
  try {
    // Add timestamp to the data
    const dataWithTimestamp = {
      ...formData,
      timestamp: serverTimestamp()
    };
    
    // Add document to 'projectRequests' collection
    const docRef = await addDoc(collection(db, 'projectRequests'), dataWithTimestamp);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting project request form:', error);
    throw error;
  }
};
```

## Step 7: Update Contact Form Component

Modify your ContactSection.tsx file to integrate with Firebase:

```typescript
// In your imports section, add:
import { submitContactForm } from '../../firebase/services';

// Replace the handleSubmit function with:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');
  
  try {
    // Submit form data to Firebase
    await submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      company: formData.company
    });
    
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
  } catch (error) {
    // Handle error
    setIsSubmitting(false);
    setSubmitError('There was an error submitting your message. Please try again.');
    console.error('Contact form submission error:', error);
  }
};
```

## Step 8: Update Get Started Form Component

Modify your GetStartedForm.tsx file to integrate with Firebase:

```typescript
// In your imports section, add:
import { submitGetStartedForm } from '../../firebase/services';

// Add a submitError state:
const [submitError, setSubmitError] = useState('');

// Update the handleSubmit function to use Firebase:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate form
  const stepErrors = validateForm(formValues, currentStep);
  setFormErrors(stepErrors);
  
  // Mark all fields as touched
  const allTouched: Record<string, boolean> = {};
  Object.keys(formValues).forEach(key => {
    allTouched[key] = true;
  });
  setTouched(allTouched);
  
  // If there are no errors, submit form or go to next step
  if (Object.keys(stepErrors).length === 0) {
    if (currentStep === 3) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // Submit form data to Firebase
        await submitGetStartedForm({
          fullName: formValues.fullName,
          email: formValues.email,
          phone: formValues.phone,
          companyName: formValues.companyName,
          projectType: formValues.projectType,
          projectDescription: formValues.projectDescription,
          budget: formValues.budget,
          timeline: formValues.timeline,
          additionalInfo: formValues.additionalInfo
        });
        
        // Handle successful submission
        setIsSubmitting(false);
        setSubmitSuccess(true);
      } catch (error) {
        // Handle error
        setIsSubmitting(false);
        setSubmitError('There was an error submitting your request. Please try again.');
        console.error('Get started form submission error:', error);
      }
    } else {
      nextStep();
    }
  }
};
```

## Step 9: Add Error Display to Forms

Make sure to display any submission errors to users. Add this to both form components:

```jsx
{submitError && (
  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-start">
    <FiAlertCircle className="mr-2 mt-0.5" />
    <span>{submitError}</span>
  </div>
)}
```

## Step 10: Test Your Integration

1. Start your development server:
```bash
npm start
```

2. Fill out and submit both forms to test the Firebase integration
3. Check your Firestore Database in the Firebase Console to see if the data is being stored correctly

## Step 11: Set Up Firebase Rules (Important for Security)

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

These rules allow anyone to submit forms but prevent unauthorized reading of the submitted data. For production, you might want to add more restrictions.

## Step 12: Deploy to Production

When you're ready to deploy your website with Firebase integration:

1. Update your Firebase configuration with the correct values
2. Build your project:
```bash
npm run build
```
3. Deploy to your hosting provider

## Troubleshooting

### Common Issues:

1. **Firebase module not found**: Make sure you've installed Firebase with `npm install firebase`

2. **Type errors**: If you get TypeScript errors related to Firebase types, install the types:
```bash
npm install -D @types/firebase
```

3. **Firestore write errors**: Check your Firebase rules to ensure write permissions are set correctly

4. **CORS issues**: If you're getting CORS errors, make sure your Firebase project settings allow your domain

### Viewing Form Submissions:

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
