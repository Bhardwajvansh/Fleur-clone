import React, { useState, useEffect, useRef } from 'react';
import { Star, Send, Heart, Zap } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [value, isVisible]);

    return (
        <div className="flex flex-col items-center p-4 space-y-2">
            <Icon className="w-10 h-10 text-gray-600" />
            <span className="text-6xl text-gray-800">{count}</span>
            <span className="text-sm text-gray-500">{label}</span>
        </div>
    );
};

const StatsDisplay = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="w-full max-w-7xl mx-auto py-24 md:py-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Star} value={168} label="Design" isVisible={isVisible} />
                <StatCard icon={Send} value={2590} label="Marketing" isVisible={isVisible} />
                <StatCard icon={Heart} value={347} label="Development" isVisible={isVisible} />
                <StatCard icon={Zap} value={191} label="User Experience" isVisible={isVisible} />
            </div>
        </div>
    );
};

export default StatsDisplay;
