import { EyeCard } from "./components/EyeCard";
import { SettingsModal } from "./components/SettingsModal";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen min-w-screen flex items-center justify-center overflow-hidden bg-transparent">
        {/* Scale EyeCard but keep ratio */}
        <div className="w-full h-full flex items-center justify-center relative">
          <SettingsModal />
          <div className="max-w-full max-h-full">
            <EyeCard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
