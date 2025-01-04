import React, { useState, useEffect, useRef } from 'react';

const AnimatedBar = ({ percentage, isVisible }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        const duration = 1500;
        const startTime = performance.now();

        const updateProgress = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCurrentPercentage(Math.round(progress * percentage));
            if (progress < 1) {
                requestAnimationFrame(updateProgress);
            }
        };

        requestAnimationFrame(updateProgress);
    }, [percentage, isVisible]);

    return (
        <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1">
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                        className="bg-gray-200 h-3 rounded-full transition-none"
                        style={{ width: `${currentPercentage}%` }}
                    />
                </div>
            </div>
            <div className="min-w-[60px] text-right">
                <span className="text-gray-800 font-medium">
                    {currentPercentage}%
                </span>
            </div>
        </div>
    );
};

const SkillsProgress = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const skills = [
        { name: 'Design', percentage: 65 },
        { name: 'Marketing', percentage: 90 },
        { name: 'Development', percentage: 87 },
        { name: 'User Experience', percentage: 70 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="mx-auto p-8 flex flex-wrap justify-between items-center" ref={sectionRef}>
            <div className="mb-12 w-1/2 p-20">
                <h1 className="text-4xl font-semibold text-gray-800 mb-2">
                    ENGAGING, CREATIVE PAGE AND PURPOSEFUL THEME.
                </h1>
                <p className="text-lg italic text-gray-600 mb-6">
                    Express yourself and your business through this amazing theme
                </p>
                <p className="text-gray-500 leading-relaxed">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam exam
                </p>
            </div>
            <div className="space-y-8 w-1/2 p-10">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center">
                        <div className="w-32">
                            <span className="text-gray-700">{skill.name}</span>
                        </div>
                        <AnimatedBar percentage={skill.percentage} isVisible={isVisible} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsProgress;