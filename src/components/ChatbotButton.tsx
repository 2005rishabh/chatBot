import React, { useState } from 'react';
import { MessageCircle, X, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../lib/gemini';

export const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello! I'm your TechParts assistant powered by Gemini AI. How can I help you find the perfect computer parts today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const botResponse = await generateChatResponse([
        ...messages,
        { text: userMessage, isBot: false }
      ]);

      console.log("Gemini API Response:", botResponse); // Debugging Response

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, {
        text: "I'm sorry, I encountered an error. Please try again later.",
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b bg-blue-500 text-white rounded-t-lg">
            <h3 className="font-semibold">TechParts Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.isBot
                    ? 'bg-gray-200 text-gray-800 rounded-br-lg'
                    : 'bg-blue-500 text-white ml-auto rounded-bl-lg'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
