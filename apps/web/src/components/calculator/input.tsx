"use client";

import { stringToEval } from "@workspace/math";
import { Input } from "@workspace/ui/components/input";
import { useState } from "react";
import { useCalculator } from "./root";

export default function CalculatorInput() {
  const ctx = useCalculator();
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 1. Allow control keys (Backspace, Delete, Arrow keys, Tab, Enter)
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
      "Escape",
    ];

    if (allowedControlKeys.includes(e.key)) {
      return;
    }

    // 2. Allow standard keyboard shortcuts (Ctrl/Cmd + A, C, V, X, Z)
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    // 3. Define allowed input: Digits (0-9), Math Operators (+, -, *, /, %), Decimals (.), and Parentheses
    const mathRegex = /^[0-9+\-*/%.()]$/;

    // 4. Block key if it doesn't match the allowed pattern
    if (!mathRegex.test(e.key)) {
      e.preventDefault();
    }
  };

  if (!ctx) {
    return null;
  }

  return (
    <Input
      type="text"
      onKeyDown={handleKeyDown}
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        setValue(v);
        if (/\d$/.test(v)) {
          ctx.setResult(stringToEval(v));
        }
      }}
      placeholder="Enter math expression..."
    />
  );
}
