import styles from "../../styles/sections/Connect.module.scss";
import headshot from "../../public/headshot.jpeg";
import Image from "next/image";
import ContactForm from "./form/contactForm";

export default function Connect() {
    return (
        <div className="sectionContainer">
            <div className="sectionHeader">
                <hr />
                <h4 className="padLeft">
                    <div>04.</div> Connect With Me
                </h4>
            </div>
            <div className={styles.container}>
                <ContactForm />
                <div className={styles.pWrapper}>
                    <Image
                        className={styles.formI}
                        src={headshot}
                        alt="headshot"
                    />
                </div>
            </div>
        </div>
    );
}
