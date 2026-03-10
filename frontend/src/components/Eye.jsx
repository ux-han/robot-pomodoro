import { useEffect, useRef, useState } from "react";
import leftEye from "../assets/left-eye.png";
import rightEye from "../assets/right-eye.png";
import leftPupil from "../assets/left-pupil.png";
import rightPupil from "../assets/right-pupil.png";

export function Eye({ className = "", isRightEye = false }) {
  const eyeRef = useRef(null);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  // Default pupil positions
  const defaultPosition = isRightEye
    ? { x: 119.032 - 102, y: 117.787 - 102 } // Right eye
    : { x: 74.8272 - 102, y: 78.3184 - 102 }; // Left eye

  useEffect(() => {
    setPupilPosition({ x: defaultPosition.x, y: defaultPosition.y });
  }, [defaultPosition.x, defaultPosition.y]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;

      const eye = eyeRef.current;
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const eyeRadius = eyeRect.width / 2;
      const pupilRadius = 38;
      const maxMovement = eyeRadius - pupilRadius - 5;

      if (distance < 1) {
        setPupilPosition({ x: defaultPosition.x, y: defaultPosition.y });
        return;
      }

      let nx = dx / distance;
      let ny = dy / distance;

      let moveX = Math.min(distance, maxMovement) * nx;
      let moveY = Math.min(distance, maxMovement) * ny;

      moveX += defaultPosition.x;
      moveY += defaultPosition.y;

      const totalDistance = Math.sqrt(
        Math.pow(moveX - defaultPosition.x, 2) +
          Math.pow(moveY - defaultPosition.y, 2),
      );

      if (totalDistance > maxMovement) {
        const scale = maxMovement / totalDistance;
        moveX = defaultPosition.x + (moveX - defaultPosition.x) * scale;
        moveY = defaultPosition.y + (moveY - defaultPosition.y) * scale;
      }

      setPupilPosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [defaultPosition.x, defaultPosition.y]);

  return (
    <div
      ref={eyeRef}
      className={`relative shrink-0 size-[204px] rounded-full overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${isRightEye ? rightEye : leftEye})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-name="eye"
    >
      {/* Pupil */}
      <div
        className="rounded-full size-[76px]"
        style={{
          backgroundImage: `url(${isRightEye ? rightPupil : leftPupil})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
        }}
        id="Pupil"
      />
    </div>
  );
}
