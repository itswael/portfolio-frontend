import React, { useState } from 'react';
import { LinearProgress, Container, Typography, Chip } from '@mui/material';
import skillsData from '../data/skillsData.json';
import { componentStyles, cn } from '../theme';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    // Responsive positions for better layout - centered within container
    const diagramWidth = 1100; // Total diagram width
    const diagramHeight = 860; // Total diagram height
    
    const categoryPositions = {
        frontend: { x: 50, y: 50, width: 300, height: 220 },
        backend: { x: 400, y: 50, width: 300, height: 220 },
        aiml: { x: 750, y: 50, width: 300, height: 220 },
        database: { x: 200, y: 320, width: 300, height: 220 },
        cloud: { x: 550, y: 320, width: 300, height: 220 },
        tools: { x: 375, y: 590, width: 300, height: 220 }
    };

    const connections = [
        { from: 'frontend', to: 'backend', label: 'API Calls' },
        { from: 'backend', to: 'database', label: 'Data Access' },
        { from: 'backend', to: 'cloud', label: 'Deployment' },
        { from: 'backend', to: 'aiml', label: 'ML Services' },
        { from: 'cloud', to: 'tools', label: 'CI/CD' },
        { from: 'database', to: 'tools', label: 'Version Control' }
    ];

    const getConnectionPath = (fromId, toId) => {
        const from = categoryPositions[fromId];
        const to = categoryPositions[toId];
        
        if (!from || !to) return '';

        // Calculate center points
        const fromX = from.x + from.width / 2;
        const fromY = from.y + from.height / 2;
        const toX = to.x + to.width / 2;
        const toY = to.y + to.height / 2;

        // Create a curved path for better visualization
        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2;
        
        // Add some curvature
        const controlX = midX + (Math.random() - 0.5) * 100;
        const controlY = midY - 50;

        return `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;
    };

    const SkillCard = ({ skill, categoryColor }) => (
        <div 
            className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer mb-2"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
                transform: hoveredSkill === skill.name ? 'translateY(-2px)' : 'translateY(0)',
                borderColor: hoveredSkill === skill.name ? categoryColor : '#E5E7EB'
            }}
        >
            <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-800 text-xs">{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                    height: 3,
                    borderRadius: 2,
                    backgroundColor: '#F3F4F6',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: categoryColor,
                        borderRadius: 2,
                    }
                }}
            />
            <div className="text-xs text-gray-500 mt-1">{skill.experience}</div>
        </div>
    );

    const CategoryNode = ({ category, position, isSelected, onClick }) => (
        <div
            className={`absolute bg-white rounded-xl shadow-lg border-2 p-4 cursor-pointer transition-all duration-500 ${
                isSelected ? 'shadow-2xl scale-110 z-20' : 'hover:shadow-xl hover:scale-105 z-10'
            }`}
            style={{
                left: position.x,
                top: position.y,
                width: position.width,
                height: isSelected ? 'auto' : position.height,
                borderColor: isSelected ? category.color : '#E5E7EB',
                backgroundColor: isSelected ? `${category.color}05` : 'white'
            }}
            onClick={() => onClick(isSelected ? null : category.id)}
        >
            {/* Header */}
            <div className="flex items-center mb-3">
                <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-3 shadow-sm"
                    style={{ backgroundColor: `${category.color}20` }}
                >
                    {category.icon}
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.description}</p>
                </div>
                <div className="text-xs font-bold text-gray-600">
                    {category.skills.length} skills
                </div>
            </div>

            {/* Skills content */}
            <div className="overflow-y-auto" style={{ maxHeight: isSelected ? '400px' : '140px' }}>
                {isSelected ? (
                    // Detailed view when selected
                    <div className="space-y-1">
                        {category.skills.map((skill, index) => (
                            <SkillCard 
                                key={index} 
                                skill={skill} 
                                categoryColor={category.color} 
                            />
                        ))}
                    </div>
                ) : (
                    // Preview view
                    <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                            {category.skills.slice(0, 4).map((skill, index) => (
                                <div key={index} className="text-xs">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-gray-700 truncate">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs text-gray-500 ml-1">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1">
                                        <div 
                                            className="h-1 rounded-full transition-all duration-300"
                                            style={{ 
                                                width: `${skill.level}%`,
                                                backgroundColor: category.color 
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {category.skills.length > 4 && (
                            <div className="flex justify-center mt-2">
                                <Chip
                                    label={`+${category.skills.length - 4} more`}
                                    size="small"
                                    sx={{
                                        fontSize: '10px',
                                        height: '20px',
                                        backgroundColor: `${category.color}20`,
                                        color: category.color,
                                        fontWeight: 'bold'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div id="skills" className="min-h-screen bg-gray-50 py-8">
            <Container maxWidth="xl" className="px-4">
                {/* Header */}
                <div className="mb-16" style={{ textAlign: 'center' }}>
                    <Typography 
                        variant="h2" 
                        className="font-bold text-gray-800 mb-4"
                        align="center"
                        sx={{ 
                            textAlign: 'center !important',
                            width: '100%',
                            display: 'block'
                        }}
                    >
                        Technical Skills Architecture
                    </Typography>
                    <Typography 
                        variant="h6" 
                        className="text-gray-600"
                        align="center"
                        sx={{ 
                            textAlign: 'center !important',
                            maxWidth: '768px',
                            margin: '0 auto',
                            display: 'block'
                        }}
                    >
                        Interactive system diagram showcasing how different technologies work together in modern development
                    </Typography>
                    <div className="mt-6 space-y-2" style={{ textAlign: 'center' }}>
                        <div className="text-sm text-gray-500 bg-blue-100 px-4 py-2 rounded-full inline-block">
                            💡 Click on any category to explore skills in detail
                        </div>
                        {selectedCategory && (
                            <div className="text-sm text-gray-500 bg-green-100 px-4 py-2 rounded-full inline-block ml-2">
                                ✨ Click again to return to overview
                            </div>
                        )}
                    </div>
                </div>

                {/* System Diagram */}
                <div className="flex justify-center mb-16 px-4">
                    <div 
                        className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-8 w-full" 
                        style={{ 
                            maxWidth: `${diagramWidth}px`, 
                            height: `${diagramHeight}px`, 
                            overflow: 'auto'
                        }}
                    >
                    {/* Background grid (optional) */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'radial-gradient(circle, #9CA3AF 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    {/* SVG for connections */}
                    <svg 
                        className="absolute inset-0 pointer-events-none" 
                        style={{ width: '100%', height: '100%', zIndex: 1 }}
                    >
                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="8"
                                markerHeight="6"
                                refX="7"
                                refY="3"
                                orient="auto"
                            >
                                <polygon
                                    points="0 0, 8 3, 0 6"
                                    fill="#9CA3AF"
                                />
                            </marker>
                        </defs>
                        
                        {!selectedCategory && connections.map((connection, index) => {
                            const path = getConnectionPath(connection.from, connection.to);
                            if (!path) return null;
                            
                            return (
                                <g key={index}>
                                    <path
                                        d={path}
                                        stroke="#9CA3AF"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="8,4"
                                        markerEnd="url(#arrowhead)"
                                        opacity="0.6"
                                        className="animate-pulse"
                                    />
                                </g>
                            );
                        })}
                    </svg>

                    {/* Category Nodes */}
                    {skillsData.techSkills.categories.map((category) => (
                        <CategoryNode
                            key={category.id}
                            category={category}
                            position={categoryPositions[category.id]}
                            isSelected={selectedCategory === category.id}
                            onClick={setSelectedCategory}
                        />
                    ))}

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 text-xs text-gray-600">
                        <div className="font-bold mb-2">System Architecture</div>
                        <div className="flex items-center mb-1">
                            <div className="w-4 h-0.5 bg-gray-400 mr-2" style={{ backgroundImage: 'repeating-linear-gradient(to right, #9CA3AF 0, #9CA3AF 8px, transparent 8px, transparent 12px)' }}></div>
                            <span>Data Flow</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded border-2 border-blue-500 mr-2"></div>
                            <span>Technology Stack</span>
                        </div>
                    </div>
                </div>
                </div>

                {/* Soft Skills */}
                <div className="mb-16" style={{ textAlign: 'center' }}>
                    <Typography
                        variant="h2"
                        className="font-bold text-gray-800 mb-4"
                        align="center"
                        sx={{
                            textAlign: 'center !important',
                            width: '100%',
                            display: 'block'
                        }}
                    >
                        Professional Skills & Qualities
                    </Typography>
                    <Typography 
                        variant="h6" 
                        className="text-gray-600"
                        align="center"
                        sx={{ 
                            textAlign: 'center !important',
                            maxWidth: '768px',
                            margin: '0 auto',
                            display: 'block'
                        }}
                    >
                        The human skills that complement my technical expertise and drive successful collaborations
                    </Typography>
                </div>
                <div className="flex justify-center mb-16 px-4">
                    <div 
                        className="bg-white rounded-2xl shadow-lg p-8 w-full"
                        style={{ 
                            maxWidth: `${diagramWidth}px`
                        }}
                    >

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillsData.softSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800 text-lg">{skill.name}</h4>
                                        {/*<div className="flex items-center mt-2">*/}
                                        {/*    <LinearProgress*/}
                                        {/*        variant="determinate"*/}
                                        {/*        value={skill.level}*/}
                                        {/*        sx={{*/}
                                        {/*            width: 100,*/}
                                        {/*            height: 6,*/}
                                        {/*            borderRadius: 3,*/}
                                        {/*            backgroundColor: '#E5E7EB',*/}
                                        {/*            '& .MuiLinearProgress-bar': {*/}
                                        {/*                backgroundColor: '#3B82F6',*/}
                                        {/*                borderRadius: 3,*/}
                                        {/*            }*/}
                                        {/*        }}*/}
                                        {/*    />*/}
                                        {/*    <span className="ml-2 text-sm font-medium text-gray-600">*/}
                                        {/*        {skill.level}%*/}
                                        {/*    </span>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;
