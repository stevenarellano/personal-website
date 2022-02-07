import styles from "../../../styles/sections/Projects.module.scss";
import Image from "next/image";
import headshot from "../../../public/headshot.png";

import { VscSourceControl } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";

import ProjSchema from "./pSchema";

export default function Project({ data }) {
    return (
        <div className={styles.project}>
            <div className={styles.projC}>
                <div className={styles.iRow}>
                    {data.website ? (
                        <a target={"_blank"} href={data.website}>
                            <GoLinkExternal className={styles.iLink} />
                        </a>
                    ) : (
                        ""
                    )}
                    {data.github ? (
                        <a target={"_blank"} href={data.github}>
                            <VscSourceControl className={styles.iLink} />
                        </a>
                    ) : (
                        ""
                    )}
                </div>
                <div className={styles.cTit}>{data.name}</div>
                <p className={styles.cText}>{data.description}</p>
                <div className={styles.tRow}>
                    {data.tools.map((tool) => {
                        return <span key={tool}>{tool}</span>;
                    })}
                </div>
            </div>
            <Image className={styles.projP} src={headshot} alt="headshot" />
        </div>
    );
}
