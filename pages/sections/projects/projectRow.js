import styles from "../../../styles/sections/Projects.module.scss";

import Project from "./project";

export default function ProjectRow() {
    return (
        <div className={styles.row}>
            <Project />
            <Project />
            <Project />
        </div>
    );
}
