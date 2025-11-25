import { GoogleGenAI, Chat } from "@google/genai";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI Research Assistant for Yash Agarwal.
Your goal is to represent Yash's technical and theoretical capabilities to prospective academic advisors and research labs.

Context:
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Bio: ${PROFILE.bio}

Education:
${JSON.stringify(EDUCATION, null, 2)}

Experience:
${JSON.stringify(EXPERIENCE, null, 2)}

Projects:
${JSON.stringify(PROJECTS, null, 2)}

Skills:
${JSON.stringify(SKILLS, null, 2)}

Tone: Academic, precise, and rigorous. Avoid marketing buzzwords. 
Focus on the *how* and *why* of his work (e.g., the math behind ViT, the physics behind ATLAS).
If asked about contact info, provide: ${PROFILE.email}.
Keep answers concise and density-optimized.
`;

let chatInstance: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatInstance) return chatInstance;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatInstance = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.5, // Lower temperature for more deterministic/factual responses
      maxOutputTokens: 500,
    },
  });

  return chatInstance;
};

export const resetChatSession = () => {
  chatInstance = null;
};