### 🧠 My Silly Robot Pomodoro - A Cute Productivity Timer
<img width="1920" height="1080" alt="COVER" src="https://github.com/user-attachments/assets/cdee90fb-6740-4c1a-a8ba-0acfcd18682c" />

A playful **Pomodoro timer app** built with **React + Electron**, featuring a little computer monster that *watches you study*.
It helps you focus using the classic 25-minute study & 5-minute break cycle — complete with **eye animations**, **custom sounds**, and **hand-drawn UI elements**.


#### ✨ Features

* ⏱ 25/5 Pomodoro timer with auto-switch between Study & Break
* 👾 Animated computer monster with eye tracking
* 🔊 Sound notifications when timer completes
* 🎨 Custom hand-crafted UI elements (buttons, toggles)
* 🖥 Desktop app ready (Electron)
* 🎀 Theme support (pink theme available)


#### 🛠 Tech Stack

* **React 19** — UI framework
* **Electron 38** — Desktop app framework
* **Vite 7** — Build tool & dev server
* **Tailwind CSS 4** — Styling


#### 📋 Prerequisites

* **Node.js** 18 or higher
* **npm** or **yarn** package manager


#### ⚡ Installation

```bash
# Navigate to project root
cd /workspace/repo

# Install dependencies
npm install
# or
yarn install
```


#### 🚀 Usage

```bash
# Development - runs frontend dev server + Electron app
npm run dev

# Production build (frontend only)
npm run build

# Run built Electron app
npm run build-and-run

# Package for distribution
npm run dist
```


#### 📁 Project Structure

```
/workspace/repo/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Eye.jsx          # Animated eye component
│   │   │   └── EyeCard.jsx      # Card component with eye
│   │   ├── hooks/
│   │   │   └── useTheme.js      # Theme management hook
│   │   ├── App.jsx              # Main app component
│   │   ├── index.css            # Global styles (Tailwind)
│   │   └── main.jsx             # Frontend entry point
│   ├── package.json
│   └── vite.config.js
├── main.js                      # Electron main process
├── preload.js                   # Electron preload script
├── package.json                 # Root package with Electron config
└── README.md
```


#### 💡 Future Ideas

* Adjustable timer duration
* Session tracking & stats
* Different characters / themes