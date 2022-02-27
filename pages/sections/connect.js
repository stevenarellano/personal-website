import Image from "next/image";
import styles from "../../styles/sections/Connect.module.scss";

import ContactForm from "./form/contactForm";

export default function Connect() {

    return (
        <div id="connect" className="sectionContainer">
            <div className="sectionHeader">

                <h4 className="padRight">
                    <div>03.</div> Connect With Me
                </h4>
                <hr />
            </div>
            <div className={styles.container}>
                <ContactForm />

                <div className={styles.pWrapper}>
                    <Image layout="fill" objectFit="fill" src="/pikachu.gif" alt="pika" />
                </div>
                <div> </div>
            </div>
        </div>
    );
}
