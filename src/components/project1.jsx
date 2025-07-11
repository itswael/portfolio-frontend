import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Dialog, DialogContent, IconButton, Chip, Button } from '@mui/material';
import { GitHub, PlayArrow, Launch, Close, ArrowBackIos, ArrowForwardIos, OpenInNew } from '@mui/icons-material';
import projectsData from '../data/projectsData.json';
import { getEmbeddableVideoUrl, isDirectVideoFile, getVideoPlatform, getFallbackVideoLink } from '../utils/videoUtils';
import { componentStyles, cn } from '../theme';

const StackingCards = () => {
    const [cards] = useState(projectsData.projects);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [currentScreenshots, setCurrentScreenshots] = useState([]);
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
    const [hoveredCardId, setHoveredCardId] = useState(null);

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

    // Handler functions
    const handleVideoOpen = (videoUrl) => {
        const embeddableUrl = getEmbeddableVideoUrl(videoUrl);
        setCurrentVideoUrl(embeddableUrl);
        setVideoModalOpen(true);
    };

    const handleVideoClose = () => {
        setVideoModalOpen(false);
        setCurrentVideoUrl('');
    };

    const handleVideoFallback = (originalUrl) => {
        const fallbackUrl = getFallbackVideoLink(originalUrl);
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    };

    const handleScreenshotNavigation = (direction, screenshots) => {
        if (direction === 'next') {
            setCurrentScreenshotIndex((prev) => 
                prev === screenshots.length - 1 ? 0 : prev + 1
            );
        } else {
            setCurrentScreenshotIndex((prev) => 
                prev === 0 ? screenshots.length - 1 : prev - 1
            );
        }
    };

    const ActionButton = ({ icon, onClick, color = 'primary', tooltip }) => {
        const colorMap = {
            primary: {
                bg: '#3B82F6',
                bgHover: '#2563EB'
            },
            secondary: {
                bg: '#10B981',
                bgHover: '#059669'
            },
            tertiary: {
                bg: '#F59E0B',
                bgHover: '#D97706'
            }
        };

        const colors = colorMap[color] || colorMap.primary;

        return (
            <IconButton
                onClick={onClick}
                sx={{
                    backgroundColor: colors.bg,
                    color: 'white',
                    width: 48,
                    height: 48,
                    margin: '0 8px',
                    '&:hover': {
                        backgroundColor: colors.bgHover,
                        transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
                title={tooltip}
            >
                {icon}
            </IconButton>
        );
    };

    return (
        <div id="projects" ref={containerRef} className="relative bg-gray-50 py-8">
            <div className={cn(componentStyles.layout.container, "px-6")}>
            <div className="mb-16" style={{ textAlign: 'center' }}>
                                <Typography 
                                    variant="h2" 
                                    className={cn(componentStyles.heading.h2, "mb-4")}
                                    align="center"
                                    sx={{ 
                                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                                        textAlign: 'center !important',
                                        width: '100%',
                                        display: 'block'
                                    }}
                                >
                                    Featured Projects
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    className={componentStyles.text.muted}
                                    align="center"
                                    sx={{ 
                                        fontSize: { xs: '1rem', md: '1.25rem' },
                                        textAlign: 'center !important',
                                        maxWidth: '768px',
                                        margin: '0 auto',
                                        display: 'block'
                                    }}
                                >
                                    Here are some of my recent projects that showcase my skills in full-stack development,
                                    user experience design, and modern web technologies.
                                </Typography>
                            </div>
            {/* Section Title */}

            {/* Stacking Cards Container */}
            <div className="relative bg-gray-50  rounded-2xl">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className=" mx-auto" // 50% of viewport width, centered
                        style={{
                            position: 'sticky',
                            top: `${130}px`, // Start below navbar (220px) + stacking offset
                            zIndex: 40 + index, // Decreasing z-index for proper stacking (navbar is z-50)
                            marginTop: index === 0 ? '50px' : '40px', // Space from top for first card
                        }}
                    >
                        <Card
                            onMouseEnter={() => setHoveredCardId(card.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                            sx={{
                                backgroundColor: 'white',
                                boxShadow: hoveredCardId === card.id 
                                    ? `0 20px 60px rgba(59, 130, 246, 0.4), 0 ${4 + (index * 2)}px ${20 + (index * 5)}px rgba(0,0,0,0.15)`
                                    : `0 ${4 + (index * 2)}px ${20 + (index * 5)}px rgba(0,0,0,0.12)`,
                                borderRadius: '16px',
                                transformOrigin: 'center top',
                                transition: 'all 0.4s ease',
                                border: hoveredCardId === card.id 
                                    ? '1px solid rgba(59, 130, 246, 0.3)'
                                    : '1px solid rgba(0,0,0,0.08)',
                                
                                minHeight: '75vh',
                                cursor: 'pointer'
                            }}
                            className={cn(componentStyles.card.base, "transition-all duration-400")}
                        >
                            <CardContent className="p-8">
                                {/* Project Title with Tech Tags */}
                                <div className="flex flex-wrap items-center justify-between mb-6">
                                    <Typography
                                        variant="h4"
                                        className={cn(componentStyles.heading.h3, "mb-2 sm:mb-0")}
                                    >
                                        {card.title}
                                    </Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {card.tech.map((tech, techIndex) => (
                                            <Chip
                                                key={techIndex}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: `hsl(${220 + (techIndex * 20)}, 60%, 95%)`,
                                                    color: `hsl(${220 + (techIndex * 20)}, 80%, 40%)`,
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Two Column Layout */}
                                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                                    {/* Left Column - 40% (2/5) */}
                                    <div className="lg:col-span-3">
                                        {/* Description */}
                                        <Typography
                                            paragraph
                                            className={cn(componentStyles.text.bodyLarge, "mb-6")}
                                        >
                                            {card.description}
                                        </Typography>

                                        {/* Key Features/Highlights */}
                                        <div className="mb-6">
                                            <Typography variant="h6" className={cn(componentStyles.heading.h5, "mb-3")}>
                                                Key Features:
                                            </Typography>
                                            <ul className="space-y-2">
                                                {card.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className={cn(componentStyles.icon.primary, "mr-3 mt-1")}>•</span>
                                                        <span className={cn(componentStyles.text.bodySmall, "leading-relaxed")}>
                                                            {highlight}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex justify-center items-center mt-8">
                                            {card.githubLink && <ActionButton
                                                icon={<GitHub />}
                                                onClick={() => window.open(card.githubLink, '_blank')}
                                                color="primary"
                                                tooltip="View GitHub Repository"
                                            />}
                                            {card.videoLink && <ActionButton
                                                icon={<PlayArrow />}
                                                onClick={() => handleVideoOpen(card.videoLink)}
                                                color="secondary"
                                                tooltip="Watch Demo Video"
                                            />}
                                            {card.liveLink && <ActionButton
                                                icon={<Launch />}
                                                onClick={() => window.open(card.liveLink, '_blank')}
                                                color="tertiary"
                                                tooltip="View Live Site"
                                            />}
                                        </div>
                                    </div>

                                    {/* Right Column - 60% (3/5) - Screenshot Carousel */}
                                    <div className="lg:col-span-3">
                                        <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                                            {/* Carousel Container */}
                                            <div className="relative h-80 lg:h-96">
                                                {/* Main Screenshot */}
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                                                    {card.screenshots && card.screenshots.length > 0 ? (
                                                        <img 
                                                            src={card.screenshots[currentScreenshotIndex]} 
                                                            alt={`${card.title} screenshot ${currentScreenshotIndex + 1}`}
                                                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                    ) : null}
                                                    {/* Placeholder when image fails to load */}
                                                    <div className="hidden w-full h-full flex-col items-center justify-center text-gray-500">
                                                        <div className="text-6xl mb-4">🖥️</div>
                                                        <Typography variant="h6" className="text-gray-600">
                                                            Screenshot Preview
                                                        </Typography>
                                                        <Typography variant="body2" className="text-gray-500 mt-2">
                                                            {card.title}
                                                        </Typography>
                                                    </div>
                                                </div>

                                                {/* Navigation Arrows */}
                                                {card.screenshots && card.screenshots.length > 1 && (
                                                    <>
                                                        <IconButton
                                                            onClick={() => handleScreenshotNavigation('prev', card.screenshots)}
                                                            sx={{
                                                                position: 'absolute',
                                                                left: 8,
                                                                top: '50%',
                                                                transform: 'translateY(-50%)',
                                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                                '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                                                            }}
                                                        >
                                                            <ArrowBackIos />
                                                        </IconButton>
                                                        <IconButton
                                                            onClick={() => handleScreenshotNavigation('next', card.screenshots)}
                                                            sx={{
                                                                position: 'absolute',
                                                                right: 8,
                                                                top: '50%',
                                                                transform: 'translateY(-50%)',
                                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                                '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                                                            }}
                                                        >
                                                            <ArrowForwardIos />
                                                        </IconButton>
                                                    </>
                                                )}
                                            </div>

                                            {/* Thumbnail Indicators */}
                                            {card.screenshots && card.screenshots.length > 1 && (
                                                <div className="flex justify-center space-x-2 py-4 bg-white">
                                                    {card.screenshots.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentScreenshotIndex(idx)}
                                                            className={cn(
                                                                "w-3 h-3 rounded-full transition-all duration-200",
                                                                idx === currentScreenshotIndex
                                                                    ? 'bg-blue-500 scale-125'
                                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            <Dialog
                open={videoModalOpen}
                onClose={handleVideoClose}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'visible'
                    }
                }}
            >
                <DialogContent sx={{ padding: 0, position: 'relative' }}>
                    <IconButton
                        onClick={handleVideoClose}
                        sx={{
                            position: 'absolute',
                            right: -40,
                            top: -40,
                            backgroundColor: 'white',
                            zIndex: 1,
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <Close />
                    </IconButton>
                    
                    <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                        {isDirectVideoFile(currentVideoUrl) ? (
                            <video
                                controls
                                autoPlay
                                className="absolute top-0 left-0 w-full h-full"
                                onError={() => {
                                    console.error('Video failed to load');
                                }}
                            >
                                <source src={currentVideoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <iframe
                                src={currentVideoUrl}
                                title="Project Demo Video"
                                frameBorder="0"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="absolute top-0 left-0 w-full h-full"
                                onError={() => {
                                    console.error('Iframe failed to load');
                                }}
                            />
                        )}
                        
                        {/* Fallback button overlay */}
                        <div className="absolute bottom-4 right-4">
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={<OpenInNew />}
                                onClick={() => handleVideoFallback(currentVideoUrl)}
                                sx={{
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.9)'
                                    }
                                }}
                            >
                                Open in new tab
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            </div>
        </div>
    );
};

export default StackingCards;