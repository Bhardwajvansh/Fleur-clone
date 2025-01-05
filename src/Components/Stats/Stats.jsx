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
        { name: 'User Experience', percentage: 70 },
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
        <div
            className="mx-auto px-8 lg:px-16 py-24 flex flex-wrap justify-around items-center gap-8"
            ref={sectionRef}
        >
            <div className="w-full md:w-1/3 space-y-6">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                    ENGAGING, CREATIVE PAGE AND PURPOSEFUL THEME.
                </h1>
                <p className="text-md sm:text-lg italic text-gray-600">
                    Express yourself and your business through this amazing
                </p>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam exam
                </p>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center">
                        <div className="w-32">
                            <span className="text-gray-700 text-sm sm:text-base">
                                {skill.name}
                            </span>
                        </div>
                        <AnimatedBar percentage={skill.percentage} isVisible={isVisible} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsProgress;
