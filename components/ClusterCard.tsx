
import React from 'react';
import type { Cluster, ClusterItem } from '../types';

interface ClusterCardProps {
  cluster: Cluster;
  onClusterClick: (cluster: Cluster) => void;
  onItemClick: (item: ClusterItem) => void;
  isCountryLevel: boolean;
}

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 opacity-70" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);


export const ClusterCard: React.FC<ClusterCardProps> = ({ cluster, onClusterClick, onItemClick, isCountryLevel }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <button 
        onClick={() => onClusterClick(cluster)}
        className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors flex items-center"
      >
        {cluster.name}
        <InfoIcon />
      </button>
      <div className="flex flex-wrap gap-4">
        {cluster.items.map((item) => (
          <button 
            key={item.code} 
            onClick={() => onItemClick(item)}
            className="flex flex-col items-center gap-2 text-center group"
            title={item.name}
          >
            {isCountryLevel ? (
                <img
                    src={`https://flagcdn.com/w80/${item.code.toLowerCase()}.png`}
                    alt={`${item.name} flag`}
                    className="w-16 h-auto object-contain rounded-sm shadow-md group-hover:scale-110 transition-transform"
                    width="64"
                    height="43"
                />
            ) : (
                <div className="w-16 h-10 flex items-center justify-center bg-gray-700 rounded-sm shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-gray-300">{item.code}</span>
                </div>
            )}
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors w-20 truncate">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
