
import React from 'react';

export const LoadingIndicator: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-800/50 rounded-lg">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500 mb-4"></div>
      <p className="text-xl font-medium text-gray-200">{message}</p>
    </div>
  );
};
