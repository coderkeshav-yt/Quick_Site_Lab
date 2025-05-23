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
