"use client";

import { useCalculator } from "./root";

export default function CalculatorResult() {
  const ctx = useCalculator();

  if (!ctx) {
    return null;
  }

  return <div>{ctx.result}</div>;
}
