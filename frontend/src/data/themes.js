export const themes = {
  monster: {
    id: "monster",
    name: "Monster",
    colors: {
      primary: "#4a9c6d",
      secondary: "#c9452d",
      background: "#f5f5dc",
      accent: "#e8b828",
    },
    character: {
      idle: "/assets/computer.png",
      working: "/assets/computer.png",
      break: "/assets/computer.png",
    },
    sounds: {
      workEnd: "/assets/notification.wav",
      breakEnd: "/assets/notification.wav",
    },
  },
  robot: {
    id: "robot",
    name: "Robot",
    colors: {
      primary: "#4a90a4",
      secondary: "#a44a4a",
      background: "#e0e0e0",
      accent: "#a4a44a",
    },
    character: {
      idle: "/assets/robot-idle.png",
      working: "/assets/robot-working.png",
      break: "/assets/robot-break.png",
    },
    sounds: {
      workEnd: "/assets/robot-work-end.wav",
      breakEnd: "/assets/robot-break-end.wav",
    },
  },
};