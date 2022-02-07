import { useState } from "react";
import styles from "../../../styles/sections/Connect.module.scss";
import Email from "./email";

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
        console.log(formData);
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
                    name="address"
                    placeholder="Email"
                    type={"text"}
                    value={formData.address}
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
