import React, { useEffect, useState } from 'react';

function Home() {
    const [designation, setDesignation] = useState('MTS');
    const fullDesignation = 'Web Developer';

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < fullDesignation.length-1) {
                setDesignation((prevDesignation) => prevDesignation + fullDesignation[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(typingInterval); // Stop typing animation when done
            }
        }, 100); // Adjust the interval for typing speed (in milliseconds)

        return () => {
            clearInterval(typingInterval); // Cleanup on component unmount
        };
    }, []);

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="display-4">Your Name</h1>
                <p className="lead">
                    {designation}
                    <span className="blink-cursor">|</span>
                </p>
            </div>
        </div>
    );
}

export default Home;
