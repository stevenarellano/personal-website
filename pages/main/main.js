import styles from "../../styles/Main.module.scss";

// components
import Landing from "../sections/landing";
import About from "../sections/about";
import Projects from "../sections/projects";

export default function Main() {
    return (
        <div className={styles.container}>
            <Landing />
            <About />
            <Projects />
        </div>
    );
}
