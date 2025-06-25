import React, { useEffect, useState } from 'react';

const value = ["i", "it", "its", "its.", "its.w", "its.wa", "its.wae", "its.wael"]
let i = 0

function Title() {
    const [title, setTitle] = useState('Initial Title');

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the title with dynamic data, e.g., current time
            setTitle(value[i]);
            i = (i+1)%value.length;
        }, 350); // 10ms interval

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    useEffect(() => {
        // Update the actual document title when the state changes
        document.title = title;
    }, [title]); // Dependency array ensures the effect runs when 'title' state changes

    return (
        <div>
            <h1>Dynamic Title Example</h1>
            <p>The title bar is updating every 10ms with the current time.</p>
        </div>
    );
}

export default Title;
