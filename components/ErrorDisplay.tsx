
import React from 'react';

export const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-red-900/30 border border-red-700 rounded-lg">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
      <p className="text-xl font-semibold text-red-200 mb-1">Analysis Failed</p>
      <p className="text-gray-300">{message}</p>
    </div>
  );
};
