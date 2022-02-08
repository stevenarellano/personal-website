import styles from "../../styles/sections/Connect.module.scss";

import ContactForm from "./form/contactForm";
import Image from "next/image";

export default function Connect() {
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="sectionContainer">
            <div className="sectionHeader">
                <hr />
                <h4 className="padLeft">
                    <div>03.</div> Connect With Me
                </h4>
            </div>
            <div className={styles.container}>
                <ContactForm />

                <div className={styles.pWrapper}>
                    <Image layout="fill" objectFit="fill" src={"/pikachu.gif"} alt="pika" />
                </div>
            </div>
        </div>
    );
}
