import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';
import photo from "../assets/photo.jpg"
import { goToContact, handleResumeView } from '../utils/navigation';
import { componentStyles, cn } from '../theme';

export default function About() {
    return (
        <div id="about" className={componentStyles.layout.section}>
            <div className={componentStyles.layout.container}>
                <div className="flex items-baseline gap-3 mb-10">
                    <span className={componentStyles.eyebrowIndex}>01</span>
                    <h2 className={componentStyles.heading.h2}>About</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Main bio tile */}
                    <div className={cn(componentStyles.tile, "lg:col-span-2 flex flex-col justify-center")}>
                        <span className={cn(componentStyles.kicker, "mb-3")}>// about me</span>
                        <p className={cn(componentStyles.text.bodyLarge, "mb-4")}>
                            I build software that scales, performs, and actually solves problems. From distributed backend systems to AI-powered platforms, I enjoy turning complex ideas into reliable products with clean engineering and real-world impact.
                        </p>
                        <p className={cn(componentStyles.text.body, "mb-4")}>
                            I'm a software engineer who genuinely enjoys building things — especially the kind of systems people depend on every day without ever noticing. I like solving difficult problems, simplifying complexity, and creating software that feels fast, reliable, and thoughtfully designed.
                        </p>
                        <p className={componentStyles.text.body}>
                            Most of my work lives in backend engineering, cloud infrastructure, and scalable systems, but lately I've also been exploring AI systems and modern product engineering. What drives me most is curiosity — I care about building things the right way, not just the quick way.
                        </p>
                    </div>

                    {/* Side column */}
                    <div className="flex flex-col gap-4">
                        <div className={cn(componentStyles.tile, "flex items-center gap-4")}>
                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/[0.08]">
                                <img src={photo} alt="Mohammad Wael" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                                <div className="font-semibold text-slate-100 truncate">Mohammad Wael</div>
                                <div className="font-mono text-xs text-slate-400 truncate">errwael@gmail.com</div>
                                <div className="flex gap-2 mt-2">
                                    <a href="https://www.linkedin.com/in/itswael" target="_blank" rel="noopener noreferrer"
                                       className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                                        <Linkedin size={16} />
                                    </a>
                                    <a href="https://github.com/itswael" target="_blank" rel="noopener noreferrer"
                                       className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                                        <Github size={16} />
                                    </a>
                                    <a href="https://leetcode.com/u/itswael/" target="_blank" rel="noopener noreferrer"
                                       className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="LeetCode">
                                        <Code2 size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={componentStyles.tile}>
                            <span className={cn(componentStyles.kicker, "mb-2")}>currently</span>
                            <div className="font-semibold text-slate-100">Graduate Research Assistant</div>
                            <div className="text-sm text-slate-400">University of Florida</div>
                        </div>

                        <div className={cn(componentStyles.tile, "flex-1")}>
                            <p className={cn(componentStyles.text.bodySmall, "mb-4")}>
                                Looking for someone who blends backend expertise with a sharp eye for detail, a hunger to learn, and a bias for action? Let's connect.
                            </p>
                            <div className="flex flex-col gap-2">
                                <button onClick={goToContact} className={cn(componentStyles.button.primary, "text-sm px-4 py-2.5 text-center")}>
                                    Get in touch
                                </button>
                                <button onClick={handleResumeView} className={cn(componentStyles.button.secondary, "text-sm px-4 py-2.5 text-center")}>
                                    View résumé
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
