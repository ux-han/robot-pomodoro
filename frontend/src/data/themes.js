export const themes = {
  monster: {
    id: 'monster',
    name: 'Monster',
    colors: {
      primary: '#6b4c9a',
      secondary: '#4a9c6d',
      background: '#1a1a2e',
      accent: '#ffd700',
    },
    character: {
      idle: '/assets/characters/monster-idle.svg',
      working: '/assets/characters/monster-working.svg',
      break: '/assets/characters/monster-break.svg',
    },
    sounds: {
      workEnd: '/assets/sounds/monster-work-end.mp3',
      breakEnd: '/assets/sounds/monster-break-end.mp3',
    },
  },
  robot: {
    id: 'robot',
    name: 'Robot',
    colors: {
      primary: '#4a90a4',
      secondary: '#a4a4a4',
      background: '#1e2a3a',
      accent: '#00ffcc',
    },
    character: {
      idle: '/assets/characters/robot-idle.svg',
      working: '/assets/characters/robot-working.svg',
      break: '/assets/characters/robot-break.svg',
    },
    sounds: {
      workEnd: '/assets/sounds/robot-work-end.mp3',
      breakEnd: '/assets/sounds/robot-break-end.mp3',
    },
  },
};