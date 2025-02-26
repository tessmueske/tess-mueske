import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#3e2626"
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    move: {
                        enable: true,
                        speed: 0.8,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#3e2626",
                        opacity: 0.3,
                        width: 1
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab"
                        },
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                retina_detect: true
            }}
        />
    );
}

export default ParticleBackground; 