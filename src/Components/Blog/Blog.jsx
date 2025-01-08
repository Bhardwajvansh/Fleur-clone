import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Img1 from "../../Assets/blog-post-img-9-600x720.jpeg";
import Img2 from "../../Assets/blog-post-img-10-600x720.jpeg";
import Img3 from "../../Assets/blog-post-img-11-600x720.jpeg";
import Img4 from "../../Assets/blog-post-img-12-600x720.jpeg";
import Bg from "../../Assets/h1-img-1.jpeg";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "SOMETHING SPECIAL",
            category: "Planning",
            date: "April 24, 2028",
            image: Img1,
            description: "Proin gravida nibh vel veliauctor aliquenean sollicitudin quis bibendum auctor, nisi elit consequat ipsum..."
        },
        {
            id: 2,
            title: "CONNECT YOUR WORLDS",
            category: "Fashion",
            date: "January 24, 2028",
            image: Img2,
            description: "Proin gravida nibh vel veliauctor aliquenean sollicitudin quis bibendum auctor, nisi elit consequat ipsum..."
        },
        {
            id: 3,
            title: "CHOOSE YOUR STYLE",
            category: "Decoration",
            date: "February 24, 2028",
            image: Img3,
            description: "Proin gravida nibh vel veliauctor aliquenean sollicitudin quis bibendum auctor, nisi elit consequat ipsum..."
        },
        {
            id: 4,
            title: "PERFECT MOMENTS",
            category: "Wedding",
            date: "March 24, 2028",
            image: Img4,
            description: "Proin gravida nibh vel veliauctor aliquenean sollicitudin quis bibendum auctor, nisi elit consequat ipsum..."
        },
        {
            id: 6,
            title: "CHOOSE YOUR STYLE",
            category: "Decoration",
            date: "February 24, 2028",
            image: Img3,
            description: "Proin gravida nibh vel veliauctor aliquenean sollicitudin quis bibendum auctor, nisi elit consequat ipsum..."
        },
        {
            id: 5,
            title: "CONNECT YOUR WORLDS",
            category: "Fashion",
            date: "January 24, 2028",
            image: Img2,
            description: "Proin gravida nibh vel veliauctor aliquenean sollicitudin quis bibendum auctor, nisi elit consequat ipsum..."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, isMobile, isPaused]);

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const increment = isMobile ? 1 : 3;
                const maxIndex = isMobile ? posts.length - 1 : posts.length - 3;
                return prevIndex >= maxIndex ? 0 : prevIndex + increment;
            });
            setIsTransitioning(false);
        }, 300);
    };

    const visiblePosts = isMobile
        ? [posts[currentIndex]]
        : posts.slice(currentIndex, currentIndex + 3);

    return (
        <section className="relative overflow-hidden">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Bg})`,
                }}
            />
            <div className="absolute inset-0 bg-white/40 -z-10"></div>

            <div className="relative z-10 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">WE'RE SHARING EVERYTHING</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="h-px w-12 bg-gray-800"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                            <div className="h-px w-12 bg-gray-800"></div>
                        </div>
                        <p className="text-gray-600 italic">
                            Lorem ipsum dolor sit amet, consectetur a gravida nibhuam vel velit auctor aliquet aenean sollicitudin lorem.
                        </p>
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            {visiblePosts.map((post) => (
                                <div key={post.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="relative aspect-[4/5]">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">{post.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="italic">{post.category}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
                        >
                            <ArrowRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
