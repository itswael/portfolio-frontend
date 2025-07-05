import React, { useState, useEffect } from 'react';
import { Email, Phone, LocationOn, Schedule, CheckCircle, Error } from '@mui/icons-material';
import { Alert, Snackbar, CircularProgress } from '@mui/material';
import emailService from '../services/emailService';
import contactConfig from '../data/contactConfig.json';

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });
    
    // UI state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
    const [statusMessage, setStatusMessage] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});

    // Check if EmailJS is properly configured
    useEffect(() => {
        if (!emailService.isConfigured()) {
            console.warn('EmailJS is not properly configured. Please check your environment variables.');
        }
    }, []);

    // Handle form input changes
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Clear field error when user starts typing
        if (fieldErrors[field]) {
            setFieldErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFieldErrors({});

        try {
            console.log('Submitting form with data:', {
                name: formData.name,
                email: formData.email,
                messageLength: formData.message.length
            });
            
            const result = await emailService.sendEmail(formData);
            
            if (result.success) {
                setSubmitStatus('success');
                setStatusMessage(result.message);
                setShowStatus(true);
                
                // Clear form on success
                setFormData({ email: '', name: '', message: '' });
            } else {
                setSubmitStatus('error');
                setStatusMessage(result.message);
                setShowStatus(true);
                
                // Show field-specific errors if available
                if (result.errors) {
                    setFieldErrors(result.errors);
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setStatusMessage('An unexpected error occurred. Please try again.');
            setShowStatus(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Check if form is valid
    const isFormValid = formData.email && formData.name && formData.message;

    const { contact, ui } = contactConfig;
    return (
        <div className="max-w-4xl h-160 mx-auto pt-10 pb-40">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{ui.headings.main}</h1>
                <p className="text-gray-600">{ui.headings.description}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Information Section */}
                <div className="md:w-1/2 space-y-6">
                    <ContactItem 
                        icon={<Email className="text-blue-500" />} 
                        title={ui.labels.email} 
                        content={contact.email} 
                    />
                    <ContactItem 
                        icon={<Phone className="text-blue-500" />} 
                        title={ui.labels.phone} 
                        content={contact.phone} 
                    />
                    <ContactItem 
                        icon={<LocationOn className="text-blue-500" />} 
                        title={ui.labels.address} 
                        content={contact.location} 
                    />
                    <ContactItem 
                        icon={<Schedule className="text-blue-500" />} 
                        title={ui.labels.workingHours} 
                        content={contact.workingHours} 
                    />
                </div>

                {/* Divider - Only visible on larger screens */}
                <div className="hidden md:block border-l border-gray-200"></div>

                {/* Contact Form Section */}
                <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold mb-6">{ui.headings.formTitle}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputField 
                            placeholder={ui.placeholders.email}
                            type="email"
                            value={formData.email}
                            onChange={(value) => handleInputChange('email', value)}
                            error={fieldErrors.email}
                            required
                        />
                        <InputField 
                            label={ui.labels.name}
                            placeholder={ui.placeholders.name}
                            value={formData.name}
                            onChange={(value) => handleInputChange('name', value)}
                            error={fieldErrors.name}
                        />
                        <InputField
                            label={ui.labels.message}
                            placeholder={ui.placeholders.message}
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={(value) => handleInputChange('message', value)}
                            error={fieldErrors.message}
                            required
                        />
                        <button 
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                                !isFormValid || isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <CircularProgress size={20} color="inherit" />
                                    {ui.buttons.submitting}
                                </>
                            ) : (
                                ui.buttons.submit
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Status Snackbar */}
            <Snackbar
                open={showStatus}
                autoHideDuration={6000}
                onClose={() => setShowStatus(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setShowStatus(false)}
                    severity={submitStatus === 'success' ? 'success' : 'error'}
                    variant="filled"
                    icon={submitStatus === 'success' ? <CheckCircle /> : <Error />}
                    sx={{
                        '& .MuiAlert-message': {
                            fontSize: '1rem',
                            fontWeight: 500
                        }
                    }}
                >
                    {statusMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

// Reusable Contact Item Component
const ContactItem = ({ icon, title, content }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1">{icon}</div>
            <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-600">{content}</p>
            </div>
        </div>
    );
};

// Reusable Input Field Component
const InputField = ({ 
    label, 
    placeholder, 
    multiline = false, 
    rows = 1, 
    type = "text",
    value,
    onChange,
    error,
    required = false
}) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const inputClasses = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
        error 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
    }`;

    return (
        <div>
            {label && (
                <label className="block font-medium mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            {multiline ? (
                <textarea
                    className={inputClasses}
                    placeholder={placeholder}
                    rows={rows}
                    value={value || ''}
                    onChange={handleChange}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={handleChange}
                    required={required}
                />
            )}
            {error && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <Error fontSize="small" />
                    {error}
                </p>
            )}
        </div>
    );
};

export default Contact;