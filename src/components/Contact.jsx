import React from 'react';
import { Email, Phone, LocationOn, Schedule } from '@mui/icons-material';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Send a Hi</h1>
                <p className="text-gray-600">Leave your email and I will get back to you within 24 hours</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Information Section */}
                <div className="md:w-1/2 space-y-6">
                    <ContactItem icon={<Email className="text-blue-500" />} title="Email" content="m.mohammadwael@ufl.edu" />
                    <ContactItem icon={<Phone className="text-blue-500" />} title="Phone" content="+1 (352) 709 94 05" />
                    <ContactItem icon={<LocationOn className="text-blue-500" />} title="Address" content="3800 SW 34th St. Gainesville, FL, USA" />
                    <ContactItem icon={<Schedule className="text-blue-500" />} title="Working hours" content="8 a.m. – 11 p.m." />
                </div>

                {/* Divider - Only visible on larger screens */}
                <div className="hidden md:block border-l border-gray-200"></div>

                {/* Contact Form Section */}
                <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold mb-6">Email *</h2>
                    <div className="space-y-6">
                        <InputField placeholder="your@email.com" />
                        <InputField label="Name" placeholder="Timon" />
                        <InputField
                            label="Message *"
                            placeholder="I would like to connect ..."
                            multiline
                            rows={4}
                        />
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
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
const InputField = ({ label, placeholder, multiline = false, rows = 1 }) => {
    return (
        <div>
            {label && <label className="block font-medium mb-2">{label}</label>}
            {multiline ? (
                <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={placeholder}
                    rows={rows}
                />
            ) : (
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default Contact;