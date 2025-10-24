
import { GoogleGenAI, Type } from "@google/genai";
import type { PolicyAnalysis } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    taxonomies: {
      type: Type.ARRAY,
      description: "An array of different classification systems (taxonomies) for the policy analysis. The first should always be by country. Others like US States or Ideologies are optional.",
      items: {
        type: Type.OBJECT,
        properties: {
          tabTitle: {
            type: Type.STRING,
            description: "The title for the tab, e.g., 'Country Level', 'US States', 'Ideological Stance'."
          },
          clusters: {
            type: Type.ARRAY,
            description: "Groups of entities (like countries) that share a common approach to the policy.",
            items: {
              type: Type.OBJECT,
              properties: {
                name: {
                  type: Type.STRING,
                  description: "A descriptive name for the cluster, e.g., 'Strict Regulation', 'Permissive', 'Laissez-faire'."
                },
                description: {
                  type: Type.STRING,
                  description: "A summary explaining the common characteristics of this cluster's approach to the policy."
                },
                items: {
                  type: Type.ARRAY,
                  description: "A list of entities within this cluster, sorted alphabetically by name.",
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: {
                        type: Type.STRING,
                        description: "The name of the country or entity."
                      },
                      code: {
                        type: Type.STRING,
                        description: "The ISO 3166-1 alpha-2 country code (e.g., 'US', 'DE'). For non-country entities like US states, use the 2-letter postal abbreviation (e.g., 'CA', 'TX')."
                      },
                      summary: {
                        type: Type.STRING,
                        description: "A concise summary of this specific entity's approach to the policy."
                      }
                    },
                    required: ["name", "code", "summary"]
                  }
                }
              },
              required: ["name", "description", "items"]
            }
          }
        },
        required: ["tabTitle", "clusters"]
      }
    },
    analysisReport: {
      type: Type.STRING,
      description: "A comprehensive textual analysis summarizing significant differences, surprising similarities, and overall findings from the research."
    }
  },
  required: ["taxonomies", "analysisReport"]
};

export const getPolicyAnalysis = async (policyChallenge: string): Promise<PolicyAnalysis> => {
  const prompt = `
    Analyze the policy challenge: "${policyChallenge}".

    Your task is to perform a detailed global analysis and structure your findings into the requested JSON format.

    1.  **Research**: Investigate how various countries around the world approach this policy challenge.
    2.  **Cluster**: Identify common themes, strategies, and philosophies. Group the countries into distinct clusters based on their approach. Give each cluster a concise, descriptive name.
    3.  **Detail**: For each country in a cluster, provide its ISO 3166-1 alpha-2 code and a brief summary of its specific regulations or stance.
    4.  **Expand (Optional)**: If there is a compelling reason and sufficient data, create additional taxonomies. For example:
        *   If there are significant differences among US states, create a "US States" taxonomy.
        *   If there's a clear divide along political ideologies, create an "Ideological Stance" taxonomy.
        The "Country Level" taxonomy should always be present and listed first.
    5.  **Summarize**: Write a final, insightful analysis report that discusses the most significant differences and similarities you discovered.

    Return the entire analysis in the specified JSON structure. Ensure all countries/items within a cluster are sorted alphabetically by name.
    `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as PolicyAnalysis;
  } catch (error) {
    console.error("Error fetching or parsing policy analysis:", error);
    throw new Error("Failed to get analysis from the AI. The model may have returned an invalid response.");
  }
};
