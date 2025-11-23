import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let genAI: GoogleGenAI | null = null;

const getGenAI = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.warn("API Key is missing. AI features will not work.");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const getBrandConsultation = async (prompt: string): Promise<string> => {
  try {
    const ai = getGenAI();
    const modelId = 'gemini-2.5-flash';
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: "You are the Chief Brand Strategist for 'Atlantis Night Club', also known as the 'Melodic Odyssey'. Your tone is sophisticated, artistic, minimal, and slightly enigmatic. You discuss the 'Lost Melody', the 'Kingdom of Atlantis', and the design principles of our brand (Structure, Rhythm, Blue, Chrome). You answer questions about our visual identity specifications. Keep answers professional but avant-garde. Under 60 words.",
      },
    });

    return response.text || "Signal interrupted. Please realign frequencies.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the Atlantis archives failed.";
  }
};