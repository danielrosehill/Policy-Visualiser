
import React from 'react';
import type { Taxonomy, Cluster, ClusterItem } from '../types';
import { ClusterCard } from './ClusterCard';

interface VisualizationTabsProps {
  taxonomies: Taxonomy[];
  analysisReport: string;
  activeTab: string;
  setActiveTab: (tabTitle: string) => void;
  currentTaxonomy?: Taxonomy;
  onClusterClick: (cluster: Cluster) => void;
  onItemClick: (item: ClusterItem) => void;
}

export const VisualizationTabs: React.FC<VisualizationTabsProps> = ({
  taxonomies,
  analysisReport,
  activeTab,
  setActiveTab,
  currentTaxonomy,
  onClusterClick,
  onItemClick,
}) => {
    const tabTitles = [...taxonomies.map(t => t.tabTitle), 'Analysis'];

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-4 px-4 sm:px-6" aria-label="Tabs">
          {tabTitles.map((title) => (
            <button
              key={title}
              onClick={() => setActiveTab(title)}
              className={`${
                activeTab === title
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {title}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        {activeTab === 'Analysis' ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Analysis Report</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-wrap">
              {analysisReport}
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {currentTaxonomy?.clusters.map((cluster) => (
              <ClusterCard 
                key={cluster.name} 
                cluster={cluster} 
                onClusterClick={onClusterClick}
                onItemClick={onItemClick}
                isCountryLevel={currentTaxonomy.tabTitle === 'Country Level'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
