"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TCalculatorRootContext = {
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
} | null;

type CalculatorRootProps = {
  children?: React.ReactNode;
};

const CalculatorRootContext = createContext<TCalculatorRootContext>(null);

export function useCalculator() {
  return useContext(CalculatorRootContext);
}

export function CalculatorRoot({ children }: CalculatorRootProps) {
  const [result, setResult] = useState("");

  return (
    <CalculatorRootContext
      value={{
        result,
        setResult,
      }}
    >
      {children}
    </CalculatorRootContext>
  );
}
