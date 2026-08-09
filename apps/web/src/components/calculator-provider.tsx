"use client";

import { useEffect, useState } from "react";

export default function CalculatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [key, setKey] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault();

      if (key.length > 4) {
        setKey((s) => [...s.slice(1)]);
      }
      setKey((k) => [...k, event.key]);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div>
      <div className="flex items-center">
        {key.map((k, i) => (
          <div
            key={i}
            className="flex size-10 items-center justify-center border-2"
          >
            {k}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
