import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Box, Chip, LinearProgress, Tooltip } from '@mui/material';
import { Code, Computer, Storage, Cloud, Psychology, Build } from '@mui/icons-material';
import skillsData from '../data/skillsData.json';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const getCategoryIcon = (categoryId) => {
        const iconMap = {
            frontend: <Computer />,
            backend: <Code />,
            database: <Storage />,
            cloud: <Cloud />,
            aiml: <Psychology />,
            tools: <Build />
        };
        return iconMap[categoryId] || <Code />;
    };

    const SkillCard = ({ skill, categoryColor }) => (
        <div 
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
                transform: hoveredSkill === skill.name ? 'translateY(-2px)' : 'translateY(0)',
                borderColor: hoveredSkill === skill.name ? categoryColor : '#E5E7EB'
            }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                    height: 4,
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

    const CategoryNode = ({ category, isSelected, onClick }) => (
        <div
            className={`absolute transition-all duration-300 cursor-pointer ${
                isSelected ? 'z-20' : 'z-10'
            }`}
            style={{
                left: `${category.position.x}px`,
                top: `${category.position.y}px`,
                transform: isSelected ? 'scale(1.1)' : 'scale(1)'
            }}
            onClick={() => onClick(category.id)}
        >
            <div
                className={`relative bg-white rounded-xl shadow-lg border-2 p-4 min-w-[200px] transition-all duration-300 ${
                    isSelected ? 'shadow-xl' : 'hover:shadow-md'
                }`}
                style={{
                    borderColor: isSelected ? category.color : '#E5E7EB',
                    backgroundColor: isSelected ? `${category.color}10` : 'white'
                }}
            >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg"
                        style={{ backgroundColor: category.color }}
                    >
                        {category.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm">{category.name}</h3>
                        <p className="text-xs text-gray-600">{category.description}</p>
                    </div>
                </div>

                {/* Skills Preview */}
                <div className="space-y-2">
                    {category.skills.slice(0, isSelected ? category.skills.length : 3).map((skill, index) => (
                        <SkillCard key={index} skill={skill} categoryColor={category.color} />
                    ))}
                    {!isSelected && category.skills.length > 3 && (
                        <div className="text-center py-2">
                            <span className="text-xs text-gray-500">
                                +{category.skills.length - 3} more skills
                            </span>
                        </div>
                    )}
                </div>

                {/* Skill Count Badge */}
                <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold"
                    style={{ backgroundColor: category.color }}
                >
                    {category.skills.length}
                </div>
            </div>
        </div>
    );

    const ConnectionLine = ({ from, to, label }) => {
        const fromCategory = skillsData.techSkills.categories.find(c => c.id === from);
        const toCategory = skillsData.techSkills.categories.find(c => c.id === to);
        
        if (!fromCategory || !toCategory) return null;

        const startX = fromCategory.position.x + 100;
        const startY = fromCategory.position.y + 50;
        const endX = toCategory.position.x + 100;
        const endY = toCategory.position.y + 50;

        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;

        return (
            <g className="transition-opacity duration-300" opacity={selectedCategory ? 0.3 : 0.6}>
                <defs>
                    <marker
                        id={`arrow-${from}-${to}`}
                        viewBox="0 0 10 10"
                        refX="9"
                        refY="3"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                    >
                        <path d="m0,0 L0,6 L9,3 z" fill="#9CA3AF" />
                    </marker>
                </defs>
                <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    markerEnd={`url(#arrow-${from}-${to})`}
                />
                <rect
                    x={midX - 30}
                    y={midY - 8}
                    width="60"
                    height="16"
                    fill="white"
                    stroke="#E5E7EB"
                    rx="8"
                />
                <text
                    x={midX}
                    y={midY + 4}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                    fontSize="10"
                >
                    {label}
                </text>
            </g>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <Container maxWidth="xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <Typography variant="h2" className="font-bold text-gray-800 mb-4">
                        Technical Skills & Architecture
                    </Typography>
                    <Typography variant="h6" className="text-gray-600 max-w-3xl mx-auto">
                        An interactive system diagram showcasing my technical expertise across the full development stack
                    </Typography>
                </div>

                {/* System Diagram */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 overflow-hidden">
                    <div className="relative w-full" style={{ height: '600px' }}>
                        {/* SVG for connection lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {skillsData.techSkills.connections.map((connection, index) => (
                                <ConnectionLine
                                    key={index}
                                    from={connection.from}
                                    to={connection.to}
                                    label={connection.label}
                                />
                            ))}
                        </svg>

                        {/* Category Nodes */}
                        {skillsData.techSkills.categories.map((category) => (
                            <CategoryNode
                                key={category.id}
                                category={category}
                                isSelected={selectedCategory === category.id}
                                onClick={(id) => setSelectedCategory(selectedCategory === id ? null : id)}
                            />
                        ))}

                        {/* Instructions */}
                        <div className="absolute bottom-4 left-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-blue-700">
                                💡 Click on any category to expand and see all skills
                            </p>
                        </div>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <Typography variant="h3" className="font-bold text-gray-800 mb-2">
                            Soft Skills & Personal Attributes
                        </Typography>
                        <Typography variant="body1" className="text-gray-600">
                            The human skills that complement my technical expertise
                        </Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillsData.softSkills.map((skill, index) => (
                            <Card 
                                key={index} 
                                className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                sx={{ borderRadius: '16px' }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-800 text-lg">{skill.name}</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={skill.level}
                                                    sx={{
                                                        height: 6,
                                                        borderRadius: 3,
                                                        backgroundColor: '#F3F4F6',
                                                        flexGrow: 1,
                                                        '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#8B5CF6',
                                                            borderRadius: 3,
                                                        }
                                                    }}
                                                />
                                                <span className="text-sm font-medium text-gray-600">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {skill.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Statistics */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
                        <div className="text-4xl font-bold mb-2">
                            {skillsData.techSkills.categories.reduce((total, category) => total + category.skills.length, 0)}
                        </div>
                        <div className="text-blue-100">Technical Skills</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                        <div className="text-4xl font-bold mb-2">
                            {skillsData.techSkills.categories.length}
                        </div>
                        <div className="text-purple-100">Technology Categories</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
                        <div className="text-4xl font-bold mb-2">
                            {skillsData.softSkills.length}
                        </div>
                        <div className="text-green-100">Soft Skills</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;
