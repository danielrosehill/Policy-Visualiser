
import React from 'react';

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.004-.004A2 2 0 0110 4h4a2 2 0 011.732 1.002l.004-.001M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
                <GlobeIcon />
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Policy Visualizer</h1>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Enter a policy challenge to see how different entities approach it, clustered by AI.
            </p>
        </header>
    );
};
