import styles from "../../../styles/sections/Projects.module.scss";

import Project from "./project";

export default function ProjectRow({ data }) {
    let [schem1, schem2] = data;
    return (
        <div className={styles.row}>
            <Project data={schem1} />
            <Project data={schem2} />
        </div>
    );
}
