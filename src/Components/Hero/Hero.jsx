import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Bg1 from "../../Assets/h1-slide-1-background.jpeg";
import Bg2 from "../../Assets/h1-slide-4-background.jpeg";
import Bg3 from "../../Assets/h1-slide-3-background.jpeg";
import Logo from "../../Assets/01-logo-light.png";

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const slides = [
        {
            title: "STYLE & GRACE",
            subtitle: "Make your beautiful website with Fleur",
            buttonText: "PURCHASE",
            bg: Bg1
        },
        {
            title: "CREATIVE DESIGN",
            subtitle: "Craft stunning digital experiences",
            buttonText: "PURCHASE",
            bg: Bg2
        },
        {
            title: "MODERN AESTHETIC",
            subtitle: "Elevate your digital presence",
            buttonText: "PURCHASE",
            bg: Bg3
        }
    ];

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'PAGES', href: '#pages' },
        { name: 'PORTFOLIO', href: '#portfolio' },
        { name: 'BLOG', href: '#blog' },
        { name: 'SHOP', href: '#shop' },
        { name: 'ELEMENTS', href: '#elements' }
    ];

    const changeSlide = (index) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const nextSlide = () => {
        changeSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        changeSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInitialLoad(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${slide.bg})` }}
                >
                    <div className="absolute inset-0 bg-black/5" />
                </div>
            ))}
            <div
                className={`fixed top-0 left-0 w-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                style={{ height: 'auto', maxHeight: '100vh' }}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                        <img src={Logo} alt="Logo" className="w-24" style={{ filter: 'brightness(0)' }} />
                        <button onClick={() => setIsMenuOpen(false)} className="text-gray-800">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-gray-100 py-3">
                                <a
                                    href={link.href}
                                    className="flex justify-between items-center text-gray-800 hover:text-gray-600 transition-colors text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav
                className="relative z-10 max-w-7xl mx-auto px-10 py-10 bg-white md:bg-transparent border-b border-white"
            >
                <div className="flex justify-between items-center">
                    <button
                        className="text-black md:text-white hover:text-gray-500 transition-colors md:hidden"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="w-32 md:w-40">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-2/3 filter brightness-0 md:filter-none"
                        />
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
                        <button className="text-white hover:text-gray-500 transition-colors hidden md:block ">
                            <ShoppingCart className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:text-gray-500 transition-colors hidden md:block ">
                            <Search className="w-6 h-6" />
                        </button>
                        <button className="text-black hover:text-gray-500 transition-colors hidden md:block md:text-white">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="relative z-10 h-[calc(100vh-80px)] flex items-center justify-center">
                <div
                    className={`text-center text-white px-1 transition-all duration-1000 
                        ${isInitialLoad ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                        ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                >
                    <h1
                        className={`text-5xl sm:text-7xl md:text-7xl font-light mb-6 tracking-widest transition-all duration-1000 
      ${isInitialLoad ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}
      ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    >
                        {slides[currentSlide].title}
                    </h1>

                    <div
                        className={`flex justify-center items-center gap-2 mb-8 transition-all duration-1000 delay-200 
                            ${isInitialLoad ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                            ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    >
                        <div
                            className={`h-px w-12 transition-all duration-1000 delay-300 
                                ${isInitialLoad ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
                                ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                            style={{ background: "white" }}
                        ></div>
                        <div
                            className={`w-2 h-2 rounded-full transition-all duration-1000 delay-300 
                                ${isInitialLoad ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                                ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                            style={{ background: "white" }}
                        ></div>
                        <div
                            className={`h-px w-12 transition-all duration-1000 delay-300 
                                ${isInitialLoad ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
                                ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                            style={{ background: "white" }}
                        ></div>
                    </div>
                    <p
                        className={`text-xl md:text-2xl italic mb-8 transition-all duration-1000 delay-400 
                            ${isInitialLoad ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                            ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    >
                        {slides[currentSlide].subtitle}
                    </p>
                    <button
                        style={{ border: "1px solid white" }}
                        className={`border-2 px-14 py-4 hover:bg-white hover:text-black transition-all duration-1000 delay-500 
                            ${isInitialLoad ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
                            ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    >
                        {slides[currentSlide].buttonText}
                    </button>
                </div>
                <button
                    onClick={prevSlide}
                    className={`hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-1000
                        ${isInitialLoad ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`}
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={nextSlide}
                    className={`hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-1000
                        ${isInitialLoad ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default Hero;