import React from 'react';
import { ArrowForward} from '@mui/icons-material';
import { goToContact, goToAbout } from '../utils/navigation';

const HeroPage = () => {
    return (
        <div id="hero" className="bg-gray-50 min-h-[85vh]">

            {/* Hero Content */}
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pt-40">
                        Mohammad Wael
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        At the intersection of engineering and exploration — from scalable APIs to AI-driven insights. My work spans resilient backends, intuitive UIs, cloud deployment, robust databases, and intelligent automation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={goToContact}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors duration-200"
                        >
                            Get in touch
                        </button>
                        <button 
                            onClick={goToAbout}
                            className="text-blue-600 hover:text-blue-700 px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors duration-200"
                        >
                            Explore further <ArrowForward className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;