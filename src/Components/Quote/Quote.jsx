import React from 'react';
import Bg from '../../Assets/h1-parallax-1.jpeg';

const Quote = () => {
    return (
        <div
            className="h-48   bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-serif italic text-gray-800">
                    Less is definitely more.
                </h1>
            </div>
        </div>
    );
};

export default Quote;