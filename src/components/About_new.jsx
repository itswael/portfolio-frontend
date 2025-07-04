import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Right Content - Profile Image and Info - Shows first on mobile */}
                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-32">
                            {/* Profile Image */}
                            <div className="mb-6">
                                <div className="w-48 h-48 mx-auto rounded-full bg-gray-300 overflow-hidden shadow-lg">
                                    {/* Placeholder for profile image */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold">YI</span>
                                    </div>
                                    {/* Uncomment and replace with your actual image */}
                                    {/* <img 
                                        src="/path-to-your-profile-image.jpg" 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    /> */}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="text-center space-y-3">
                                <div className="text-gray-600">
                                    <p className="text-sm">errwael@gmail.com</p>
                                </div>
                                
                                {/* Social Links */}
                                <div className="flex justify-center space-x-4 pt-4">
                                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.119-1.499-.7-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.597 2.265-.744 2.833-.282 1.104-1.039 2.484-1.548 3.325C9.101 23.838 10.543 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content - Text - Shows second on mobile */}
                    <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                        {/* Main Introduction with Large First Letter */}
                        <div className="text-gray-700 leading-relaxed">
                            <p className="text-lg">
                                <span className="float-left text-8xl font-serif text-gray-800 leading-none mr-3 mt-2">I</span>
                                'm a backend-focused software engineer with a passion for building reliable, scalable systems that solve real-world problems. From architecting microservices in Spring Boot and Flask to automating workflows with Redis and Golang, my work reflects a balance of deep technical rigor and clear business impact.
                            </p>
                        </div>

                        {/* Section Separator */}
                        <div className="border-t border-gray-300 pt-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">A little bit more about me. Like anyone cares.</h3>
                            
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    I take ownership seriously — not just of the code I write, but of the outcomes it drives. Whether working solo or as part of a cross-functional team, I believe in high standards, strong collaboration, and delivering solutions that last. My experience spans everything from secure API design and cloud deployment to AI-integrated features and performance optimization.
                                </p>
                                
                                <p>
                                    Curiosity fuels everything I do. I'm continuously exploring new tools, frameworks, and architectural patterns — currently diving into React and machine learning to expand my full-stack and AI capabilities.
                                </p>
                                
                                <p>
                                    I approach software with a builder's mindset: invent, simplify, dive deep, and deliver. I value systems that are not only functional, but elegant. I care about clean code, thoughtful abstractions, and above all, how technology can serve people better.
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <p className="text-gray-700 text-lg">
                                If you're looking for someone who blends backend expertise with a sharp eye for detail, a hunger to learn, and a bias for action — let's connect.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    Get In Touch
                                </button>
                                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                    View Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
