### 🧠 My Silly Robot Pomodoro - A Cute Productivity Timer
<img width="1920" height="1080" alt="COVER" src="https://github.com/user-attachments/assets/cdee90fb-6740-4c1a-a8ba-0acfcd18682c" />



A playful **Pomodoro timer app** built with **React + Electron**, featuring a little computer monster that *watches you study*.
It helps you focus using the classic 25-minute study & 5-minute break cycle — complete with **eye animations**, **custom sounds**, and **hand-drawn UI elements**.


#### ✨ Features

* ⏱ 25/5 Pomodoro timer (auto switch between Study & Break)
* 🎨 Hand-crafted "computer monster" design
* 🔊 Sound notification when time's up
* 🧩 Custom toggle & button graphics
* 🕹 Built with React + Electron (desktop ready)
* 🎀 Pink theme toggle (CSS variables + theme switcher UI)

#### 🛠 Tech Stack

* **React 19** — UI framework
* **Vite 7** — Build tool & dev server
* **Electron 38** — Desktop app shell
* **Tailwind CSS 4** — Utility-first styling

#### 📦 Setup

**Prerequisites:** Node.js (v18+)

```bash
# Install root (Electron) dependencies
npm install

# Install frontend (React) dependencies
npm install --prefix frontend
```

**Run in dev mode:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Build & launch in production mode:**
```bash
npm run build-and-run
```

**Package for distribution:**
```bash
npm run dist
```

#### 📁 Project Structure

```
├── main.js          # Electron main process
├── preload.js       # Preload script (context bridge)
├── package.json     # Root package & Electron deps
└── frontend/        # React app (Vite)
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── Eye.jsx
    │   │   └── EyeCard.jsx
    │   └── hooks/
    │       └── useTheme.js
    └── package.json
```

#### 🔧 Development

| Script | What it does |
|--------|-------------|
| `npm run dev` | Start Vite dev server + Electron |
| `npm run build` | Build frontend for production |
| `npm run build-and-run` | Build + launch Electron in production mode |
| `npm run start` | Launch Electron (assumes frontend already built) |
| `npm run dist` | Package app with electron-builder |
| `npm run lint` | Run ESLint (in frontend/) |

#### 💡 Future ideas (WIP)

* Adjustable timer duration
* Session tracking & stats
* Different characters / themes
