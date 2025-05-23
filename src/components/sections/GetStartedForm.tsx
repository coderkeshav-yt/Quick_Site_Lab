import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiCheck, FiMail, FiPhone, FiUser, FiFileText, FiCalendar, FiDollarSign, FiBriefcase, FiMonitor, FiAlertCircle, FiFlag, FiBarChart2, FiClock, FiLayers, FiLayout, FiSmartphone, FiCode, FiInfo, FiShoppingBag, FiMessageCircle, FiServer, FiCpu, FiArchive, FiDatabase, FiGlobe, FiHome, FiHelpCircle, FiPackage, FiGrid, FiUpload, FiSend, FiTarget, FiBook, FiPieChart } from 'react-icons/fi';

// Form values interface
interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  additionalInfo: string;
}

// Form error interface
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  projectType?: string;
  projectDescription?: string;
  budget?: string;
  timeline?: string;
  additionalInfo?: string;
}

// Form step animation variants
const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
};

// Progress step component
interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Step circle */}
            <div className="relative">
              <div 
                className={`w-10 h-10 flex items-center justify-center rounded-full ${index <= currentStep ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-indigo-100 text-indigo-300'}`}
              >
                {index < currentStep ? (
                  <FiCheck size={20} className="text-white" />
                ) : (
                  <span className="font-bold">{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-center text-xs font-medium text-indigo-900">
                {index === 0 && 'Your Info'}
                {index === 1 && 'Project'}
                {index === 2 && 'Details'}
                {index === 3 && 'Confirm'}
              </div>
            </div>
            
            {/* Connector line */}
            {index < totalSteps - 1 && (
              <div 
                className={`flex-grow h-0.5 mx-2 ${index < currentStep ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-indigo-100'}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Custom form input component with validation
interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
  textArea?: boolean;
  required?: boolean;
  maxLength?: number;
  pattern?: string;
  helperText?: string;
}

// Form Select component
interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  options: SelectOption[];
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  icon,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required,
  options
}) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-indigo-900 mb-1 font-['Rubik']">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-400">
          {icon}
        </div>
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`block w-full pl-10 pr-4 py-3 border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500'} rounded-xl shadow-sm bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all duration-200 font-['Rubik']`}
          required={required}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {touched && error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 font-['Rubik'] flex items-center"
        >
          <FiAlertCircle className="mr-1" /> {error}
        </motion.p>
      )}
    </div>
  );
};

// Form Textarea component
interface FormTextareaProps {
  label: string;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  maxLength?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  placeholder,
  icon,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required,
  maxLength
}) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-indigo-900 mb-1 font-['Rubik']">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute top-3 left-3 flex items-start pointer-events-none text-indigo-400">
          {icon}
        </div>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={4}
          maxLength={maxLength}
          className={`block w-full pl-10 pr-4 py-3 border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500'} rounded-xl shadow-sm bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all duration-200 font-['Rubik']`}
          required={required}
        />
      </div>
      {maxLength && (
        <div className="mt-1 text-xs text-indigo-500 text-right">
          {value.length}/{maxLength} characters
        </div>
      )}
      {touched && error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 font-['Rubik'] flex items-center"
        >
          <FiAlertCircle className="mr-1" /> {error}
        </motion.p>
      )}
    </div>
  );
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, type, name, placeholder, icon, value, onChange, onBlur, error, touched, 
  textArea = false, required = false, maxLength, pattern, helperText 
}) => {
  const hasError = touched && error;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <label 
          className="block text-indigo-900 font-medium font-['Rubik']"
          htmlFor={name}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {helperText && (
          <span className="text-xs text-indigo-500 font-['Rubik']">{helperText}</span>
        )}
      </div>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${hasError ? 'text-red-500' : 'text-indigo-600'}`}>
          {icon}
        </div>
        
        {textArea ? (
          <textarea
            id={name}
            name={name}
            className={`w-full px-12 py-4 bg-white border ${hasError ? 'border-red-500 ring-1 ring-red-500' : 'border-indigo-100'} rounded-xl shadow-sm focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500/20 focus:border-red-500' : 'focus:ring-purple-500/20 focus:border-purple-500'} transition duration-200 font-['Rubik'] placeholder:text-indigo-300`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            rows={4}
            required={required}
            maxLength={maxLength}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            className={`w-full px-12 py-4 bg-white border ${hasError ? 'border-red-500 ring-1 ring-red-500' : 'border-indigo-100'} rounded-xl shadow-sm focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500/20 focus:border-red-500' : 'focus:ring-purple-500/20 focus:border-purple-500'} transition duration-200 font-['Rubik'] placeholder:text-indigo-300`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            maxLength={maxLength}
            pattern={pattern}
          />
        )}
        
        {/* Error indicator */}
        {hasError && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
            <FiAlertCircle size={20} />
          </div>
        )}
      </div>
      
      {/* Error message */}
      {hasError && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 font-['Rubik']"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// Phone Input specifically for Indian numbers
interface PhoneInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label, name, value, onChange, onBlur, error, touched, required
}) => {
  const hasError = touched && error;
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Format phone number as user types (maintains +91 prefix)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    
    // If the input is empty, default to +91
    if (inputValue === '') {
      onChange('+91 ');
      return;
    }
    
    // Ensure the input always starts with +91
    if (!inputValue.startsWith('+91')) {
      // If user deletes the prefix, restore it
      if (inputValue.length < 4) {
        onChange('+91 ');
        return;
      }
      inputValue = '+91 ' + inputValue.replace(/^\+91\s?/, '');
    }
    
    // Format the number: +91 XXXXX XXXXX
    const digits = inputValue.replace(/\D/g, '');
    let formattedValue = '+91 ';
    
    // Add spaces after +91 prefix and in the middle of the number
    if (digits.length > 2) {
      const nationalNumber = digits.substring(2);
      if (nationalNumber.length <= 5) {
        formattedValue += nationalNumber;
      } else {
        formattedValue += `${nationalNumber.substring(0, 5)} ${nationalNumber.substring(5, 10)}`;
      }
    }
    
    onChange(formattedValue);
  };
  
  // Ensure the phone number always has the +91 prefix when focused
  const handleFocus = () => {
    if (!value) {
      onChange('+91 ');
    }
  };
  
  useEffect(() => {
    // Initialize with +91 prefix if empty
    if (!value) {
      onChange('+91 ');
    }
  }, [value, onChange]);
  
  return (
    <div className="mb-8">
      <label 
        className="block text-indigo-900 font-medium mb-2 font-['Rubik']"
        htmlFor={name}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${hasError ? 'text-red-500' : 'text-indigo-600'}`}>
          <FiPhone size={20} />
        </div>
        
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
          <FiFlag size={16} className="text-indigo-400" />
        </div>
        
        <input
          id={name}
          name={name}
          type="tel"
          ref={inputRef}
          className={`w-full pl-20 pr-12 py-4 bg-white border ${hasError ? 'border-red-500 ring-1 ring-red-500' : 'border-indigo-100'} rounded-xl shadow-sm focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500/20 focus:border-red-500' : 'focus:ring-purple-500/20 focus:border-purple-500'} transition duration-200 font-['Rubik'] placeholder:text-indigo-300`}
          value={value}
          onChange={handlePhoneChange}
          onFocus={handleFocus}
          onBlur={onBlur}
          placeholder="+91 98765 43210"
          required={required}
          maxLength={15}
        />
        
        {/* Error indicator */}
        {hasError && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
            <FiAlertCircle size={20} />
          </div>
        )}
      </div>
      
      {/* Error message */}
      {hasError && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 font-['Rubik']"
        >
          {error}
        </motion.p>
      )}
      
      {!hasError && (
        <p className="mt-1 text-xs text-indigo-500/70 font-['Rubik']">
          Enter a valid 10-digit Indian mobile number
        </p>
      )}
    </div>
  );
};

// Project type card component
interface ProjectTypeProps {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const ProjectTypeCard: React.FC<ProjectTypeProps> = ({ title, icon, selected, onClick }) => {
  return (
    <div 
      className={`border-2 rounded-xl p-5 text-center cursor-pointer transition-all duration-300 ${
        selected 
          ? 'border-purple-500 bg-purple-50 shadow-md shadow-purple-500/10' 
          : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/50'
      }`}
      onClick={onClick}
    >
      <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-3 ${
        selected ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-indigo-100 text-indigo-500'
      }`}>
        {icon}
      </div>
      <h3 className="font-['Rubik'] font-medium text-indigo-900">{title}</h3>
    </div>
  );
};

// Budget range component
interface BudgetRangeProps {
  selected: string;
  onChange: (value: string) => void;
}

const BudgetRange: React.FC<BudgetRangeProps> = ({ selected, onChange }) => {
  const budgetRanges = [
    { value: "$1,000 - $5,000", label: "$1K - $5K" },
    { value: "$5,000 - $10,000", label: "$5K - $10K" },
    { value: "$10,000 - $25,000", label: "$10K - $25K" },
    { value: "$25,000+", label: "$25K+" }
  ];
  
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {budgetRanges.map((range) => (
        <div 
          key={range.value}
          className={`px-5 py-3 rounded-full cursor-pointer transition-all duration-200 text-sm font-['Rubik'] font-medium ${
            selected === range.value 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20' 
              : 'bg-white border border-gray-200 text-indigo-800 hover:border-purple-300'
          }`}
          onClick={() => onChange(range.value)}
        >
          {range.label}
        </div>
      ))}
    </div>
  );
};

// Timeline options component
interface TimelineOptionsProps {
  selected: string;
  onChange: (value: string) => void;
}

const TimelineOptions: React.FC<TimelineOptionsProps> = ({ selected, onChange }) => {
  const timelineOptions = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Not sure yet"
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {timelineOptions.map((option) => (
        <div 
          key={option}
          className={`px-5 py-3 rounded-lg cursor-pointer transition-all duration-200 text-center font-['Rubik'] ${
            selected === option 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20' 
              : 'bg-white border border-gray-200 text-indigo-800 hover:border-purple-300'
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

// Simple validation function
const validateForm = (values: FormValues, step: number): FormErrors => {
  const errors: FormErrors = {};
  
  // Validate based on current step
  if (step === 0) {
    // Step 1: Basic Info
    if (!values.fullName) {
      errors.fullName = 'Full name is required';
    } else if (values.fullName.length < 2) {
      errors.fullName = 'Name is too short';
    }
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!values.phone.startsWith('+91') || values.phone.length < 10) {
      errors.phone = 'Please enter a valid Indian phone number (+91 format)';
    }
  }
  
  if (step === 1) {
    // Step 2: Project Details
    if (!values.projectType) {
      errors.projectType = 'Please select a project type';
    }
    
    if (!values.projectDescription) {
      errors.projectDescription = 'Project description is required';
    } else if (values.projectDescription.length < 20) {
      errors.projectDescription = 'Please provide more details about your project';
    }
  }
  
  if (step === 2) {
    // Step 3: Budget and Timeline
    if (!values.budget) {
      errors.budget = 'Please select a budget range';
    }
    
    if (!values.timeline) {
      errors.timeline = 'Please select an expected timeline';
    }
  }
  
  return errors;
};

// Main form component
const GetStartedForm: React.FC = () => {
  // State for managing form steps
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4; // Total number of steps in the form
  
  // State for form values and errors
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '+91 ',
    companyName: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  // Ref for form container to scroll to top on step change
  const formContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top when step changes
  useEffect(() => {
    if (formContainerRef.current) {
      formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Reset errors and touched state when changing steps
    setFormErrors({});
    setTouched({});
  }, [currentStep]);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  
  // Handle blur event for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    // Validate the field
    const stepErrors = validateForm(formValues, currentStep);
    setFormErrors(stepErrors);
  };
  
  // Handle form submission
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
      if (currentStep < totalSteps - 1) {
        // Go to next step if not on the last step
        setCurrentStep(currentStep + 1);
      } else {
        // Submit form if on the last step
        setIsSubmitting(true);
        
        try {
          // Simulate API call with a delay
          await new Promise(resolve => setTimeout(resolve, 1500));
          console.log('Form submitted successfully', formValues);
          
          // Move to the confirmation step
          setCurrentStep(3);
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  };
  
  // Handle project type selection
  const handleProjectTypeSelect = (type: string) => {
    setFormValues({
      ...formValues,
      projectType: type
    });
    // Update errors
    const newErrors = validateForm({
      ...formValues,
      projectType: type
    }, currentStep);
    setFormErrors(newErrors);
  };
  
  // Handle budget selection
  const handleBudgetSelect = (budget: string) => {
    setFormValues({
      ...formValues,
      budget: budget
    });
    // Update errors
    const newErrors = validateForm({
      ...formValues,
      budget: budget
    }, currentStep);
    setFormErrors(newErrors);
  };
  
  // Handle timeline selection
  const handleTimelineSelect = (timeline: string) => {
    setFormValues({
      ...formValues,
      timeline: timeline
    });
    // Update errors
    const newErrors = validateForm({
      ...formValues,
      timeline: timeline
    }, currentStep);
    setFormErrors(newErrors);
  };
  
  // Next step handler with validation
  const handleNextStep = () => {
    // Validate current step before proceeding
    const stepErrors = validateForm(formValues, currentStep);
    setFormErrors(stepErrors);
    
    // Mark all fields in this step as touched
    const fieldsTouched: Record<string, boolean> = { ...touched };
    Object.keys(formValues).forEach(key => {
      fieldsTouched[key] = true;
    });
    setTouched(fieldsTouched);
    
    // If no errors, proceed to next step
    if (Object.keys(stepErrors).length === 0) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  // Previous step handler
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={formContainerRef}>
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-100">
          <StepProgress currentStep={currentStep} totalSteps={totalSteps} />
          
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Basic Info */}
              {currentStep === 0 && (
                <motion.div
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center font-['Rubik']">Tell us about yourself</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput 
                      name="fullName"
                      label="Full Name" 
                      type="text" 
                      placeholder="John Doe"
                      icon={<FiUser size={20} />}
                      value={formValues.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fullName ? formErrors.fullName : undefined}
                      touched={touched.fullName}
                      required
                    />
                    
                    <FormInput 
                      name="email"
                      label="Email Address" 
                      type="email" 
                      placeholder="john@example.com"
                      icon={<FiMail size={20} />}
                      value={formValues.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email ? formErrors.email : undefined}
                      touched={touched.email}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput 
                      name="phone"
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      icon={<FiPhone size={20} />}
                      value={formValues.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone ? formErrors.phone : undefined}
                      touched={touched.phone}
                      required
                    />
                    
                    <FormInput 
                      name="companyName"
                      label="Company/Organization" 
                      type="text" 
                      placeholder="Your Company"
                      icon={<FiBriefcase size={20} />}
                      value={formValues.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.companyName ? formErrors.companyName : undefined}
                      touched={touched.companyName}
                    />
                  </div>
                  
                  <div className="pt-8 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 font-['Rubik']"
                      onClick={handleNextStep}
                    >
                      Next Step
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Project Details */}
              {currentStep === 1 && (
                <motion.div
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center font-['Rubik']">Tell us about your project</h2>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <FormSelect
                      name="projectType"
                      label="Project Type"
                      icon={<FiLayout size={20} />}
                      value={formValues.projectType}
                      onChange={(value) => {
                        setFormValues(prev => ({
                          ...prev,
                          projectType: value
                        }));
                      }}
                      onBlur={() => handleBlur({ target: { name: 'projectType' } } as React.FocusEvent<HTMLSelectElement>)}
                      error={touched.projectType ? formErrors.projectType : undefined}
                      touched={touched.projectType}
                      options={[
                        { value: 'website-design', label: 'Website Design' },
                        { value: 'website-development', label: 'Website Development' },
                        { value: 'mobile-app', label: 'Mobile App Development' },
                        { value: 'ecommerce', label: 'E-Commerce Solution' },
                        { value: 'branding', label: 'Branding & Identity' },
                        { value: 'other', label: 'Other' }
                      ]}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <FormTextarea
                      name="projectDescription"
                      label="Project Description"
                      placeholder="Please describe your project in detail..."
                      icon={<FiFileText size={20} />}
                      value={formValues.projectDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.projectDescription ? formErrors.projectDescription : undefined}
                      touched={touched.projectDescription}
                      required
                    />
                  </div>
                  
                  <div className="pt-8 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-indigo-700 bg-white hover:bg-gray-50 shadow-sm transition-all duration-300 font-['Rubik']"
                      onClick={handlePrevStep}
                    >
                      <FiArrowLeft className="mr-2" />
                      Previous
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 font-['Rubik']"
                      onClick={handleNextStep}
                    >
                      Next Step
                      <FiArrowRight className="ml-2" />
                    </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 3: Budget and Timeline */}
            {currentStep === 2 && (
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center font-['Rubik']">Budget & Timeline</h2>
                
                <div className="mb-8">
                  <label className="block text-indigo-900 font-medium mb-4 font-['Rubik']">What's your estimated budget?</label>
                  <BudgetRange selected={formValues.budget} onChange={(value) => handleBudgetSelect(value)} />
                  {touched.budget && formErrors.budget && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 font-['Rubik']"
                    >
                      {String(formErrors.budget)}
                    </motion.p>
                  )}
                </div>
                
                <div className="mb-8">
                  <label className="block text-indigo-900 font-medium mb-4 font-['Rubik']">What's your expected timeline?</label>
                  <TimelineOptions selected={formValues.timeline} onChange={(value) => handleTimelineSelect(value)} />
                  {touched.timeline && formErrors.timeline && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 font-['Rubik']"
                    >
                      {String(formErrors.timeline)}
                    </motion.p>
                  )}
                </div>
                
                <FormInput 
                  name="additionalInfo"
                  label="Additional Information" 
                  type="text" 
                  placeholder="Anything else you'd like us to know?"  
                  icon={<FiFileText size={20} />}
                  value={formValues.additionalInfo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.additionalInfo ? String(formErrors.additionalInfo || '') : undefined}
                  touched={touched.additionalInfo}
                  textArea
                />
                
                <div className="pt-8 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border-2 border-indigo-500/30 text-base font-medium rounded-xl text-indigo-700 bg-transparent hover:bg-indigo-50 hover:border-indigo-500/50 transition-all duration-300 font-['Rubik']"
                    onClick={handlePrevStep}
                  >
                    Back
                  </button>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 font-['Rubik']"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit
                        <FiArrowRight className="ml-2" />
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Confirmation */}
            {currentStep === 3 && (
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8 text-center"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck size={40} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-indigo-900 font-['Rubik']">Thank You!</h2>
                  <p className="text-indigo-700 mt-2">We've received your information and will contact you shortly.</p>
                </div>
                
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-lg font-bold text-indigo-900 mb-4 font-['Rubik']">Your Request Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-indigo-400">Name</p>
                      <p className="font-medium text-indigo-900">{formValues.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-indigo-400">Email</p>
                      <p className="font-medium text-indigo-900">{formValues.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-indigo-400">Phone</p>
                      <p className="font-medium text-indigo-900">{formValues.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-indigo-400">Company</p>
                      <p className="font-medium text-indigo-900">{formValues.companyName || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-indigo-400">Project Type</p>
                    <p className="font-medium text-indigo-900">{formValues.projectType}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-indigo-400">Project Description</p>
                    <p className="font-medium text-indigo-900">{formValues.projectDescription}</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-xl max-w-lg mx-auto">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 font-['Rubik']">What Happens Next?</h3>
                  <ol className="text-left space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>Our team will review your requirements</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>We'll contact you to schedule an initial consultation</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>We'll provide a proposal and timeline for your project</div>
                    </li>
                  </ol>
                </div>
                
                <div className="pt-6">
                  <a 
                    href="/" 
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 font-['Rubik']"
                  >
                    Return to Home
                  </a>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedForm;
