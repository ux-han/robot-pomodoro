import React, { useState, useEffect } from "react";
import computerImg from "../assets/computer.png";
import buttonImg from "../assets/buttonbg1.png";
import buttonImg2 from "../assets/buttonbg2.png";
import toggleImg from "../assets/togglebg.png";
import toggleLeft from "../assets/toggleleft.png";
import toggleRight from "../assets/toggleright.png";
import notificationSound from "../assets/notification.wav";
import { Eye } from "./Eye";
import { useTheme } from "../hooks/useTheme";

function Eyes() {
    return (
        <div className="relative shrink-0" data-name="eyes">
            <div className="flex flex-row gap-2 items-center justify-center relative">
                <Eye isRightEye={false} />
                <Eye isRightEye={true} />
            </div>
        </div>
    );
}

export function EyeCard() {
    const STUDY_TIME = 25 * 60; // 25 minutes
    const BREAK_TIME = 5 * 60;  // 5 minutes

    const [time, setTime] = useState(STUDY_TIME);
    const [running, setRunning] = useState(false);
    const [isStudy, setIsStudy] = useState(true); // true = study, false = break
    const { theme, setTheme } = useTheme();

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('pink');
        else if (theme === 'pink') setTheme('blue');
        else if (theme === 'blue') setTheme('purple');
        else if (theme === 'purple') setTheme('yellow');
        else if (theme === 'yellow') setTheme('orange');
        else setTheme('light');
    };

    const themeIcon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : theme === 'pink' ? '🌸' : theme === 'blue' ? '💧' : theme === 'purple' ? '💜' : theme === 'yellow' ? '⭐' : '🍊';

    useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
        setTime((prevTime) => {
        if (prevTime > 1) return prevTime - 1;

        // When 1 second left → play sound and switch mode
        if (prevTime === 1) {
            const audio = new Audio(notificationSound);
            audio.play();

            setRunning(false); // stop running when switching

            // Automatically switch
            if (isStudy) {
            setIsStudy(false);
            return BREAK_TIME;
            } else {
            setIsStudy(true);
            return STUDY_TIME;
            }

        }

        return 0;
        });
    }, 1000);

    return () => clearInterval(interval);
    }, [running, isStudy]);



    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    return (
        <div
            className="relative drag-region"
            style={{
                width: "648px",
                height: "700px",
                backgroundImage: `url(${computerImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                paddingTop: "140px",
            }}
        >
            {/* Theme Toggle */}
            <button
                onClick={cycleTheme}
                title={`Current: ${theme} theme`}
                className="no-drag"
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "44px",
                    height: "44px",
                    fontSize: "24px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "50%",
                    backgroundColor: "var(--secondary)",
                    color: "var(--foreground)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
            >
                {themeIcon}
            </button>

            {/* Eyes Section */}
            <div
                className="no-drag flex flex-col justify-center items-center relative w-full h-full"
                style={{ paddingRight: "30px" }}
            >
                <Eyes />
            </div>

            {/* Spacing between eyes & the bottom section */}
            <div style={{ height: "80px", width: "full", position: "relative" }} />

            {/* Timer + Controls */}
            <div
                className="no-drag flex justify-between items-center relative w-full h-full left-0"
                style={{ flexDirection: "row", gap: "16px", paddingLeft: "90px", paddingRight: "20px", paddingTop: "1px" }}
            >
                {/* Timer */}
                <div
                    className="timer-text text-3xl"
                    style={{
                        color: "var(--foreground)",
                        fontSize: "64px",
                        fontWeight: "bold",
                        textAlign: "left",
                        width: "200px",
                    }}
                >
                    {formatTime(time)}
                </div>

                <div style={{ width: "100px" }}></div>

                {/* Start + Pause */}
                <div>
                    <button
                        onClick={() => setRunning(!running)}
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundImage: running
                                ? `url(${buttonImg2})`
                                : `url(${buttonImg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            padding: "10px 20px",
                            fontSize: "20px",
                            fontFamily: "Cabin Sketch",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            borderRadius: "12px",
                        }}
                    >
                        {running ? "Pause" : "Start"}
                    </button>
                </div>
            </div>
            
            {/* Spacing between timer & the bottom buttons */}
            <div style={{ height: "50px", width: "full", position: "relative" }} />


            {/* Toggle Bar */}
            <div className="no-drag" style={{paddingLeft: "80px"}}>
            <div
              style={{
                display: "flex",
                // height: "80px",
                backgroundImage: `url(${toggleImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "12px",
                overflow: "hidden",
                width: "240px",
                height: "40px",
              }}
            >
              <button
                onClick={() => {
                  setIsStudy(true);
                  setTime(STUDY_TIME);
                  setRunning(false);
                }}
                style={{
                  flex: 1,
                  height: "30",
                  fontSize: "18px",
                  fontFamily: "Cabin Sketch",
                  fontWeight: "bold",
                  cursor: "pointer",
                  background: isStudy ? `url(${toggleLeft})` : "transparent", // green if active
                  color: isStudy ? "white" : "black",
                  border: "none",
                }}
              >
                Study
              </button>

              <button
                onClick={() => {
                  setIsStudy(false);
                  setTime(BREAK_TIME);
                  setRunning(false);
                }}
                style={{
                  flex: 1,
                  fontSize: "18px",
                  fontFamily: "Cabin Sketch",
                  fontWeight: "bold",
                  cursor: "pointer",
                  background: !isStudy ? `url(${toggleRight})` : "transparent", // blue if active
                  color: !isStudy ? "white" : "black",
                  border: "none",
                }}
              >
                Break
              </button>
            </div>
            </div>

        </div>
    );
}
