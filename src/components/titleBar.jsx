import React, { useEffect, useState } from 'react';

const value = ["i", "it", "its", "its.", "its.w", "its.wa", "its.wae", "its.wael"]
let i = 0

function Title() {
    const [title, setTitle] = useState('Initial Title');

    useEffect(() => {
        const interval = setInterval(() => {
            setTitle(value[i]);
            i = (i+1)%value.length;
        }, 350);

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);
}

export default Title;
