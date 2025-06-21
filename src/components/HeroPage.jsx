import React from 'react';
import { ArrowForward} from '@mui/icons-material';

const HeroPage = () => {
    return (
        <div className="bg-gray-50 min-h-190">

            {/* Hero Content */}
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pt-40">
                        Mohammad Wael
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Anim cute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center">
                            Get started
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 px-6 py-3 rounded-md font-medium flex items-center justify-center">
                            Learn more <ArrowForward className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;