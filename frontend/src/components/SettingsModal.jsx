import React from "react";
import { useTheme } from "../hooks/useTheme";

export function SettingsModal({ isOpen, onClose }) {
  const { theme, themeId, setThemeId, themes } = useTheme();

  if (!isOpen) return null;

  const themeEntries = Object.values(themes);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="rounded-lg p-6 max-w-md w-full"
        style={{
          backgroundColor: "var(--card, #fff)",
          color: "var(--card-foreground, #000)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-xl font-bold"
            style={{ fontFamily: "Cabin Sketch, cursive" }}
          >
            Settings
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <div className="mb-4">
          <h3
            className="text-lg font-medium mb-3"
            style={{ fontFamily: "Cabin Sketch, cursive" }}
          >
            Choose Theme
          </h3>
          <div className="flex gap-3">
            {themeEntries.map((t) => (
              <button
                key={t.id}
                onClick={() => setThemeId(t.id)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: themeId === t.id ? `3px solid ${t.colors.primary}` : "2px solid #ccc",
                  backgroundColor:
                    themeId === t.id ? t.colors.background : "transparent",
                  color: themeId === t.id ? t.colors.accent : "#333",
                  cursor: "pointer",
                  fontFamily: "Cabin Sketch, cursive",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-4 pt-4"
          style={{ borderTop: "1px solid var(--border, #ccc)" }}
        >
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Current theme: <strong>{theme.name}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}