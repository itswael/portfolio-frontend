import emailjs from '@emailjs/browser';
import contactConfig from '../data/contactConfig.json';

class EmailService {
    constructor() {
        // Initialize EmailJS with public key
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        } else {
            console.error('EmailJS public key not found in environment variables');
        }
    }

    // Validate email format
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Sanitize input to prevent XSS
    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input.trim().replace(/[<>]/g, '');
    }

    // Validate form data
    validateFormData(formData) {
        const errors = {};
        const { validation } = contactConfig.ui;

        // Name validation
        if (!formData.name || formData.name.trim().length === 0) {
            errors.name = validation.nameRequired;
        } else if (formData.name.trim().length < 2) {
            errors.name = validation.nameMinLength;
        }

        // Email validation
        if (!formData.email || formData.email.trim().length === 0) {
            errors.email = validation.emailRequired;
        } else if (!this.isValidEmail(formData.email.trim())) {
            errors.email = validation.emailInvalid;
        }

        // Message validation
        if (!formData.message || formData.message.trim().length === 0) {
            errors.message = validation.messageRequired;
        } else if (formData.message.trim().length < 10) {
            errors.message = validation.messageMinLength;
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }

    // Send email via EmailJS
    async sendEmail(formData) {
        try {
            // Validate form data
            const validation = this.validateFormData(formData);
            if (!validation.isValid) {
                return {
                    success: false,
                    message: contactConfig.ui.messages.validationError,
                    errors: validation.errors
                };
            }

            // Get EmailJS configuration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            if (!serviceId || !templateId) {
                throw new Error('EmailJS configuration is missing');
            }

            // Sanitize inputs
            const sanitizedData = {
                from_name: this.sanitizeInput(formData.name),
                from_email: this.sanitizeInput(formData.email),
                message: this.sanitizeInput(formData.message),
                to_email: import.meta.env.VITE_CONTACT_EMAIL || contactConfig.contact.formSubmissionEmail
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                sanitizedData
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: contactConfig.ui.messages.success
                };
            } else {
                throw new Error('Failed to send email');
            }

        } catch (error) {
            console.error('Email service error:', error);

            // Handle different types of errors
            if (error.text && error.text.includes('Invalid')) {
                return {
                    success: false,
                    message: 'Invalid email configuration. Please contact the administrator.'
                };
            }

            if (error.text && error.text.includes('quota')) {
                return {
                    success: false,
                    message: 'Email service is temporarily unavailable. Please try again later.'
                };
            }

            return {
                success: false,
                message: error.message || contactConfig.ui.messages.error
            };
        }
    }

    // Check if EmailJS is properly configured
    isConfigured() {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        return !!(serviceId && templateId && publicKey);
    }
}

// Export singleton instance
const emailService = new EmailService();
export default emailService;
