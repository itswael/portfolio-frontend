// Video URL utilities for handling different video platforms

/**
 * Converts various video URL formats to embeddable URLs
 * Supports YouTube, Google Drive, Vimeo, and direct video files
 */

export const getEmbeddableVideoUrl = (url) => {
  if (!url) return null;

  // YouTube URL patterns
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  
  if (youtubeMatch) {
    const videoId = youtubeMatch[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  }

  // Google Drive URL patterns
  const driveRegex = /(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([a-zA-Z0-9_-]+)/;
  const driveMatch = url.match(driveRegex);
  
  if (driveMatch) {
    const fileId = driveMatch[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  // Vimeo URL patterns
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
  const vimeoMatch = url.match(vimeoRegex);
  
  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }

  // Direct video file URLs (mp4, webm, etc.)
  if (url.match(/\.(mp4|webm|ogg|mov|avi)(\?.*)?$/i)) {
    return url;
  }

  // If no pattern matches, return the original URL
  return url;
};

/**
 * Checks if a URL is a direct video file
 */
export const isDirectVideoFile = (url) => {
  if (!url) return false;
  return url.match(/\.(mp4|webm|ogg|mov|avi)(\?.*)?$/i) !== null;
};

/**
 * Gets the video platform name from URL
 */
export const getVideoPlatform = (url) => {
  if (!url) return 'unknown';
  
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  
  if (url.includes('drive.google.com')) {
    return 'google-drive';
  }
  
  if (url.includes('vimeo.com')) {
    return 'vimeo';
  }
  
  if (isDirectVideoFile(url)) {
    return 'direct';
  }
  
  return 'unknown';
};

/**
 * Creates a fallback link for when embedding fails
 */
export const getFallbackVideoLink = (url) => {
  const platform = getVideoPlatform(url);
  
  switch (platform) {
    case 'google-drive':
      // Convert to view link for Google Drive
      const driveRegex = /(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([a-zA-Z0-9_-]+)/;
      const driveMatch = url.match(driveRegex);
      if (driveMatch) {
        const fileId = driveMatch[1];
        return `https://drive.google.com/file/d/${fileId}/view`;
      }
      return url;
    
    case 'youtube':
      return url;
    
    case 'vimeo':
      return url;
    
    default:
      return url;
  }
};
