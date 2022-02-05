import styles from "../../styles/sections/Connect.module.scss";

import ContactForm from "./form/contactForm";
import coffee from "../../public/coffee.svg";
import Particles from "react-tsparticles";

export default function Connect() {
    if (typeof window !== "undefined") {
        require("pathseg");
    }

    const particleOpt = {
        fps_limit: 60,
        particles: {
            collisions: {
                enable: false,
            },
            number: {
                value: 50,
                density: {
                    enable: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 30,
                opacity: 0.4,
            },
            move: {
                speed: 1,
            },
            opacity: {
                anim: {
                    enable: true,
                    opacity_min: 0.05,
                    speed: 1,
                    sync: false,
                },
                value: 0.4,
            },
        },
        polygon: {
            enable: true,
            scale: 1,
            position: { x: 0, y: 0 },
            type: "inline",

            url: "coffee.svg",
            inline: {
                arrangement: "equidistant",
            },
            draw: {
                enable: true,

                stroke: {
                    width: 2,
                    color: "#f887ff",
                },
            },
        },
        retina_detect: true,
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "connect",
                    stroke: {
                        color: "#f887ff",
                    },
                },
            },
            modes: {
                bubble: {
                    size: 6,
                    distance: 40,
                },
            },
        },
        fullScreen: false,
    };

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="sectionContainer">
            <div className="sectionHeader">
                <hr />
                <h4 className="padLeft">
                    <div>03.</div> Connect With Me
                </h4>
            </div>
            <div className={styles.container}>
                <ContactForm />

                <div className={styles.pWrapper}>
                    <Particles
                        id="tsparticles1"
                        options={particleOpt}
                        init={particlesInit}
                        loaded={particlesLoaded}
                    />
                </div>
            </div>
        </div>
    );
}
