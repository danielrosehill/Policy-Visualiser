
import React from 'react';

interface WelcomeScreenProps {
    onExampleClick: (example: string) => void;
}

const examples = [
    "Second-hand smoke control",
    "Minimum alcohol purchasing laws",
    "Renewable energy subsidies",
    "Parental leave policies"
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onExampleClick }) => {
    return (
        <div className="text-center p-8 bg-gray-800/30 border border-gray-700/50 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to the Policy Visualizer</h2>
            <p className="text-gray-400 mb-6">Start by entering a policy challenge above, or try one of these examples:</p>
            <div className="flex flex-wrap justify-center gap-3">
                {examples.map(example => (
                    <button 
                        key={example}
                        onClick={() => onExampleClick(example)}
                        className="px-4 py-2 bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600 hover:text-white transition-colors"
                    >
                        {example}
                    </button>
                ))}
            </div>
        </div>
    );
};
