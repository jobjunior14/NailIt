import React, { createContext, useState, useContext, ReactNode } from "react";

interface GlobalState {
  category?: string;
  setCategorie: (category?: string) => void;
}

const StateContext = createContext<GlobalState | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategorie] = useState<string | undefined>(undefined);

  return (
    <StateContext.Provider value={{ category, setCategorie }}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = (): GlobalState => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a StateProvider");
  }
  return context;
};
