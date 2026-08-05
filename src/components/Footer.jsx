import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/[0.08] py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-mono text-xs text-slate-500 tracking-wide">
                    © {new Date().getFullYear()} MOHAMMAD WAEL
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/itswael"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-cyan-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="https://github.com/itswael"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-cyan-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://leetcode.com/u/itswael/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-cyan-400 transition-colors"
                        aria-label="LeetCode"
                    >
                        <Code2 size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
