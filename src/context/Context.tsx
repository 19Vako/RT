import React, { createContext, useState, useContext } from 'react';

type afimationBlock = { id: number; text: string };
type budgetOfBargainsBlock = { date: string; sum: number };
type bargainsHistoryBlok = { date: string; income: number; losses: number };

type ContextType = {
  // Тема кнопок
  theme: string;
  colorText: string;
  white: () => void;
  dark: () => void;
  red: () => void;
  green: () => void;

  // Список афиаций
  blocks: afimationBlock[];
  inputText: string;
  setInputText: (text: string) => void;
  addBlock: () => void;
  removeBlock: (id: number) => void;

  // Бюджет торгов
  budget: number;
  setBudget: (budget: number) => void;
  budgetsOfBargains: budgetOfBargainsBlock[];
  addBudget: (newBudget: budgetOfBargainsBlock) => void;

  // История торгов
  bargainsHistory: bargainsHistoryBlok[];

  // Яркость
  brightness: string;
  setBrightness: (procent: any) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('#FFFFFF');
  const [colorText, setColorText] = useState<string>('#000000');
  const [blocks, setBlocks] = useState<afimationBlock[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [brightness, setBrightness] = useState<any>( 50);
  const [budgetsOfBargains, setBudgetsOfBargains] = useState<budgetOfBargainsBlock[]>([]); // Список с примером истории бюджетов


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bargainsHistory, setBargainsHistoryBlok] = useState<bargainsHistoryBlok[]>([
    { date: '23.02.2023', income: 7500, losses: 3500 },
    { date: '19.02.2023', income: 3000, losses: 1000 },
  ]);
  const [budget, setBudget] = useState<number>(0);

  // Функции для смены темы
  const white = () => {
    setTheme('#FFFFFF');
    setColorText('#000000');
  };
  const dark = () => {
    setTheme('#262626');
    setColorText('#FFFFFF');
  };
  const red = () => {
    setTheme('#FF0A0A');
    setColorText('#FFFFFF');
  };
  const green = () => {
    setTheme('#12FF54');
    setColorText('#000000');
  };

  // Функция для добавления нового блока
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

  // Функция для удаления блока
  const removeBlock = (id: number) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };

  // Функция для добавления нового бюджета
  const addBudget = (newBudget: budgetOfBargainsBlock) => {
    setBudgetsOfBargains((prevBudgets) => [newBudget, ...prevBudgets]);
  };


  return (
    <Context.Provider
      value={{
        theme,
        colorText,
        white,
        dark,
        red,
        green,
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
