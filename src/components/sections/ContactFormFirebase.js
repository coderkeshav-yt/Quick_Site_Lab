// This is a helper file to integrate the Contact Form with Firebase
// Import this in your ContactSection.tsx file

import { submitContactForm } from '../../firebase/services';

/**
 * Submit contact form data to Firebase
 * @param {Object} formData - The form data to submit
 * @param {Function} setIsSubmitting - Function to set loading state
 * @param {Function} setSubmitSuccess - Function to set success state
 * @param {Function} setSubmitError - Function to set error state
 * @param {Function} resetForm - Function to reset the form
 */
export const submitContactFormToFirebase = (
  formData,
  setIsSubmitting,
  setSubmitSuccess,
  setSubmitError,
  resetForm
) => {
  setIsSubmitting(true);
  
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
      resetForm();
      
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
