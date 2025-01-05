import React, { useState, useEffect } from 'react';
import "./Testimonials.css"

const testimonials = [
    {
        quote: "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        author: "Sarah Chen",
        position: "Technical Director"
    },
    {
        quote: "Nam nec tellus a odio tincidunt auctor a ornare odio. Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit. ",
        author: "Marcus Rodriguez",
        position: "Product Manager"
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        author: "Emily Watson",
        position: "Operations Lead"
    }
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full px-2 sm:px-4 py-32 testi-container" style={{ color: "#4a3e5a" }}>
            <h2 className="text-4xl text-center mb-12">TESTIMONIALS</h2>
            <div className="flex justify-center items-center gap-2 mb-8">
                <div className="h-px w-12" style={{ background: "#4a3e5a" }}></div>
                <div className="w-2 h-2 rounded-full" style={{ background: "#4a3e5a" }}></div>
                <div className="h-px w-12" style={{ background: "#4a3e5a" }}></div>
            </div>
            <div className="w-2/3 mx-auto p-2 rounded-lg">
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg italic mb-6 leading-relaxed">
                        "{testimonials[currentIndex].quote}"
                    </p>

                    <div className="mt-4">
                        <p className="font-semibold text-lg">
                            {testimonials[currentIndex].author}
                        </p>
                        <p className="text-gray-500">
                            {testimonials[currentIndex].position}
                        </p>
                    </div>

                    <div className="flex gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TestimonialCarousel;