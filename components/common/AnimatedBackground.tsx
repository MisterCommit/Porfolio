/* eslint-disable react/display-name */
import { memo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export const AnimatedBackground = memo(() => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "fixed", zIndex: -1, padding: 20 }}
      options={{
        fpsLimit: 28,
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 20,
          },
          shape: {
            type: ["square"],
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
          },
          color: { value: ["#34cf4e"] },
          size: {
            value: { min: 5, max: 30 },
            anim: {
              enable: true,
              speed: 5,
              size_min: 5,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 8,
            },
          },
          line_linked: {
            enable: true,
            color: "#8A8A88",
          },
          move: {
            enable: true,
            speed: { min: 0.05, max: 0.9 },
            outModes: {
              default: "bounce",
            },
            collisions: true,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.8,
              },
            },
            push: {
              particles_nb: 1,
            },
            bubble: {
              distance: 600,
              size: 60,
              duration: 0.1,
              opacity: 1,
            },
            repulse: {
              distance: 800,
              duration: 0.5,
            },
          },
        },
        // emitters: {
        //   direction: "center",
        //   position: {
        //     x: 150,
        //     y: 150,
        //   },
        //   rate: {
        //     delay: 0,
        //     quantity: 0,
        //   },
        // },
        style: {
          filter: "blur(0.5px)",
        },
        detectRetina: true,
      }}
    ></Particles>
  );
});
