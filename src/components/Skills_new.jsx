import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import skillsData from '../data/skillsData.json';
import { certificates } from '../data/certificateData.js';
import { componentStyles, cn } from '../theme';

const CategoryTile = ({ category }) => {
    const preview = category.skills.slice(0, 4);
    const remaining = category.skills.length - preview.length;

    return (
        <div className={componentStyles.tile}>
            <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: category.color }} />
                <h3 className="font-bold text-slate-100">{category.name}</h3>
            </div>
            <p className="text-xs text-slate-500 mb-3">{category.description}</p>
            <div className="flex flex-wrap gap-2">
                {preview.map((skill) => (
                    <span key={skill.name} className={componentStyles.chip}>{skill.name}</span>
                ))}
                {remaining > 0 && (
                    <span className={componentStyles.chip}>+{remaining}</span>
                )}
            </div>
        </div>
    );
};

const SoftSkillTile = ({ skill }) => (
    <div className={componentStyles.tile}>
        <div className="flex items-start gap-3">
            <span className="text-2xl leading-none">{skill.icon}</span>
            <div className="min-w-0">
                <h4 className="font-semibold text-slate-100 mb-1">{skill.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{skill.description}</p>
            </div>
        </div>
    </div>
);

const Skills = () => {
    const [currentCertificate, setCurrentCertificate] = useState(0);
    const [hovered, setHovered] = useState(false);

    const nextCertificate = () => setCurrentCertificate((prev) => (prev + 1) % certificates.length);
    const prevCertificate = () => setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);

    return (
        <div id="skills" className={componentStyles.layout.section}>
            <div className={componentStyles.layout.container}>
                <div className="flex items-baseline gap-3 mb-10">
                    <span className={componentStyles.eyebrowIndex}>04</span>
                    <h2 className={componentStyles.heading.h2}>Skills</h2>
                </div>

                {/* Technical skill categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {skillsData.techSkills.categories.map((category) => (
                        <CategoryTile key={category.id} category={category} />
                    ))}
                </div>

                {/* Soft skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
                    {skillsData.softSkills.map((skill) => (
                        <SoftSkillTile key={skill.name} skill={skill} />
                    ))}
                </div>

                {/* Certificates */}
                {certificates.length > 0 && (
                    <div className={cn(componentStyles.tile, "max-w-2xl mx-auto")}>
                        <span className={cn(componentStyles.kicker, "block mb-4 text-center")}>certificates</span>
                        <div className="relative flex justify-center">
                            <div
                                className="relative group"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <img
                                    src={certificates[currentCertificate].image}
                                    alt={certificates[currentCertificate].name}
                                    className="max-w-full rounded-lg border border-white/[0.08]"
                                    style={{ maxHeight: '360px' }}
                                />
                                {hovered && (
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                                        <a
                                            href={certificates[currentCertificate].validationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(componentStyles.button.primary, "text-xs px-4 py-2 inline-flex items-center gap-1.5")}
                                        >
                                            <ExternalLink size={14} /> Validate
                                        </a>
                                    </div>
                                )}
                            </div>

                            {certificates.length > 1 && (
                                <>
                                    <button
                                        onClick={prevCertificate}
                                        aria-label="Previous certificate"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.08] bg-slate-950/70 text-slate-400 hover:text-slate-100 transition-colors"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={nextCertificate}
                                        aria-label="Next certificate"
                                        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.08] bg-slate-950/70 text-slate-400 hover:text-slate-100 transition-colors"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="text-center mt-4">
                            <h4 className="font-semibold text-slate-100">{certificates[currentCertificate].name}</h4>
                        </div>

                        {certificates.length > 1 && (
                            <div className="flex justify-center gap-1.5 mt-4">
                                {certificates.map((cert, index) => (
                                    <button
                                        key={cert.id}
                                        onClick={() => setCurrentCertificate(index)}
                                        aria-label={`Show certificate ${index + 1}`}
                                        className={cn(
                                            "w-1.5 h-1.5 rounded-full transition-all duration-200",
                                            currentCertificate === index ? "bg-cyan-400 w-4" : "bg-slate-700 hover:bg-slate-500"
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
