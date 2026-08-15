import CalculatorInput from "@/components/calculator/input";
import CalculatorResult from "@/components/calculator/result";
import { CalculatorRoot } from "@/components/calculator/root";

export default function Page() {
  return (
    <CalculatorRoot>
      <main className="flex h-dvh flex-col items-center">
        <CalculatorInput />
        <CalculatorResult />
        <div className="flex-1 overflow-y-auto"></div>
        <div className="p-2">
          <div>Symbols</div>
          <div>nuumber</div>
        </div>
      </main>
    </CalculatorRoot>
  );
}
