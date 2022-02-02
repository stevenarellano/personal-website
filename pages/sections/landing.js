import styles from "../../styles/Landing.module.scss";

export default function Landing() {
    return (
        <div className={styles.container}>
            <h5 className={styles.hi}>Hi, my name is</h5>
            <h1 className={styles.head}>Steven Arellano.</h1>
            <h1 className={styles.subhead}>I like to build web apps.</h1>
            <p className={styles.about}>
                I'm currently a sophomore at the University of Chicago working
                to build satisfying UIs and amazing decentralized applications.
            </p>
        </div>
    );
}
