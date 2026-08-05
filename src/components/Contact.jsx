import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Alert, Snackbar, CircularProgress } from '@mui/material';
import emailService from '../services/emailService';
import contactConfig from '../data/contactConfig.json';
import { componentStyles, cn } from '../theme';

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
        <div id="contact" className={componentStyles.layout.section}>
            <div className={componentStyles.layout.container}>
                <div className="flex items-baseline gap-3 mb-10">
                    <span className={componentStyles.eyebrowIndex}>05</span>
                    <h2 className={componentStyles.heading.h2}>{ui.headings.main}</h2>
                </div>
                <p className={cn(componentStyles.text.bodyLarge, "mb-8 max-w-2xl")}>{ui.headings.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    {/* Contact Information Section */}
                    <div className={cn(componentStyles.tile, "lg:col-span-2 flex flex-col gap-5")}>
                        <ContactItem icon={<Mail size={17} className={componentStyles.icon.primary} />} title={ui.labels.email} content={contact.email} />
                        <ContactItem icon={<Phone size={17} className={componentStyles.icon.primary} />} title={ui.labels.phone} content={contact.phone} />
                        <ContactItem icon={<MapPin size={17} className={componentStyles.icon.primary} />} title={ui.labels.address} content={contact.location} />
                        <ContactItem icon={<Clock size={17} className={componentStyles.icon.primary} />} title={ui.labels.workingHours} content={contact.workingHours} />
                    </div>

                    {/* Contact Form Section */}
                    <div className={cn(componentStyles.tile, "lg:col-span-3")}>
                        <span className={cn(componentStyles.kicker, "block mb-4")}>{ui.headings.formTitle}</span>
                        <form onSubmit={handleSubmit} className="space-y-5">
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
                                className={cn(
                                    "w-full py-3 px-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                                    !isFormValid || isSubmitting
                                        ? 'bg-slate-800 cursor-not-allowed text-slate-500'
                                        : componentStyles.button.primary
                                )}
                            >
                                {isSubmitting ? (
                                    <>
                                        <CircularProgress size={18} color="inherit" />
                                        {ui.buttons.submitting}
                                    </>
                                ) : (
                                    ui.buttons.submit
                                )}
                            </button>
                        </form>
                    </div>
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
                    icon={submitStatus === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
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
        <div className="flex items-start gap-3">
            <div className="mt-0.5">{icon}</div>
            <div>
                <h3 className="text-sm font-medium text-slate-200">{title}</h3>
                <p className={componentStyles.text.muted}>{content}</p>
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

    const inputClasses = cn(
        componentStyles.form.input,
        error
            ? 'border-red-500 focus:ring-red-500'
            : ''
    );

    return (
        <div>
            {label && (
                <label className={componentStyles.form.label}>
                    {label}
                    {required && <span className="text-red-400 ml-1">*</span>}
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
                <p className={cn(componentStyles.form.error, "flex items-center gap-1")}>
                    <AlertCircle size={13} />
                    {error}
                </p>
            )}
        </div>
    );
};

export default Contact;
