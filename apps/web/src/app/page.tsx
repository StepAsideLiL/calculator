import CalculatorHandleKey from "@/components/calculator/handle-key";
import { CalculatorRoot } from "@/components/calculator/root";
import React from "react";

export default function Page() {
  return (
    <CalculatorRoot>
      <main className="flex h-dvh flex-col items-center">
        <CalculatorHandleKey />
        <div className="flex-1 overflow-y-auto">top</div>
        <div className="p-2">
          <div>Symbols</div>
          <div>nuumber</div>
        </div>
      </main>
    </CalculatorRoot>
  );
}
