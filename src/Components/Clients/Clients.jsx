import React, { useState, useEffect } from 'react';
import logo1 from "../../Assets/12-client-1.png"
import logo2 from "../../Assets/12-client-2.png"
import logo3 from "../../Assets/12-client-3.png"
import logo4 from "../../Assets/12-client-4.png"
import logo5 from "../../Assets/12-client-5.png"
// import logo6 from "../../Assets/01-client-6.png"
import logo7 from "../../Assets/01-client-7.png"


const Clients = () => {
    const clients = [
        { name: 'Winter Frost', logo: logo1 },
        { name: 'Retro People', logo: logo2 },
        { name: 'Emma Bradberry', logo: logo3 },
        { name: 'Rebecca Photography', logo: logo4 },
        { name: 'Anna Grey Florist', logo: logo5 },
        { name: 'Monk Videography', logo: logo7 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Carousel animation
    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    const maxItems = isMobile ? clients.length : clients.length - 4;
                    return (prevIndex + 1) % maxItems;
                });
                setIsTransitioning(false);
            }, 500);
        }, 4000);

        return () => clearInterval(timer);
    }, [clients.length, isMobile]);

    const displayedClients = isMobile
        ? [clients[currentIndex]]
        : clients.slice(currentIndex, currentIndex + 5);

    return (
        <div className="py-20 md:py-40 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl text-gray-700 mb-4 md:mb-6">OUR CLIENTS</h2>
                    <div className="flex justify-center items-center gap-2 mb-4 md:mb-8">
                        <div className="h-px w-12 bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="h-px w-12 bg-gray-300"></div>
                    </div>
                    <p className="text-gray-500 italic max-w-5xl mx-auto text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibis sed odio sit amet nibh
                    </p>
                </div>
                <div className="relative overflow-hidden">
                    <div
                        className={`flex justify-center gap-4 md:gap-16 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        {displayedClients.map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="w-[250px] md:w-[200px] flex items-center justify-center"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;