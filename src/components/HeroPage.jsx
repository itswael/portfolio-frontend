import React from 'react';
import { ArrowRight } from 'lucide-react';
import { goToContact, goToAbout, handleResumeView } from '../utils/navigation';
import { componentStyles, cn } from '../theme';

const HeroPage = () => {
    return (
        <div id="hero" className="relative overflow-hidden min-h-[90vh] flex items-center pt-16">
            {/* Glow blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute top-10 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[32rem] h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className={cn(componentStyles.layout.container, "relative px-6 py-16 md:py-24 w-full")}>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 font-mono text-sm text-slate-300 border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                        <i className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
                        Open to opportunities
                    </span>
                    <div className="font-mono text-sm md:text-base text-slate-400 mb-4">
                        Software Engineer — Backend, Cloud &amp; Applied AI
                    </div>
                    <h1 className={cn(componentStyles.heading.h1, componentStyles.heading.gradient, "text-5xl md:text-6xl lg:text-7xl mb-6")}>
                        Mohammad Wael
                    </h1>
                    <p className={cn(componentStyles.text.bodyLarge, "mb-10 max-w-2xl mx-auto")}>
                        At the intersection of engineering and exploration — from scalable APIs to AI-driven insights. My work spans resilient backends, intuitive UIs, cloud deployment, robust databases, and intelligent automation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
                        <button
                            onClick={goToContact}
                            className={componentStyles.button.primary}
                        >
                            Get in touch
                        </button>
                        <button
                            onClick={handleResumeView}
                            className={componentStyles.button.secondary}
                        >
                            View résumé
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
                        <div className="border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm rounded-xl px-4 py-4">
                            <div className="font-mono text-xl font-bold text-slate-100">15M+</div>
                            <div className="text-xs text-slate-400 mt-1">daily events processed</div>
                        </div>
                        <div className="border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm rounded-xl px-4 py-4">
                            <div className="font-mono text-xl font-bold text-slate-100">4×</div>
                            <div className="text-xs text-slate-400 mt-1">throughput improvement</div>
                        </div>
                        <div className="border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm rounded-xl px-4 py-4">
                            <div className="font-mono text-xl font-bold text-slate-100">120K+</div>
                            <div className="text-xs text-slate-400 mt-1">requests / minute</div>
                        </div>
                    </div>

                    <button
                        onClick={goToAbout}
                        className="mt-14 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors"
                    >
                        Explore further <ArrowRight size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
