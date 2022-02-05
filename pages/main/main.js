import styles from "../../styles/Main.module.scss";

// components
import Landing from "../sections/landing";
import About from "../sections/about";
import Projects from "../sections/projects";
import Experiences from "../sections/experiences";
import Connect from "../sections/connect";

export default function Main() {
    return (
        <div className={styles.container}>
            <Landing />
            <About />
            <Projects />
            <Connect />
        </div>
    );
}
