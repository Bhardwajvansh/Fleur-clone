import React, { useState, useEffect } from 'react';
import logo1 from "../../Assets/12-client-1.png"
import logo2 from "../../Assets/12-client-2.png"
import logo3 from "../../Assets/12-client-3.png"
import logo4 from "../../Assets/12-client-4.png"
import logo5 from "../../Assets/12-client-5.png"
import logo6 from "../../Assets/01-client-6.png"
import logo7 from "../../Assets/01-client-7.png"

const Clients = () => {
    const clients = [
        { name: 'Winter Frost', logo: logo1 },
        { name: 'Retro People', logo: logo2 },
        { name: 'Emma Bradberry', logo: logo3 },
        { name: 'Rebecca Photography', logo: logo4 },
        { name: 'Anna Grey Florist', logo: logo5 },
        // { name: 'Sammy Florist', logo: logo6 },
        { name: 'Monk Videography', logo: logo7 }

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    (prevIndex + 1) % (clients.length - 4)
                );
                setIsTransitioning(false);
            }, 500);
        }, 4000);
        return () => clearInterval(timer);
    }, [clients.length]);

    return (
        <div className="py-40 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-gray-700 mb-6">OUR CLIENTS</h2>
                    <div className="flex justify-center items-center gap-2 mb-8">
                        <div className="h-px w-12 bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="h-px w-12 bg-gray-300"></div>
                    </div>
                    <p className="text-gray-500 italic max-w-5xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibis sed odio sit amet nibh
                    </p>
                </div>
                <div className="relative overflow-hidden">
                    <div
                        className={`flex justify-center gap-16 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        {clients.slice(currentIndex, currentIndex + 5).map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="w-[200px] flex items-center justify-center"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w- h-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
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