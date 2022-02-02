import styles from "../../styles/Main.module.scss";

// components
import Landing from "../sections/landing";

export default function Main() {
    return (
        <div className={styles.container}>
            <Landing />
        </div>
    );
}
