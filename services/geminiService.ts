
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateAutomationChallenge = async () => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Generate a complex HTML snippet for a dynamic web element (like a nested dropdown or a custom modal) for an automation testing student named Jay to practice XPaths. Provide the scenario, the HTML code, and the correct XPath to find a specific target button.",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          scenario: { type: Type.STRING },
          htmlSnippet: { type: Type.STRING },
          targetXPath: { type: Type.STRING }
        },
        required: ["title", "scenario", "htmlSnippet", "targetXPath"]
      }
    }
  });

  return JSON.parse(response.text);
};
