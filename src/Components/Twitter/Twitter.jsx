import React, { useEffect, useState } from 'react';
import bg from "../../Assets/h1-parallax-3.jpg"

const TwitterParallax = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('parallax-container');
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                if (elementTop <= window.innerHeight && elementTop >= -rect.height) {
                    setOffset(elementTop * 0.4);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="parallax-container" className="relative h-[60vh] overflow-hidden">
            <div
                className="absolute inset-0 w-full h-[130%] -top-[15%]"
                style={{
                    transform: `translateY(${offset}px)`,
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-white space-y-6">
                <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <h2 className="text-5xl font-light tracking-wide">
                    LATEST TWEETS
                </h2>
                <div className="flex justify-center items-center gap-2 mb-8">
                    <div className="h-px w-12" style={{ background: "white" }}></div>
                    <div className="w-2 h-2 rounded-full" style={{ background: "white" }}></div>
                    <div className="h-px w-12" style={{ background: "white" }}></div>
                </div>
                <p className="text-sm text-slate-800">
                    Couldn't connect with Twitter
                </p>
            </div>
        </div>
    );
};

export default TwitterParallax;