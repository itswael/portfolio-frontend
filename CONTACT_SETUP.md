# Contact Form Setup with EmailJS

This portfolio uses EmailJS for sending contact form submissions directly from the frontend without requiring a backend server.

## Prerequisites

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## EmailJS Setup

### 1. Create an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** and click **Add New Service**
3. Choose your email provider:
   - **Gmail**: Most common choice
   - **Outlook**: For Microsoft accounts
   - **Yahoo**: For Yahoo accounts
   - **Custom SMTP**: For other providers
4. Follow the setup instructions for your chosen provider
5. **Important**: Copy the **Service ID** (looks like `service_xxxxxxx`)

### 2. Create an Email Template

1. Go to **Email Templates** and click **Create New Template**
2. Set up your template with the following variables:
   ```
   Subject: New Portfolio Contact: {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Message: {{message}}
   
   Reply to: {{from_email}}
   ```
3. **Important**: Copy the **Template ID** (looks like `template_xxxxxxx`)

### 3. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like a long string of characters)
3. **Important**: Copy this key

## Environment Configuration

Create or update your `.env` file in the project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_CONTACT_EMAIL=m.mohammadwael@ufl.edu
```

**Replace the placeholder values** with your actual EmailJS credentials.

## Security Notes

- ✅ **Safe to use**: EmailJS public keys are designed to be exposed in frontend code
- ✅ **No backend required**: All communication happens directly between browser and EmailJS
- ✅ **Spam protection**: EmailJS has built-in rate limiting and spam detection
- ⚠️ **Rate limits**: Free plan has monthly email limits (check your EmailJS dashboard)

## Testing the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section of your portfolio

3. Fill out and submit the contact form

4. Check:
   - Your browser console for any errors
   - Your email inbox for the submitted message
   - EmailJS dashboard for delivery statistics

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration is missing" error**
   - Check that all environment variables are set correctly
   - Restart your development server after changing `.env`

2. **Emails not being received**
   - Verify your EmailJS service is active
   - Check spam/junk folders
   - Ensure template variables match the code

3. **"Invalid email configuration" error**
   - Double-check your Service ID and Template ID
   - Ensure your EmailJS service is properly connected

4. **Rate limit exceeded**
   - Check your EmailJS dashboard for usage statistics
   - Consider upgrading your EmailJS plan if needed

### Debug Mode:

To enable additional logging, add this to your browser console:
```javascript
localStorage.setItem('emailjs_debug', 'true')
```

## Contact Configuration

The contact form behavior and messages can be customized in:
- `src/data/contactConfig.json` - UI text and validation messages
- `src/components/Contact.jsx` - Form component
- `src/services/emailService.js` - Email sending logic

## Deployment Notes

When deploying to production:

1. **Environment Variables**: Ensure all `VITE_*` environment variables are set in your hosting platform
2. **Domain Configuration**: Add your production domain to EmailJS allowed origins (if required)
3. **Email Testing**: Test the contact form thoroughly on the production site

## Features

- ✅ **No backend required** - Pure frontend solution
- ✅ **No server costs** - Free EmailJS tier available
- ✅ **Spam protection** - Built-in rate limiting
- ✅ **Real-time validation** - Form validation as you type
- ✅ **Professional emails** - Customizable email templates
- ✅ **Easy deployment** - Works with any static hosting

## File Structure

```
src/
├── components/
│   └── Contact.jsx              # Main contact form component
├── services/
│   └── emailService.js          # EmailJS integration
├── data/
│   └── contactConfig.json       # UI configuration and text
.env                            # Environment variables
```

## Dependencies

- **@emailjs/browser**: EmailJS client library
- **React**: Frontend framework
- **Material-UI**: UI components

## Support

For EmailJS-specific issues, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS FAQ](https://www.emailjs.com/docs/faq/)

For portfolio-specific issues, check the console logs and verify your configuration matches this guide.
