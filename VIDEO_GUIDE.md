# Video URL Guide for Portfolio Projects

## Supported Video Platforms

Your portfolio supports multiple video platforms. Here's how to format URLs for each:

### 1. YouTube Videos

**✅ Supported formats:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://youtube.com/watch?v=VIDEO_ID&other=params`

**Example:**
```json
"videoLink": "https://youtu.be/qHty9miyz94?si=mzEbfjzQdtDaY5mc"
```

### 2. Google Drive Videos

**✅ Supported formats:**
- `https://drive.google.com/file/d/FILE_ID/view`
- `https://drive.google.com/open?id=FILE_ID`

**⚠️ Important Setup for Google Drive:**

1. **Make the file public:**
   - Right-click your video file in Google Drive
   - Click "Share" → "Get link"
   - Change permission to "Anyone with the link can view"
   - Copy the shareable link

2. **Extract the file ID:**
   - From URL: `https://drive.google.com/file/d/1TcVHPMGlWXuf8tRgKJTVE-B5t6e17L4-/view?usp=sharing`
   - File ID is: `1TcVHPMGlWXuf8tRgKJTVE-B5t6e17L4-`

**Example:**
```json
"videoLink": "https://drive.google.com/file/d/1TcVHPMGlWXuf8tRgKJTVE-B5t6e17L4-/view"
```

### 3. Vimeo Videos

**✅ Supported formats:**
- `https://vimeo.com/VIDEO_ID`
- `https://player.vimeo.com/video/VIDEO_ID`

### 4. Direct Video Files

**✅ Supported formats:**
- `.mp4`, `.webm`, `.ogg`, `.mov`, `.avi` files
- Must be hosted on a publicly accessible URL

## Current Status of Your Videos

### Project 3 - Movie Revenue Prediction
- **Current URL:** `https://drive.google.com/file/d/1TcVHPMGlWXuf8tRgKJTVE-B5t6e17L4-/view`
- **Status:** ✅ Should work with updated component
- **File ID:** `1TcVHPMGlWXuf8tRgKJTVE-B5t6e17L4-`

### Project 4 - GatorCan
- **Current URL:** `https://youtu.be/qHty9miyz94?si=mzEbfjzQdtDaY5mc`
- **Status:** ✅ Should work with updated component
- **Video ID:** `qHty9miyz94`

## How the Video Player Works

1. **Embedded Player:** Videos play in a modal dialog within your portfolio
2. **Fallback Option:** "Open in new tab" button for when embedding fails
3. **Auto-format:** URLs are automatically converted to embeddable format
4. **Multiple Sources:** Supports iframe embedding and direct video playback

## Troubleshooting

### If Google Drive videos don't play:

1. **Check permissions:**
   ```bash
   # Make sure the file is public
   Right-click → Share → Anyone with the link can view
   ```

2. **Try the direct preview URL:**
   ```json
   "videoLink": "https://drive.google.com/file/d/FILE_ID/preview"
   ```

3. **Alternative: Use the open URL:**
   ```json
   "videoLink": "https://drive.google.com/open?id=FILE_ID"
   ```

### If YouTube videos don't play:

1. **Check if the video is public/unlisted** (not private)
2. **Verify the video ID is correct**
3. **Remove extra parameters and use clean URL:**
   ```json
   "videoLink": "https://youtu.be/qHty9miyz94"
   ```

### General troubleshooting:

1. **Open browser developer tools** to check for console errors
2. **Try the "Open in new tab" button** as a fallback
3. **Test the URL directly** in a new browser tab
4. **Check network tab** for failed requests

## Best Practices

### For Google Drive:
- ✅ Use high-quality video files (720p or 1080p)
- ✅ Keep file sizes reasonable (< 100MB for web)
- ✅ Use common formats (MP4 preferred)
- ✅ Test the shareable link before adding to portfolio

### For YouTube:
- ✅ Use short youtu.be URLs when possible
- ✅ Ensure videos are public or unlisted
- ✅ Remove unnecessary URL parameters
- ✅ Test video playback in incognito mode

### General:
- ✅ Always test video links after deployment
- ✅ Provide meaningful video descriptions
- ✅ Keep videos concise (2-5 minutes ideal)
- ✅ Include captions for accessibility

## Need Help?

If videos still don't work:
1. Check the browser console for errors
2. Verify the URL format matches the examples above
3. Test the video URL in a new browser tab
4. Ensure the video file permissions are correct
