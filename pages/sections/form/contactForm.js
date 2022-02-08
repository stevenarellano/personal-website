import { useState } from "react";
import styles from "../../../styles/sections/Connect.module.scss";
import Email from "../../../data/email";

export default function ContactForm() {
    let [formData, setFormData] = useState(new Email("", "", ""));
    function handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        let newForm = { ...formData };
        newForm[name] = value;
        setFormData(newForm);
        console.log(value);
    }

    function submitForm(e) {
        e.preventDefault();
        window.open(
            `mailto:${"stevenjarellano2@gmail.com"}?subject=Inquiry From Personal Website&body=${
                formData.message
            }`
        );
        let newEmail = new Email("", "", "");
        setFormData(newEmail);
    }

    return (
        <form className={styles.formCont}>
            <div className={styles.formRow}>
                <input
                    autoComplete="off"
                    className={styles.maxInput}
                    name="name"
                    placeholder="Name"
                    type={"text"}
                    value={formData.name}
                    onChange={handleUserInput}
                />
            </div>
            <div className={styles.formRow}>
                <input
                    autoComplete="off"
                    className={styles.maxInput}
                    name="subject"
                    placeholder="Subject"
                    type={"text"}
                    value={formData.subject}
                    onChange={handleUserInput}
                />{" "}
            </div>
            <div className={styles.formRow}>
                <textarea
                    autoComplete="off"
                    className={`${styles.maxInput} ${styles.message}`}
                    name="message"
                    placeholder="Message"
                    type={"text"}
                    value={formData.message}
                    onChange={handleUserInput}
                />{" "}
            </div>
            <div className={styles.formRow}>
                <button
                    onClick={submitForm}
                    className={`${styles.maxInput} ${styles.submit}`}
                >
                    Send{" "}
                </button>
            </div>
        </form>
    );
}
