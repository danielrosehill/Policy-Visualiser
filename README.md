# Policy Visualizer

![Google AI Studio](https://img.shields.io/badge/Google%20AI%20Studio-4285F4?style=for-the-badge&logo=google&logoColor=white)
![POC](https://img.shields.io/badge/POC-Proof%20of%20Concept-yellow?style=for-the-badge)
![Starter](https://img.shields.io/badge/Starter-Project-green?style=for-the-badge)

[![Gemini Vibe Coding Projects](https://img.shields.io/badge/AI%20Studio%20POCs-Index-blue?style=flat-square)](https://github.com/danielrosehill/Gemini-Vibe-Coding-Projects)
[![GitHub Master Index](https://img.shields.io/badge/Master-Index-purple?style=flat-square)](https://github.com/danielrosehill/Github-Master-Index)

## Overview

Policy Visualizer is an AI-powered application that helps you explore and understand how different countries, ideologies, and political systems approach common policy challenges. Using the Gemini AI API, the application analyzes policy issues, clusters similar approaches, and provides interactive visualizations to help identify patterns and differences across global policy landscapes.

## Features

- **AI-Driven Policy Analysis**: Enter any policy challenge and receive a comprehensive analysis powered by Gemini AI
- **Multi-Dimensional Clustering**: Visualize policies grouped by various taxonomies (geographic, ideological, system-based, etc.)
- **Interactive Visualization**: Explore clusters and individual country approaches through an intuitive tabbed interface
- **Detailed Summaries**: Click on any cluster or country to view in-depth analysis and policy descriptions
- **Responsive Design**: Modern, dark-themed UI built with React and TypeScript

## Technology Stack

- **Frontend**: React 19.2 with TypeScript
- **Build Tool**: Vite 6.2
- **AI Integration**: Google Gemini API (@google/genai)
- **Styling**: Tailwind CSS (via utility classes)
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- A Gemini API key (get one from [Google AI Studio](https://ai.google.dev/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielrosehill/Policy-Visualiser.git
   cd Policy-Visualiser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your API key:
   - Create a `.env.local` file in the root directory
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. Enter a policy challenge in the input field (e.g., "healthcare reform", "climate change mitigation", "immigration policy")
2. Click "Visualize" to generate the analysis
3. Explore different taxonomies through the tabs (by region, ideology, system type, etc.)
4. Click on clusters to see their descriptions
5. Click on individual countries/entities to read detailed policy summaries

## Project Structure

```
Policy-Visualiser/
├── components/          # React components
│   ├── Header.tsx
│   ├── PolicyInput.tsx
│   ├── LoadingIndicator.tsx
│   ├── VisualizationTabs.tsx
│   ├── InfoModal.tsx
│   ├── ErrorDisplay.tsx
│   └── WelcomeScreen.tsx
├── services/           # API integration
│   └── geminiService.ts
├── App.tsx            # Main application component
├── types.ts           # TypeScript type definitions
├── index.tsx          # Application entry point
├── vite.config.ts     # Vite configuration
└── package.json       # Project dependencies
```

## AI Studio POC

This project contains a proof of concept (POC) that was autopopulated by Google AI Studio. It is intended as a code starter and may not yet have been manually reviewed and/or taken further. I create some Gemini POCs, in particular, to experiment with/test the capabilities of multimodal AI.

View the original app in AI Studio: https://ai.studio/apps/drive/1M1CKMJ8U3ZLoaM82nfTyyLm7-r4Z1oyM

## Related Projects

- [Gemini Vibe Coding Projects](https://github.com/danielrosehill/Gemini-Vibe-Coding-Projects) - Index of my Google AI Studio POCs
- [GitHub Master Index](https://github.com/danielrosehill/Github-Master-Index) - Complete index of all my GitHub projects

## License

MIT

## Author

Daniel Rosehill
- Website: [danielrosehill.com](https://danielrosehill.com)
- Email: public@danielrosehill.com
