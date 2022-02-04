import styles from "../../../styles/sections/Projects.module.scss";
import Image from "next/image";
import headshot from "../../../public/headshot.png";

import { VscSourceControl } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";

export default function Project() {
    return (
        <div className={styles.project}>
            <div className={styles.projC}>
                <div className={styles.iRow}>
                    <GoLinkExternal className={styles.iLink} />
                    <VscSourceControl className={styles.iLink} />
                </div>
                <div className={styles.cTit}>Project 1</div>
                <p className={styles.cText}>
                    this project was built over 3 weeks encorporating the react
                    library, vanilla css, and some pretty swaggy javascript.
                </p>
                <div className={styles.tRow}>
                    <span>React</span>
                    <span>Material UI</span>
                    <span>Next.js</span>
                </div>
            </div>
            <Image className={styles.projP} src={headshot} alt="headshot" />
        </div>
    );
}
