"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotationSpeed: number;
  windSpeed: number;
  type: "circle" | "star" | "flake";
}

const SnowEffect: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [tiltAngle, setTiltAngle] = useState(0);
  const [windDirection, setWindDirection] = useState(0);

  // Inizializza i fiocchi di neve con più varietà
  useEffect(() => {
    const flakes: Snowflake[] = [];
    const types: ("circle" | "star" | "flake")[] = ["circle", "star", "flake"];
    
    // Aumentiamo il numero di particelle
    for (let i = 0; i < 250; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 - 100, // Inizia fuori dallo schermo
        size: Math.random() * 6 + 1,
        speed: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.7 + 0.2,
        rotationSpeed: Math.random() * 360 + 180,
        windSpeed: Math.random() * 100 + 30,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    // Use a callback to set snowflakes after render
    setTimeout(() => {
      setSnowflakes(flakes);
    }, 0);
  }, []);

  // Rileva l'inclinazione del dispositivo
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null) {
        // gamma è l'inclinazione sinistra-destra (-90 a 90 gradi)
        const angle = e.gamma * 1.2; // Aumentata la sensibilità
        setTiltAngle(angle);
        // La direzione del vento segue l'inclinazione
        setWindDirection(angle * 2);
      }
    };

    // Richiedi permesso per l'orientamento (necessario su iOS)
    const deviceOrientationEvent = DeviceOrientationEvent as typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<string>;
    };
    if (typeof DeviceOrientationEvent !== "undefined" && typeof deviceOrientationEvent.requestPermission === "function") {
      deviceOrientationEvent
        .requestPermission?.()
        .then((response: string) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        })
        .catch(() => {
          console.log("Permission denied for device orientation");
        });
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  // Renderizza forme diverse per i fiocchi
  const renderSnowflake = (flake: Snowflake) => {
    const baseStyle = {
      left: `${flake.x}%`,
      top: `${flake.y}%`,
      width: `${flake.size}px`,
      height: `${flake.size}px`,
      opacity: flake.opacity,
      position: "absolute" as const,
    };

    switch (flake.type) {
      case "star":
        return (
          <motion.div
            key={flake.id}
            style={baseStyle}
            className="text-white"
            animate={{
              y: ["-10vh", "110vh"],
              x: [
                "0px",
                `${Math.sin(flake.id) * flake.windSpeed + windDirection}px`,
                `${Math.sin(flake.id * 2) * flake.windSpeed + windDirection}px`,
              ],
              rotate: [0, flake.rotationSpeed],
            }}
            transition={{
              duration: 15 / flake.speed,
              repeat: Infinity,
              ease: "linear",
              delay: (flake.id * 0.05) % 15,
            }}
          >
            <svg
              width={flake.size}
              height={flake.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{
                filter: `drop-shadow(0 0 ${flake.size}px rgba(255, 255, 255, 0.9))`,
              }}
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>
        );

      case "flake":
        return (
          <motion.div
            key={flake.id}
            style={baseStyle}
            className="text-white"
            animate={{
              y: ["-10vh", "110vh"],
              x: [
                "0px",
                `${Math.cos(flake.id) * flake.windSpeed + windDirection}px`,
                `${Math.cos(flake.id * 2) * flake.windSpeed + windDirection}px`,
              ],
              rotate: [0, -flake.rotationSpeed],
            }}
            transition={{
              duration: 12 / flake.speed,
              repeat: Infinity,
              ease: "linear",
              delay: (flake.id * 0.05) % 12,
            }}
          >
            <svg
              width={flake.size}
              height={flake.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{
                filter: `drop-shadow(0 0 ${flake.size}px rgba(255, 255, 255, 0.9))`,
              }}
            >
              <path d="M12 2V22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18M2 12H22M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16M6.34 6.34L17.66 17.66M6.34 17.66L17.66 6.34" />
            </svg>
          </motion.div>
        );

      default: // circle
        return (
          <motion.div
            key={flake.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${flake.x}%`,
              top: `${flake.y}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              boxShadow: `0 0 ${flake.size * 3}px rgba(255, 255, 255, 0.9), 0 0 ${flake.size * 6}px rgba(255, 255, 255, 0.5)`,
            }}
            animate={{
              y: ["-10vh", "110vh"],
              x: [
                "0px",
                `${Math.sin(flake.id) * flake.windSpeed + windDirection}px`,
                `${Math.sin(flake.id * 2) * flake.windSpeed + windDirection}px`,
              ],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 10 / flake.speed,
              repeat: Infinity,
              ease: "linear",
              delay: (flake.id * 0.05) % 10,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Layer 1 - Neve grande (più lenta) */}
      <motion.div
        animate={{
          rotate: tiltAngle,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
        style={{
          transformOrigin: "center center",
        }}
        className="absolute inset-0"
      >
        {snowflakes
          .filter((f) => f.size > 4)
          .map((flake) => renderSnowflake(flake))}
      </motion.div>

      {/* Layer 2 - Neve media */}
      <motion.div
        animate={{
          rotate: tiltAngle * 0.7,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
        style={{
          transformOrigin: "center center",
        }}
        className="absolute inset-0"
      >
        {snowflakes
          .filter((f) => f.size >= 2.5 && f.size <= 4)
          .map((flake) => renderSnowflake(flake))}
      </motion.div>

      {/* Layer 3 - Neve piccola (più veloce) */}
      <motion.div
        animate={{
          rotate: tiltAngle * 0.5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
        style={{
          transformOrigin: "center center",
        }}
        className="absolute inset-0"
      >
        {snowflakes
          .filter((f) => f.size < 2.5)
          .map((flake) => renderSnowflake(flake))}
      </motion.div>
    </div>
  );
};

export default SnowEffect;
