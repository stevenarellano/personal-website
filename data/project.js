import styles from "../styles/sections/Projects.module.scss";
import Image from "next/image";

import { VscSourceControl } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";

export default function Project({ data }) {
    if (data == null) {
        return null;
    }
    console.log(data.tools);
    return (
        <div className={styles.project}>
            <div className={styles.projC}>
                <div className={styles.iRow}>
                    {data.website ? (
                        <a
                            target={"_blank"}
                            href={data.website}
                            rel="noreferrer"
                        >
                            <GoLinkExternal className={styles.iLink} />
                        </a>
                    ) : null}
                    {data.github ? (
                        <a
                            target={"_blank"}
                            href={data.github}
                            rel="noreferrer"
                        >
                            <VscSourceControl className={styles.iLink} />
                        </a>
                    ) : null}
                </div>
                <div className={styles.cTit}>{data.name}</div>
                <p className={styles.cText}>{data.description}</p>
                <div className={styles.tRow}></div>
            </div>
            <Image
                layout="responsive"
                width={100}
                height={100}
                className={styles.projP}
                src={data.image}
                alt="headshot"
            />
        </div>
    );
}
