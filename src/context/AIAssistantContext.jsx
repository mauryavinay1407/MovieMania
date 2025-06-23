import { createContext, useContext, useState } from 'react';

const AIAssistantContext = createContext();

export function AIAssistantProvider({ children }) {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(null);

  return (
    <AIAssistantContext.Provider value={{ isAIOpen, setIsAIOpen, currentPrompt, setCurrentPrompt }}>
      {children}
    </AIAssistantContext.Provider>
  );
}

export const useAIAssistant = () => useContext(AIAssistantContext);