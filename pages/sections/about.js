import styles from "../../styles/sections/About.module.scss";
import Image from "next/image";
import headshot from "../../public/headshot.jpeg";

export default function About() {
    return (
        <div className={`${styles.container} sectionContainer`}>
            <div className={styles.brk}>
                <h4>01. About Me</h4>

                <hr />
            </div>
            <h5 className={styles.contentText}>
                <p>
                    hi my name is Steven and I've been in web development for
                    the past 3 years. I enjoy problem solving and helping
                    others.
                </p>
                <br />
                <p>
                    I'm skilled in using Javascript, Python, SQL, Rust, and C! I
                    hopoe to be an amazing full stack webdeveloper and create an
                    impact in the defi community.
                </p>
                <br />
                <p>Feel free to reach out, and I'd love to help you out.</p>
            </h5>
            <div className={styles.pContainer}>
                <Image
                    className={styles.headshot}
                    src={headshot}
                    alt="headshot"
                />
            </div>
        </div>
    );
}
