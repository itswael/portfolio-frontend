import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import photo from "../assets/photo.jpg"
import { goToContact, handleResumeView } from '../utils/navigation';
import { componentStyles, cn } from '../theme';

export default function About() {
    return (
        <div id="about" className={cn(componentStyles.layout.section, componentStyles.layout.sectionBg)}>
            <div className={componentStyles.layout.containerSmall}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Right Content - Profile Image and Info - Shows first on mobile */}
                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-32">
                            {/* Profile Image */}
                            <div className="mb-6">
                                <div className="w-52 h-52 mx-auto rounded-full bg-gray-300 overflow-hidden shadow-lg">
                                    <img
                                        src={photo}
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="text-center space-y-3">
                                <div className={componentStyles.text.muted}>
                                    <p className={componentStyles.text.bodySmall}>errwael@gmail.com</p>
                                </div>
                                
                                {/* Social Links */}
                                <div className="flex justify-center space-x-4 pt-1">
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://www.linkedin.com/in/itswael"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(componentStyles.text.muted, "hover:text-blue-600 transition-colors")}
                                            aria-label="LinkedIn"
                                        >
                                            <LinkedInIcon fontSize="small" />
                                        </a>
                                        <a
                                            href="https://github.com/itswael"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(componentStyles.text.muted, "hover:text-gray-900 transition-colors")}
                                            aria-label="GitHub"
                                        >
                                            <GitHubIcon fontSize="small" />
                                        </a>
                                        <a
                                            href="https://leetcode.com/u/itswael/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(componentStyles.text.muted, "hover:text-orange-500 transition-colors")}
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
                        <div className={componentStyles.text.body}>
                            <p className={componentStyles.text.bodyLarge}>
                                <span className="float-left text-8xl font-serif text-gray-800 leading-none mr-3 mt-2">I</span>
                                build software that scales, performs, and actually solves problems. From distributed backend systems to AI-powered platforms, I enjoy turning complex ideas into reliable products with clean engineering and real-world impact.
                            </p>
                        </div>

                        {/* Section Separator */}
                        <div className="border-t border-gray-300 pt-8">
                            <h3 className={cn(componentStyles.heading.h4, "mb-4")}>Let me say a bit more.</h3>
                            
                            <div className={cn(componentStyles.text.body, "space-y-4")}>
                                <p>
                                    I'm a software engineer who genuinely enjoys building things — especially the kind of systems people depend on every day without ever noticing.</p>
                                
                                <p>
                                    I like solving difficult problems, simplifying complexity, and creating software that feels fast, reliable, and thoughtfully designed. Most of my work lives in backend engineering, cloud infrastructure, and scalable systems, but lately I've also been exploring AI systems and modern product engineering.</p>
                                
                                <p>
                                    What drives me most is curiosity. I enjoy learning new technologies, understanding how systems work under the hood, and continuously improving the way I build. Whether it's optimizing performance, designing scalable architectures, or experimenting with new ideas, I care about building things the right way — not just the quick way.</p>
                                <p>At the end of the day, I'm simply someone who loves engineering elegant solutions to meaningful problems.</p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className={cn(componentStyles.card.flat, "p-6")}>
                            <p className={cn(componentStyles.text.bodyLarge, "text-gray-700")}>
                                If you're looking for someone who blends backend expertise with a sharp eye for detail, a hunger to learn, and a bias for action — let's connect.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <button 
                                    onClick={goToContact}
                                    className={componentStyles.button.primary}
                                >
                                    Get In Touch
                                </button>
                                <button 
                                    onClick={handleResumeView}
                                    className={componentStyles.button.secondary}
                                >
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
