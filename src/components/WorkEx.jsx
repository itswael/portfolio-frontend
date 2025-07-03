import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Tabs, Tab, Fade, IconButton } from '@mui/material';
import { Work, School, Timeline, FilterList } from '@mui/icons-material';
import TimelineItem from './TimelineItem';
import timelineData from '../data/timelineData.json';

const WorkEx = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [filteredData, setFilteredData] = useState(timelineData.timeline);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        let filtered = timelineData.timeline;
        
        if (selectedTab === 1) {
            filtered = timelineData.timeline.filter(item => item.type === 'work');
        } else if (selectedTab === 2) {
            filtered = timelineData.timeline.filter(item => item.type === 'education');
        }
        
        setFilteredData(filtered);
        setAnimationKey(prev => prev + 1);
    }, [selectedTab]);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const getTabIcon = (index) => {
        switch (index) {
            case 0: return <Timeline />;
            case 1: return <Work />;
            case 2: return <School />;
            default: return <Timeline />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <Container maxWidth="lg">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <Typography 
                        variant="h2" 
                        className="font-bold text-gray-800 mb-4"
                        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
                    >
                        My Professional Journey
                    </Typography>
                    <Typography 
                        variant="h6" 
                        className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                    >
                        A comprehensive timeline of my career growth, educational milestones, and 
                        the technologies that have shaped my professional development.
                    </Typography>
                </div>

                {/* Filter Tabs */}
                <Box className="mb-16">
                    <div className="flex justify-center">
                        <div className="bg-white rounded-2xl p-2 shadow-lg">
                            <Tabs
                                value={selectedTab}
                                onChange={handleTabChange}
                                variant="standard"
                                sx={{
                                    minHeight: '60px',
                                    '& .MuiTab-root': {
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        minHeight: '56px',
                                        borderRadius: '12px',
                                        margin: '0 4px',
                                        minWidth: '160px',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        color: '#6B7280',
                                        '&:hover': {
                                            backgroundColor: '#F3F4F6',
                                            color: '#374151',
                                            transform: 'translateY(-1px)',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: '#3B82F6',
                                            color: 'white',
                                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                                            transform: 'translateY(-1px)',
                                        }
                                    },
                                    '& .MuiTabs-indicator': {
                                        display: 'none',
                                    }
                                }}
                            >
                                <Tab
                                    icon={getTabIcon(0)}
                                    label="All Journey"
                                    iconPosition="start"
                                />
                                <Tab
                                    icon={getTabIcon(1)}
                                    label="Work Experience"
                                    iconPosition="start"
                                />
                                <Tab
                                    icon={getTabIcon(2)}
                                    label="Education"
                                    iconPosition="start"
                                />
                            </Tabs>
                        </div>
                    </div>
                </Box>

                {/* Timeline Content */}
                <Fade in={true} timeout={600} key={animationKey}>
                    <div className="relative">
                        {/* Timeline stats */}
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

                        {/* Timeline Items */}
                        <div className="relative max-w-4xl mx-auto">
                            {filteredData.map((item, index) => (
                                <TimelineItem
                                    key={`${item.id}-${animationKey}`}
                                    item={item}
                                    index={index}
                                    isLast={index === filteredData.length - 1}
                                />
                            ))}
                        </div>

                        {/* Bottom decoration */}
                        <div className="text-center mt-16">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <span className="text-white text-3xl">🚀</span>
                            </div>
                            <Typography 
                                variant="h5" 
                                className="mt-6 text-gray-700 font-semibold"
                            >
                                Ready for the next adventure
                            </Typography>
                            <Typography 
                                variant="body1" 
                                className="mt-2 text-gray-500"
                            >
                                Let's build something amazing together
                            </Typography>
                        </div>
                    </div>
                </Fade>
            </Container>
        </div>
    );
};

export default WorkEx;