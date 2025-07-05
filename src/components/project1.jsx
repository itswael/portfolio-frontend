import React, { useState, useEffect, useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, CardContent, Typography } from '@mui/material';
import projectsData from '../data/projectsData.json'

const StackingCards = () => {
    const [cards] = useState(projectsData.projects);

    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            {/* Section Title */}
            <div className="text-center  bg-gray-50">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills in full-stack development,
                    user experience design, and modern web technologies.
                </p>
            </div>

            {/* Stacking Cards Container */}
            <div className=" relative bg-white">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="w-1/2 mx-auto" // 50% of viewport width, centered
                        style={{
                            position: 'sticky',
                            top: `${180}px`, // Start below navbar (220px) + stacking offset
                            zIndex: 40 + index, // Decreasing z-index for proper stacking (navbar is z-50)
                            marginTop: index === 0 ? '50px' : '30px', // Space from top for first card
                        }}
                    >
                        <Card
                            sx={{
                                backgroundColor: `hsl(${220 + (index * 15)}, 15%, ${95 - (index * 2)}%)`,
                                boxShadow: `0 ${4 + (index * 2)}px ${20 + (index * 5)}px rgba(0,0,0,0.1)`,
                                borderRadius: '16px',
                                transform: `scale(${1 - (index * 0.02)})`, // Slight scale down for depth
                                transformOrigin: 'center top',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(0,0,0,0.1)',
                                minHeight: '400px'
                            }}
                            className="hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardContent className="p-8">
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    className="font-bold text-gray-800 mb-4"
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    paragraph
                                    className="text-gray-700 text-lg leading-relaxed mb-6"
                                >
                                    {card.content}
                                </Typography>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <Typography variant="h6" className="font-semibold text-gray-800 mb-3">
                                        Technologies Used:
                                    </Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {card.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Typography
                                    color="text.secondary"
                                    paragraph
                                    className="text-gray-600 mb-4"
                                >
                                    {card.linkText}
                                </Typography>
                                <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    <LinkedInIcon fontSize="small" />
                                    {card.buttonText}
                                </button>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StackingCards;