import { EyeCard } from "./components/EyeCard";
import { ThemeProvider } from "./contexts/ThemeContext";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen min-w-screen flex items-center justify-center overflow-hidden bg-transparent">
        {/* Scale EyeCard but keep ratio */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="max-w-full max-h-full">
            <EyeCard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}