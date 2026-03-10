import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function SettingsModal() {
  const { themeId, setThemeId, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeList = Object.values(themes);

  return (
    <div className="no-drag absolute top-4 right-4 z-50">
      {/* Gear Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--color-secondary)",
          color: "white",
          fontSize: "20px",
        }}
        aria-label="Settings"
      >
        ⚙️
      </button>

      {/* Modal/Dropdown */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            backgroundColor: "var(--color-background)",
            border: "2px solid var(--color-primary)",
            borderRadius: "12px",
            padding: "16px",
            minWidth: "200px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: "18px",
              fontWeight: "bold",
              color: "var(--color-primary)",
              fontFamily: "Cabin Sketch",
            }}
          >
            Select Theme
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {themeList.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setThemeId(theme.id);
                  setIsOpen(false);
                }}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: themeId === theme.id
                    ? "2px solid var(--color-accent)"
                    : "2px solid var(--color-primary)",
                  backgroundColor:
                    themeId === theme.id
                      ? "var(--color-primary)"
                      : "transparent",
                  color: themeId === theme.id ? "white" : "var(--color-primary)",
                  cursor: "pointer",
                  fontFamily: "Cabin Sketch",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    flexShrink: 0,
                    backgroundColor: theme.colors.primary,
                    marginRight: "12px",
                  }}
                />
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}