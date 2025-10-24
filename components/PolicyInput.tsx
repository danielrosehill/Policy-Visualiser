
import React, { useState } from 'react';

interface PolicyInputProps {
  onVisualize: (challenge: string) => void;
  isLoading: boolean;
}

export const PolicyInput: React.FC<PolicyInputProps> = ({ onVisualize, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVisualize(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-2 shadow-lg backdrop-blur-sm">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g., Gun control laws, minimum wage policies..."
          className="w-full bg-transparent text-gray-100 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="w-full sm:w-auto px-6 py-3 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out flex items-center justify-center gap-2"
        >
          {isLoading ? 'Analyzing...' : 'Visualize'}
          {!isLoading && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};
