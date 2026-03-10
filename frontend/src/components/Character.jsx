import { useTheme } from "../contexts/ThemeContext";

export function Character({ timerState = "idle" }) {
  const { theme } = useTheme();

  // Determine which sprite to display based on timer state
  const getSprite = () => {
    if (!theme?.character) {
      return "/assets/computer.png";
    }

    switch (timerState) {
      case "working":
        return theme.character.working;
      case "break":
        return theme.character.break;
      case "idle":
      default:
        return theme.character.idle;
    }
  };

  return (
    <img
      src={getSprite()}
      alt={`Character - ${timerState}`}
      className="character-sprite"
    />
  );
}
