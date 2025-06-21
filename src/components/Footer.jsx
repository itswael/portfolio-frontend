import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6 px-4 border-t border-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                {/* Copyright text */}
                <div className="text-gray-600 mb-4 md:mb-0">
                     © {new Date().getFullYear()} Mohammad Wael
                </div>

                {/* Social icons */}
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
        </footer>
    );
};

export default Footer;