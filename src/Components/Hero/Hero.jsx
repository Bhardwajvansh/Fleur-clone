import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import Bg from "../../Assets/h1-slide-1-background.jpeg";
import Logo from "../../Assets/01-logo-light.png";

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'PAGES', href: '#pages' },
        { name: 'PORTFOLIO', href: '#portfolio' },
        { name: 'BLOG', href: '#blog' },
        { name: 'SHOP', href: '#shop' },
        { name: 'ELEMENTS', href: '#elements' }
    ];

    return (
        <div
            className="min-h-screen bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Bg})` }} 
        >
            <nav className="max-w-7xl mx-auto px-4 py-5" style={{borderBottom:"1px solid white"}}>
                <div className="flex justify-between items-center">
                    <div className="w-32 md:w-40">
                        <img src={Logo} alt="Logo" className="w-2/3" />
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-gray-300 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <button className="text-white hover:text-gray-300 transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:text-gray-300 transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                        <button
                            className="text-white hover:text-gray-300 transition-colors md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white font-bold block hover:text-gray-300 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Hero;