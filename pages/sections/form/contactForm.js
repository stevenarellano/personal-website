import styles from "../../../styles/sections/Connect.module.scss";

export default function ContactForm() {
    return (
        <form className={styles.formCont}>
            <div className={styles.formRow}>
                <input
                    className={styles.halfInput}
                    name="name"
                    placeholder="Name"
                    type={"text"}
                />
                <input
                    className={styles.halfInput}
                    name="email"
                    placeholder="Email"
                    type={"text"}
                />{" "}
            </div>
            <div className={styles.formRow}>
                <textarea
                    className={`${styles.maxInput} ${styles.message}`}
                    name="message"
                    placeholder="Message"
                    type={"text"}
                />{" "}
            </div>
            <div className={styles.formRow}>
                <button className={`${styles.maxInput} ${styles.submit}`}>
                    Send{" "}
                </button>
            </div>
        </form>
    );
}
