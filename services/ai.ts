import { GoogleGenAI, Type } from "@google/genai";
import { DevotionalResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDevotional = async (topic: string): Promise<DevotionalResponse> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Write a short, inspiring Christian devotional about "${topic}". Include a title, a key scripture verse (KJV or NIV), a brief reflection (approx 80 words), and a short closing prayer.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            scripture: { type: Type.STRING },
            reflection: { type: Type.STRING },
            prayer: { type: Type.STRING },
          },
          required: ["title", "scripture", "reflection", "prayer"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as DevotionalResponse;
    }
    throw new Error("No response generated");
  } catch (error) {
    console.error("Devotional generation error:", error);
    throw error;
  }
};

export const generatePrayerSupport = async (request: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `A user has requested prayer for the following situation: "${request}". 
    Write a compassionate, faith-filled prayer (approx 100 words) addressing their specific situation. 
    Include a comforting bible reference at the end. Speak as a wise, caring pastor.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "We are praying for you. May God's peace be with you.";
  } catch (error) {
    console.error("Prayer generation error:", error);
    return "Lord, we lift up this request to you. We ask for your peace and guidance in this situation. Amen.";
  }
};