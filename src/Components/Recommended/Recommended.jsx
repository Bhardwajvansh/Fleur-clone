import React from 'react';
import Pic1 from "../../Assets/06-shop-product-18.jpg";
import Pic2 from "../../Assets/01-shop-product-17.jpg";
import Pic3 from "../../Assets/06-shop-product-4.jpg";
import Pic4 from "../../Assets/06-shop-product-14.jpg";


const Recommended = () => {
    const products = [
        {
            id: 1,
            name: 'AUTUMN BOUQUET',
            price: 375,
            rating: 5,
            image: Pic1,
        },
        {
            id: 2,
            name: 'COZY ARMCHAIR',
            price: 945,
            rating: 5,
            image: Pic2,
        },
        {
            id: 3,
            name: 'FOREST FAIRY',
            price: 188,
            rating: 3,
            image: Pic3,
        },
        {
            id: 4,
            name: 'LACED DRESS',
            price: 2590,
            rating: 4,
            image: Pic4,
        }
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-4 h-4 ${index < rating ? 'text-gray-400' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto px-8 lg:px-20 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-normal text-gray-700 mb-6">RECOMMENDED PRODUCTS</h2>
                <div className="flex justify-center items-center gap-2 mb-8">
                    <div className="h-px w-12 bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="h-px w-12 bg-gray-300"></div>
                </div>
                <p className="text-gray-500 italic max-w-3xl mx-auto text-lg">
                    Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        <div className="mb-4 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-4/5 h-auto mx-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-center px-4">
                            <div className="text-left">
                                <h3 className="text-gray-700 text-xl mb-1">{product.name}</h3>
                                <p className="text-gray-600 text-lg">${product.price.toLocaleString()}</p>
                            </div>
                            <StarRating rating={product.rating} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;