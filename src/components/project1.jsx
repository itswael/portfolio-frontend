import React from 'react';
import { Github, ExternalLink, PlayCircle } from 'lucide-react';
import projectsData from '../data/projectsData.json';
import { componentStyles, cn } from '../theme';

// Short category labels, derived from each project's focus — not part of the source data.
const CATEGORY_BY_ID = {
    1: 'backend',
    2: 'open source',
    3: 'ml · data',
    4: 'full-stack',
    5: 'frontend · seo',
    6: 'data · ml',
    7: 'ai · rag',
    8: 'ai · eval',
    9: 'full-stack · mobile',
    10: 'full-stack · mobile',
    11: 'ai · automation',
    12: 'backend',
};

const FEATURED_ID = 4; // GatorCan

const ActionLink = ({ href, label, icon }) => {
    if (!href) return null;
    const Icon = icon;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-white/[0.16] transition-colors"
        >
            <Icon size={15} />
        </a>
    );
};

const ProjectTile = ({ project, featured }) => (
    <div className={cn(componentStyles.tile, "flex flex-col", featured && "md:col-span-2")}>
        <div className="flex items-start justify-between gap-3 mb-2">
            <span className={componentStyles.kicker}>{CATEGORY_BY_ID[project.id] || 'project'}</span>
            {featured && (
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-amber-400 border border-amber-400/30 rounded px-1.5 py-0.5">
                    Featured
                </span>
            )}
        </div>
        <h3 className="text-lg font-bold text-slate-100 mb-1.5">{project.title}</h3>
        <p className={cn(componentStyles.text.bodySmall, "mb-3 line-clamp-2 flex-1")}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
                <span key={tech} className={componentStyles.chip}>{tech}</span>
            ))}
            {project.tech.length > 4 && (
                <span className={componentStyles.chip}>+{project.tech.length - 4}</span>
            )}
        </div>
        <div className="flex gap-2 mt-auto">
            <ActionLink href={project.githubLink} label="View source on GitHub" icon={Github} />
            <ActionLink href={project.liveLink} label="View live demo" icon={ExternalLink} />
            <ActionLink href={project.videoLink} label="Watch demo video" icon={PlayCircle} />
        </div>
    </div>
);

const Projects = () => {
    const projects = projectsData.projects;

    return (
        <div id="projects" className={componentStyles.layout.section}>
            <div className={componentStyles.layout.container}>
                <div className="flex items-baseline gap-3 mb-10">
                    <span className={componentStyles.eyebrowIndex}>03</span>
                    <h2 className={componentStyles.heading.h2}>Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectTile key={project.id} project={project} featured={project.id === FEATURED_ID} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
