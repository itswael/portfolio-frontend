import React, { useState } from 'react';
import { Card, CardContent, Typography, Chip, Box, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess, Work, School, LocationOn, CalendarToday } from '@mui/icons-material';

const TimelineItem = ({ item, index, isLast }) => {
    const [expanded, setExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getTypeColor = (type) => {
        return type === 'work' ? '#3B82F6' : '#8B5CF6';
    };

    const getTypeIcon = (type) => {
        return type === 'work' ? <Work /> : <School />;
    };

    return (
        <div className="relative flex items-start mb-8">
            {/* Timeline line - only show if not last item */}
            {!isLast && (
                <div 
                    className="absolute left-8 top-20 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"
                    style={{ height: 'calc(100% + 2rem)' }}
                ></div>
            )}
            
            {/* Timeline dot */}
            <div 
                className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg border-4 mr-6 transition-all duration-300 ${
                    item.type === 'work' 
                        ? 'bg-blue-500 border-blue-200' 
                        : 'bg-purple-500 border-purple-200'
                }`}
                style={{
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
            >
                <div className="text-white text-xl">{getTypeIcon(item.type)}</div>
            </div>

            {/* Content card */}
            <div className="flex-1 min-w-0">
                <Card 
                    className="cursor-pointer transition-all duration-500 ease-in-out"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleExpandClick}
                    sx={{
                        borderRadius: '16px',
                        background: 'white',
                        border: `2px solid ${getTypeColor(item.type)}20`,
                        position: 'relative',
                        overflow: 'hidden',
                        transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: isHovered 
                            ? `0 12px 40px ${getTypeColor(item.type)}30` 
                            : '0 4px 20px rgba(0,0,0,0.1)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: `linear-gradient(90deg, ${getTypeColor(item.type)}, ${getTypeColor(item.type)}80)`,
                        }
                    }}
                >
                    <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <Typography 
                                    variant="h5" 
                                    className="font-bold text-gray-800 mb-2"
                                    sx={{ 
                                        fontSize: '1.5rem',
                                        lineHeight: '1.3'
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    className="text-gray-600 mb-3"
                                    sx={{ 
                                        fontSize: '1.1rem',
                                        fontWeight: 500
                                    }}
                                >
                                    {item.organization}
                                </Typography>
                            </div>
                            <IconButton 
                                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                sx={{
                                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            >
                                <ExpandMore />
                            </IconButton>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center text-gray-600">
                                <CalendarToday className="w-4 h-4 mr-2" />
                                <span className="font-medium">{item.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <LocationOn className="w-4 h-4 mr-2" />
                                <span className="font-medium">{item.location}</span>
                            </div>
                            <Chip
                                label={item.type === 'work' ? 'Work Experience' : 'Education'}
                                size="small"
                                sx={{
                                    backgroundColor: `${getTypeColor(item.type)}15`,
                                    color: getTypeColor(item.type),
                                    fontWeight: 'bold',
                                    border: `1px solid ${getTypeColor(item.type)}30`
                                }}
                            />
                        </div>

                        {/* Description preview */}
                        <Typography 
                            variant="body1" 
                            className="text-gray-700 mb-4"
                            sx={{ 
                                fontSize: '1rem',
                                lineHeight: '1.6'
                            }}
                        >
                            {item.description}
                        </Typography>

                        {/* Technologies */}
                        {item.technologies && item.technologies.length > 0 && (
                            <Box className="mb-4">
                                <Typography 
                                    variant="subtitle2" 
                                    className="text-gray-600 mb-2 font-semibold"
                                >
                                    Technologies & Skills:
                                </Typography>
                                <div className="flex flex-wrap gap-2">
                                    {item.technologies.slice(0, expanded ? item.technologies.length : 4).map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#F3F4F6',
                                                color: '#374151',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    backgroundColor: `${getTypeColor(item.type)}20`,
                                                    color: getTypeColor(item.type)
                                                }
                                            }}
                                        />
                                    ))}
                                    {!expanded && item.technologies.length > 4 && (
                                        <Chip
                                            label={`+${item.technologies.length - 4} more`}
                                            size="small"
                                            sx={{
                                                backgroundColor: `${getTypeColor(item.type)}20`,
                                                color: getTypeColor(item.type),
                                                fontSize: '0.75rem',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    )}
                                </div>
                            </Box>
                        )}

                        {/* Expandable content */}
                        <Collapse in={expanded} timeout={400} unmountOnExit>
                            <Box className="mt-4 pt-4 border-t border-gray-200">
                                {item.achievements && item.achievements.length > 0 && (
                                    <div className="mb-4">
                                        <Typography 
                                            variant="subtitle2" 
                                            className="text-gray-700 mb-2 font-semibold"
                                        >
                                            Key Achievements:
                                        </Typography>
                                        <ul className="space-y-2">
                                            {item.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                                    <Typography 
                                                        variant="body2" 
                                                        className="text-gray-700"
                                                        sx={{ lineHeight: '1.6' }}
                                                    >
                                                        {achievement}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </Box>
                        </Collapse>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TimelineItem;
