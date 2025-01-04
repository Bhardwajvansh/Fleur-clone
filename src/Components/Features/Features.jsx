import React from 'react';
import { Globe, Send, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-gray-600" />,
      title: "DISCOVER WHAT'S POSSIBLE",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis."
    },
    {
      icon: <Send className="w-12 h-12 text-gray-600" />,
      title: "PEOPLE REALLY MATTER",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis."
    },
    {
      icon: <Heart className="w-12 h-12 text-gray-600" />,
      title: "HAVING A PLAN FEELS GOOD",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;