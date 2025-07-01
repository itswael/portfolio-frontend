import React from 'react';
import { ArrowForward} from '@mui/icons-material';

const HeroPage = () => {
    return (
        <div className="bg-gray-50 min-h-[100vh]">

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
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center">
                            Get in touch
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 px-6 py-3 rounded-md font-medium flex items-center justify-center">
                            Explore further <ArrowForward className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;