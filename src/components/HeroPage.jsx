import React from 'react';
import { ArrowForward} from '@mui/icons-material';
import { goToContact, goToAbout } from '../utils/navigation';
import { componentStyles, cn } from '../theme';

const HeroPage = () => {
    return (
        <div id="hero" className={cn(componentStyles.layout.sectionBg, "min-h-[85vh]")}>
            {/* Hero Content */}
            <div className={cn(componentStyles.layout.container, "px-6 py-16 md:py-24")}>
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className={cn(componentStyles.heading.h1, "mb-6 pt-40")}>
                        Mohammad Wael
                    </h1>
                    <p className={cn(componentStyles.text.bodyLarge, "mb-8")}>
                        At the intersection of engineering and exploration — from scalable APIs to AI-driven insights. My work spans resilient backends, intuitive UIs, cloud deployment, robust databases, and intelligent automation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={goToContact}
                            className={componentStyles.button.primary}
                        >
                            Get in touch
                        </button>
                        <button 
                            onClick={goToAbout}
                            className={cn(componentStyles.button.secondary, "flex items-center justify-center")}
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