"use client";

import { createContext, useContext } from "react";

type CalculatorRootProps = {
  children?: React.ReactNode;
};

const CalculatorRootContext = createContext(null);

export function useCalculator() {
  return useContext(CalculatorRootContext);
}

export function CalculatorRoot({ children }: CalculatorRootProps) {
  return <CalculatorRootContext value={null}>{children}</CalculatorRootContext>;
}
