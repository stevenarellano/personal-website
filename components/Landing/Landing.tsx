import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { IOptions, RecursivePartial } from "tsparticles-engine";
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'


const Landing = () => {
    const particlesInit = async (main: any) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particleOptions: RecursivePartial<IOptions> = {
        fullScreen: {
            enable: false,
            zIndex: -1
        },
        background: {
            color: {
                value: "#F1F1F1",
            },
            image: "radial-gradient(white, #F1F1F1)"
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.7,
                },
            },
        },
        particles: {
            color: {
                value: "#591C2C",
            },
            links: {
                color: "#591C2C",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }

    return (
        <>
            <Particles
                init={particlesInit}
                height="90vh"
                width="85vw"
                style={{ margin: 0, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                id="tsparticles"
                options={particleOptions}
            />
            <div className="flex justify-center items-center ">
                <div style={{
                    height: "90vh", width: "85vw"
                }} className="relative">
                    <div className="flex flex-col relative h-full w-full pt-24 items-center">
                        < div style={{ width: "100%" }} className="font-secondary text-center text-header-adj">STEVEN ARELLANO</div>
                        <div className="text-3xl text-center">fullstack blockchain engineer</div>
                        <div className="mt-auto"></div>
                        <div className="flex w-full  justify-end px-4 gap-2">
                            <a
                                href="https://www.linkedin.com/in/stevenjarellano/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border-2 border-black p-4 bg-white hover:bg-gray cursor-pointer"
                            >
                                <BsLinkedin />
                            </a>
                            <a
                                href="https://github.com/stevenarellano"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border-2 border-black p-4 bg-white hover:bg-gray cursor-pointer">
                                <BsGithub />
                            </a>
                            <a
                                href="https://medium.com/@stevenjarellano"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border-2 border-black p-4 bg-white hover:bg-gray cursor-pointer">
                                <BsMedium />
                            </a>
                        </div>
                        <div className="flex w-full pt-2 px-4 pb-4 justify-end"  >
                            <div className="border-2 border-black px-8 py-2 bg-white hover:bg-gray cursor-pointer">Contact Me</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Landing