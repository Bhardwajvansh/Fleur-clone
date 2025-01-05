import React from 'react';
import { Star, Send, Heart, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const StatCard = ({ icon: Icon, value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
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
    }, [value]);

    return (
        <div className="flex flex-col items-center p-4 space-y-2">
            <Icon className="w-10 h-10 text-gray-600" />
            <span className="text-6xl text-gray-800">{count}</span>
            <span className="text-sm text-gray-500">{label}</span>
        </div>
    );
};

const StatsDisplay = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Star} value={168} label="Design" />
                <StatCard icon={Send} value={2590} label="Marketing" />
                <StatCard icon={Heart} value={347} label="Development" />
                <StatCard icon={Zap} value={191} label="User Experience" />
            </div>
        </div>
    );
};

export default StatsDisplay;