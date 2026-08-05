import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { componentStyles, cn } from '../theme';

const TimelineItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
    const isWork = item.type === 'work';
    const visibleTech = item.technologies.slice(0, expanded ? item.technologies.length : 5);
    const hiddenCount = item.technologies.length - visibleTech.length;

    return (
        <div className={cn(componentStyles.tile, "relative pl-6 overflow-hidden")}>
            <div
                className={cn(
                    "absolute left-0 top-0 bottom-0 w-[3px]",
                    isWork ? "bg-gradient-to-b from-cyan-400 to-emerald-400" : "bg-amber-400"
                )}
                aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <div className="flex flex-wrap items-baseline gap-2">
                    <span
                        className={cn(
                            "font-mono text-[0.68rem] uppercase tracking-wide px-2 py-0.5 rounded border",
                            isWork ? "text-emerald-400 border-emerald-400/30" : "text-amber-400 border-amber-400/35"
                        )}
                    >
                        {isWork ? 'Work' : 'Education'}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                    <span className="text-sm text-slate-400">{item.company}</span>
                    {item.GPA && (
                        <span className="font-mono text-xs text-amber-400 border border-amber-400/30 rounded px-1.5 py-0.5">
                            GPA {item.GPA}
                        </span>
                    )}
                </div>
                <span className="font-mono text-xs text-slate-500 whitespace-nowrap">
                    {item.startDate.toUpperCase()} — {item.endDate.toUpperCase()}
                </span>
            </div>

            <p className={cn(componentStyles.text.bodySmall, "mb-3 max-w-3xl")}>{item.description}</p>

            <div className="flex flex-wrap gap-2 mb-2">
                {visibleTech.map((tech) => (
                    <span key={tech} className={componentStyles.chip}>{tech}</span>
                ))}
                {!expanded && hiddenCount > 0 && (
                    <button onClick={() => setExpanded(true)} className={cn(componentStyles.chip, "text-cyan-400 hover:text-emerald-400 transition-colors")}>
                        +{hiddenCount} more
                    </button>
                )}
            </div>

            {expanded && item.achievements?.length > 0 && (
                <ul className="mt-3 pt-3 border-t border-white/[0.08] space-y-1.5">
                    {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                            <span className="text-cyan-400 mt-1.5 shrink-0">▸</span>
                            {achievement}
                        </li>
                    ))}
                </ul>
            )}

            <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-slate-500 hover:text-slate-200 transition-colors"
            >
                {expanded ? 'Show less' : 'Show achievements'}
                <ChevronDown size={13} className={cn("transition-transform", expanded && "rotate-180")} />
            </button>
        </div>
    );
};

export default TimelineItem;
