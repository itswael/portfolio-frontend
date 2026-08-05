import React, { useState, useMemo } from 'react';
import TimelineItem from './TimelineItem';
import timelineData from '../data/timelineData.json';
import { componentStyles, cn } from '../theme';

const FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'Work', value: 'work' },
    { label: 'Education', value: 'education' },
];

const WorkEx = () => {
    const [filter, setFilter] = useState('all');

    const filteredData = useMemo(() => {
        if (filter === 'all') return timelineData.timeline;
        return timelineData.timeline.filter((item) => item.type === filter);
    }, [filter]);

    return (
        <div id="work-experience" className={componentStyles.layout.section}>
            <div className={componentStyles.layout.container}>
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
                    <div className="flex items-baseline gap-3">
                        <span className={componentStyles.eyebrowIndex}>02</span>
                        <h2 className={componentStyles.heading.h2}>Work Experience</h2>
                    </div>
                    <div className="inline-flex gap-1 border border-white/[0.08] bg-slate-900 rounded-full p-1">
                        {FILTERS.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setFilter(f.value)}
                                className={cn(
                                    "font-mono text-xs uppercase tracking-wide px-3.5 py-1.5 rounded-full transition-colors duration-200",
                                    filter === f.value
                                        ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-semibold"
                                        : "text-slate-400 hover:text-slate-100"
                                )}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {filteredData.map((item) => (
                        <TimelineItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkEx;
