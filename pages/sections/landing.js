import styles from "../../styles/sections/Landing.module.scss";

export default function Landing() {
    return (
        <div className={styles.container}>
            <span className={styles.hi}>hi, my name is</span>
            <h1 className={styles.head}>steven arellano.</h1>
            <h1 className={styles.subhead}>i build interactive web apps.</h1>
            <p className={styles.about}>
                I&apos;m currently a sophomore at the University of Chicago
                working to build satisfying UIs and amazing decentralized
                applications.
            </p>
        </div>
    );
}
