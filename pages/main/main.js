import styles from "../../styles/Main.module.scss";

// components
import Landing from "../sections/landing";
import About from "../sections/about";
import Projects from "../sections/projects";
import Experiences from "../sections/experiences";

export default function Main() {
    return (
        <div className={styles.container}>
            <Landing />
            <About />
            <Projects />
            <Experiences />
        </div>
    );
}
