import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import photo from "../assets/photo.jpg"

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
                                <div className="w-52 h-52 mx-auto rounded-full bg-gray-300 overflow-hidden shadow-lg">
                                    {/* Placeholder for profile image */}

                                    {/* Uncomment and replace with your actual image */}
                                    { <img
                                        src={photo}
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    /> }
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="text-center space-y-3">
                                <div className="text-gray-600">
                                    <p className="text-sm">errwael@gmail.com</p>
                                </div>
                                
                                {/* Social Links */}
                                <div className="flex justify-center space-x-4 pt-1">
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://www.linkedin.com/in/itswael"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-blue-600 transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <LinkedInIcon fontSize="small" />
                                        </a>
                                        <a
                                            href="https://github.com/itswael"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-gray-900 transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <GitHubIcon fontSize="small" />
                                        </a>
                                        <a
                                            href="https://leetcode.com/u/user1326iN/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-orange-500 transition-colors"
                                            aria-label="LeetCode"
                                        >
                                            <CodeIcon fontSize="small" />
                                        </a>
                                    </div>
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
                                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors" >
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
