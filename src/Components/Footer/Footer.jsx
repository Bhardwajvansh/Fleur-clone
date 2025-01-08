import React from 'react';
import { Send } from 'lucide-react';
import Logo from "../../Assets/01-logo-light.png";

const Footer = () => {
    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'PORTFOLIO', href: '/portfolio' },
        { name: 'BLOG', href: '/blog' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <footer className="text-gray-300 pt-16 md:pt-32" style={{ backgroundColor: '#3A3740' }}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h2 className="text-white text-xl font-medium mb-4 md:mb-6">ABOUT US</h2>
                        <p className="text-white text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo errem partiendo ex cum.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-medium mb-4 md:mb-6">SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <div className="flex max-w-md">
                            <input
                                type="email"
                                placeholder="Enter Your Email*"
                                className="flex-1 text-gray-300 px-4 py-2 focus:outline-none"
                                style={{ backgroundColor: '#34313A' }}
                            />
                            <button className="bg-gray-600 px-4 py-2 hover:bg-gray-500 transition-colors">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-medium mb-4 md:mb-6">LATEST TWEETS</h2>
                        <p className="text-white text-sm md:text-base">Couldn't connect with Twitter</p>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-white text-xl font-medium mb-4 md:mb-6">INSTAGRAM</h2>
                </div>
            </div>

            <div className="mt-16 md:mt-20" >
                <div style={{ borderTop: "0.01px solid white" }} className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img src={Logo} className="w-1/2 mx-auto md:w-1/3" alt="Logo" />
                    </div>
                    <nav className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="text-gray-400 text-xs md:text-sm text-center">
                        © 2025 <span className="text-white">Code Interactive</span>, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
