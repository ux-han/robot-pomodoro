import React from "react";
import { useTheme } from "../hooks/useTheme";

export function Character({ state = "idle" }) {
  const { theme } = useTheme();

  const spriteUrl = theme.character?.[state];

  if (!spriteUrl) {
    return null;
  }

  return (
    <img
      src={spriteUrl}
      alt={`${theme.name} - ${state}`}
      className="character-sprite"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
      }}
    />
  );
}