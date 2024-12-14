import React, { createContext, useState, useContext } from 'react';

type afimationBlock = { id: number; text: string };
type budgetOfBargainsBlock = { date: string; sum: number };
type bargainsHistoryBlok = { date: string; income: number; losses: number };

type ContextType = {

  choiseTheme: (color: string) => void
  theme: string;
  colorText: string;

  blocks: afimationBlock[];
  inputText: string;
  setInputText: (text: string) => void;
  addBlock: () => void;
  removeBlock: (id: number) => void;


  budget: number;
  setBudget: (budget: number) => void;
  budgetsOfBargains: budgetOfBargainsBlock[];
  addBudget: (newBudget: budgetOfBargainsBlock) => void;


  bargainsHistory: bargainsHistoryBlok[];


  brightness: string;
  setBrightness: (procent: any) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blocks, setBlocks] = useState<afimationBlock[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [brightness, setBrightness] = useState<any>( 50);
  const [budgetsOfBargains, setBudgetsOfBargains] = useState<budgetOfBargainsBlock[]>([]);
  const [budget, setBudget] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bargainsHistory, setBargainsHistoryBlok] = useState<bargainsHistoryBlok[]>([
    { date: '23.02.2023', income: 7500, losses: 3500 },
    { date: '19.02.2023', income: 3000, losses: 1000 },
  ]);



  const [theme, setTheme] = useState<string>('#FFFFFF');
  const [colorText, setColorText] = useState<string>('#000000');
  const themes: Record<string, { bg: string; text: string }> = {
    white: { bg: '#FFFFFF', text: '#000000' },
    dark: { bg: '#262626', text: '#FFFFFF' },
    red: { bg: '#FF0A0A', text: '#FFFFFF' },
    green: { bg: '#12FF54', text: '#000000' },
  };

  const choiseTheme = (color: string) => {

    setTheme(themes[color].bg);
    setColorText(themes[color].text);

  };


  const addBlock = () => {
    if (!inputText.trim()) {
      return;
    }
    const newBlock: afimationBlock = {
      id: blocks.length + 1,
      text: inputText,
    };
    setBlocks([...blocks, newBlock]);
    setInputText('');
  };


  const removeBlock = (id: number) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };


  const addBudget = (newBudget: budgetOfBargainsBlock) => {
    setBudgetsOfBargains((prevBudgets) => [newBudget, ...prevBudgets]);
  };


  return (
    <Context.Provider
      value={{
        theme,
        colorText,
        choiseTheme,
        blocks,
        inputText,
        setInputText,
        addBlock,
        removeBlock,
        budget,
        setBudget,
        budgetsOfBargains,
        addBudget,
        bargainsHistory,
        brightness,
        setBrightness,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useStore must be used within a Provider');
  }
  return context;
};
