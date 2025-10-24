
import React, { useState, useEffect, useCallback } from 'react';
import { getPolicyAnalysis } from './services/geminiService';
import type { PolicyAnalysis, Taxonomy, Cluster, ClusterItem } from './types';
import { PolicyInput } from './components/PolicyInput';
import { LoadingIndicator } from './components/LoadingIndicator';
import { VisualizationTabs } from './components/VisualizationTabs';
import { InfoModal } from './components/InfoModal';
import { Header } from './components/Header';
import { ErrorDisplay } from './components/ErrorDisplay';
import { WelcomeScreen } from './components/WelcomeScreen';

const loadingMessages = [
  "Researching global policies...",
  "Contacting legislative databases...",
  "Analyzing patterns and forming clusters...",
  "Identifying key policy differences...",
  "Generating visualizations...",
  "Finalizing analysis report...",
];

export default function App() {
  const [policyChallenge, setPolicyChallenge] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const [analysisResult, setAnalysisResult] = useState<PolicyAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<string>('');
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);
  const [selectedItem, setSelectedItem] = useState<ClusterItem | null>(null);

  useEffect(() => {
    let interval: number | undefined;
    if (isLoading) {
      let index = 0;
      setLoadingMessage(loadingMessages[index]);
      interval = window.setInterval(() => {
        index = (index + 1) % loadingMessages.length;
        setLoadingMessage(loadingMessages[index]);
      }, 2500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  const handleVisualize = useCallback(async (challenge: string) => {
    if (!challenge || isLoading) return;

    setIsLoading(true);
    setPolicyChallenge(challenge);
    setAnalysisResult(null);
    setError(null);

    try {
      const result = await getPolicyAnalysis(challenge);
      setAnalysisResult(result);
      if (result.taxonomies && result.taxonomies.length > 0) {
        setActiveTab(result.taxonomies[0].tabTitle);
      } else {
         setActiveTab('Analysis');
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);
  
  const currentTaxonomy = analysisResult?.taxonomies.find(t => t.tabTitle === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <Header />
        <main>
          <PolicyInput onVisualize={handleVisualize} isLoading={isLoading} />
          {isLoading ? (
            <LoadingIndicator message={loadingMessage} />
          ) : error ? (
            <ErrorDisplay message={error} />
          ) : analysisResult ? (
            <VisualizationTabs
              taxonomies={analysisResult.taxonomies}
              analysisReport={analysisResult.analysisReport}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              currentTaxonomy={currentTaxonomy}
              onClusterClick={setSelectedCluster}
              onItemClick={setSelectedItem}
            />
          ) : (
             <WelcomeScreen onExampleClick={handleVisualize} />
          )}
        </main>
      </div>
      
      {selectedCluster && (
        <InfoModal
          title={`Cluster: ${selectedCluster.name}`}
          onClose={() => setSelectedCluster(null)}
        >
          <p className="text-gray-300">{selectedCluster.description}</p>
        </InfoModal>
      )}

      {selectedItem && (
        <InfoModal
          title={selectedItem.name}
          onClose={() => setSelectedItem(null)}
        >
          <p className="text-gray-300">{selectedItem.summary}</p>
        </InfoModal>
      )}
    </div>
  );
}
