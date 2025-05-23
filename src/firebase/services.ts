import { db } from './firebaseConfig.js';
// No need to import Firestore methods as they're already available through the db object

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
      timestamp: new Date()
    };
    
    // Add document to 'contactSubmissions' collection
    const docRef = await db.collection('contactSubmissions').add(dataWithTimestamp);
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
      timestamp: new Date()
    };
    
    // Add document to 'projectRequests' collection
    const docRef = await db.collection('projectRequests').add(dataWithTimestamp);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting project request form:', error);
    throw error;
  }
};
