import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' }); // Changed model

export const generateChatResponse = async (
  messages: { text: string; isBot: boolean }[]
): Promise<string> => {
  try {
    const chat = model.startChat({
      history: messages.map(msg => ({
        role: msg.isBot ? 'model' : 'user',
        parts: msg.text,
      })),
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(messages[messages.length - 1].text);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating chat response:', error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
};
