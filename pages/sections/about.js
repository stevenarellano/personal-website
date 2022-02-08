import styles from "../../styles/sections/About.module.scss";
import Image from "next/image";
import headshot from "../../public/headshot.png";

export default function About() {
    return (
        <div className={`sectionContainer`}>
            <div className="sectionHeader">
                <h4 className="padRight">
                    <div>01.</div> About Me
                </h4>
                <hr />
            </div>
            <div className={styles.container}>
                <h5 className={styles.contentText}>
                    <p>
                        hi, i'm <span className="pColor">steven</span>!
                    </p>
                    <br />
                    <p>
                        i'm a{" "}
                        <span className="pColor">
                            {" "}
                            full stack software engineer{" "}
                        </span>
                        specializing in creating satisfying UIs. i spent my time
                        practicing algorithm questions and learning how to
                        create an impact in the upcoming{" "}
                        <span className="pColor">metaverse</span>.
                    </p>
                    <br />
                    <p>
                        i currently attend the{" "}
                        <span className="pColor"> university of chicago</span>{" "}
                        and am studying both{" "}
                        <span className="pColor">
                            {" "}
                            computer scinece and business
                        </span>
                        . tech has always been an exciting subject for me, and i
                        strive to innovate and provide exciting projects for
                        everyone.
                    </p>
                </h5>
                <div className={styles.pContainer}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        className={styles.headshot}
                        src={"/headshot.png"}
                        alt="headshot"
                    />
                </div>
            </div>
        </div>
    );
}
