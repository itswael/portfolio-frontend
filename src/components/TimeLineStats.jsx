import timelineData from "../data/timelineData.json";
import React from "react";

export default function TimelineStats(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {timelineData.timeline.filter(item => item.type === 'work').length}
                    </div>
                    <div className="text-gray-600 font-medium">Work Experiences</div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {timelineData.timeline.filter(item => item.type === 'education').length}
                    </div>
                    <div className="text-gray-600 font-medium">Educational Milestones</div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {timelineData.timeline.reduce((total, item) => {
                            return total + (item.technologies ? item.technologies.length : 0);
                        }, 0)}
                    </div>
                    <div className="text-gray-600 font-medium">Technologies Used</div>
                </div>
            </div>
        </>
    )
}