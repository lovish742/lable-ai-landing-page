import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "connect"],
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
                color: "#c0c0c0",
              },
            },
            connect: {
              distance: 100,
              links: {
                opacity: 0.2,
              },
              radius: 140,
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: ["#c0c0c0", "#d4d4d4", "#a8a8a8"],
          },
          links: {
            color: "#c0c0c0",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 0.8,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 50,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
