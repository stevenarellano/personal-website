import Image from "next/image";

import { VscSourceControl } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import styles from "../../../styles/sections/Projects.module.scss";

export default function Project({ data }) {
    console.log(data);

    const websiteEle = (data.website ? (
        <a
            target="_blank"
            href={data.website}
            rel="noreferrer"
        >
            <GoLinkExternal className={styles.iLink} />
        </a>
    ) : null);
    const githubEle = (data.github ? (
        <a
            target="_blank"
            href={data.github}
            rel="noreferrer"
        >
            <VscSourceControl className={styles.iLink} />
        </a>
    ) : null);


    const toolsEle = [];
    for (let i = 0; i < data.tools.length; i += 1) {
        toolsEle.push(
            <>
                <div className={styles.cTool}>{data.tools[i]}</div>
                {(i === data.tools.length - 1) ? null : <div>,&nbsp;</div>}
            </>

        )
    }

    return (
        <div className={styles.project}>
            <div className={styles.projC}>
                <div className={styles.cHead}>
                    <div className={styles.cTit} >
                        {data.name}
                    </div>
                    <div className={styles.cLinks}>
                        {websiteEle}
                        {githubEle}
                    </div>
                </div>
                <p className={styles.cDes}>{data.description}</p>
                <div className={styles.cTools} >
                    Tools:&nbsp;{toolsEle}
                </div>
            </div>
            <Image
                layout="responsive"
                width={100}
                height={100}
                className={styles.projP}
                src={data.image}
                alt="headshot"
            />
        </div >
    );
}
