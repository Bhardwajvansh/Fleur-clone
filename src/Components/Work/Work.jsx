import React, { useState } from 'react';
import Img1 from "../../Assets/05-port2-img-1-650x650.jpg";
import Img2 from "../../Assets/05-port2-img-2-650x650.jpg";
import Img3 from "../../Assets/05-port2-img-3-650x650.jpg";
import Img4 from "../../Assets/05-port2-img-4-650x650.jpg";
import Img5 from "../../Assets/05-fashion-port-img-4-650x650.jpg";
import Img6 from "../../Assets/05-port4-img-6-650x650.jpg";
import Img7 from "../../Assets/05-port4-img-7-650x650.jpg";
import Img8 from "../../Assets/05-port4-img-8-650x650.jpg";
import Bg from "../../Assets/h1-parallax-1.jpeg"


const Work = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');

    const categories = ['ALL', 'ARTISTIC', 'MODERN', 'PHOTOGRAPHY', 'PRINT'];

    const images = [
        {
            id: 1,
            src: Img1,
            category: ['ARTISTIC', 'PHOTOGRAPHY'],
            alt: "Wedding hair accessories"
        },
        {
            id: 2,
            src: Img2,
            category: ['MODERN'],
            alt: "Blue tufted sofa"
        },
        {
            id: 3,
            src: Img3,
            category: ['ARTISTIC'],
            alt: "Lace detail"
        },
        {
            id: 4,
            src: Img4,
            category: ['MODERN', 'PHOTOGRAPHY'],
            alt: "Table setting"
        },
        {
            id: 5,
            src: Img5,
            category: ['PHOTOGRAPHY'],
            alt: "Bouquet on chair"
        },
        {
            id: 6,
            src: Img6,
            category: ['MODERN', 'PRINT'],
            alt: "Winter coat"
        },
        {
            id: 7,
            src: Img7,
            category: ['PHOTOGRAPHY'],
            alt: "Outdoor setting"
        },
        {
            id: 8,
            src: Img8,
            category: ['ARTISTIC', 'MODERN'],
            alt: "Fashion detail"
        }
    ];

    const filteredImages = activeFilter === 'ALL'
        ? images
        : images.filter(img => img.category.includes(activeFilter));

    return (
        <div className="container mx-auto px-4 md:px-24 py-16" style={{backgroundImage:`url(${Bg})`}}>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-700 mb-6">OUR AMAZING WORK</h2>
                <div className="flex justify-center items-center gap-2 mb-8">
                    <div className="h-px w-12 bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="h-px w-12 bg-gray-300"></div>
                </div>
                <p className="text-gray-500 italic max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-6 py-2 transition-all duration-300 
              ${activeFilter === category
                                ? 'text-teal-800 border-b-2 underline'
                                : 'text-gray-600'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredImages.map(image => (
                    <div
                        key={image.id}
                        className="relative group overflow-hidden"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-violet-900 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                                <button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-violet-900 hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;