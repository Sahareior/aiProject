import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false }, // ✅ This disables full-screen mode
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
      },
      modes: {
        push: { quantity: 7 },
        repulse: { distance: 100, duration: .9 },
      },
    },
    particles: {
      color: { value: "#60A5FA" },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 90,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};
