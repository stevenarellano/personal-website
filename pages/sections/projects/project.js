import styles from "../../../styles/sections/Projects.module.scss";
import Image from "next/image";
import headshot from "../../../public/headshot.png";

export default function Project() {
    return (
        <div className={styles.project}>
            <div className={styles.projC}>helo</div>

            <Image className={styles.projP} src={headshot} alt="headshot" />
        </div>
    );
}
