import React, { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, CardContent, Typography } from '@mui/material';

const StackingCards = () => {
    const [cards] = useState([ // Removed auto-scroll card generation for clarity
        {
            id: 1,
            title: "Short CV",
            content: "With a strategic brand and digital product development background...",
            linkText: "Find regular updates on LinkedIn",
            buttonText: "Linkedin CV"
        },
        {
            id: 2,
            title: "Experience 2",
            content: "Additional professional details...",
            linkText: "More on LinkedIn",
            buttonText: "View Details"
        }
    ]);

    return (
        <div className="relative">
            {/* 1. SPACER EQUAL TO NAVBAR HEIGHT */}
            <div className="h-16"></div> {/* Match your navbar height (e.g. h-16 = 4rem = 64px) */}

            {/* 2. CARDS CONTAINER WITH CALCULATED OFFSET */}
            <div className="min-h-[150vh]"> {/* Enough space for scrolling */}
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="w-full max-w-2xl mx-auto"
                        style={{
                            position: 'sticky',
                            top: `${16 + (index * 20)}px`, // 16px = navbar height offset
                            zIndex: cards.length + index,
                            marginTop: index === 0 ? '0' : '20px',
                            transform: 'translateZ(0)' // Hardware acceleration
                        }}
                    >
                        <Card sx={{
                            backgroundColor: index === 0 ? '#fff' : '#f9f9f9',
                            boxShadow: 3,
                            borderRadius: '12px'
                        }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {card.title}
                                </Typography>
                                <Typography paragraph>{card.content}</Typography>
                                <Typography color="text.secondary" paragraph>
                                    {card.linkText}
                                </Typography>
                                <button className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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