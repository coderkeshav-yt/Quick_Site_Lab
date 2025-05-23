// This is a helper file to integrate the Get Started Form with Firebase
// Import this in your GetStartedForm.tsx file

import { submitGetStartedForm } from '../../firebase/services';

/**
 * Submit get started form data to Firebase
 * @param {Object} formValues - The form values to submit
 * @param {Function} setIsSubmitting - Function to set loading state
 * @param {Function} setSubmitSuccess - Function to set success state
 * @param {Function} setSubmitError - Function to set error state
 */
export const submitGetStartedFormToFirebase = (
  formValues,
  setIsSubmitting,
  setSubmitSuccess,
  setSubmitError
) => {
  setIsSubmitting(true);
  
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
};
