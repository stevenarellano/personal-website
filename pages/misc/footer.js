import styles from "../../styles/misc/Footer.module.scss";

// icons
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <div className={styles.container}>
            <hr />

            <div className={styles.socCont}>
                <div className={styles.socHold}>
                    <a className={styles.socialI}>
                        <BsGithub />
                    </a>
                    <a className={styles.socialI}>
                        <BsInstagram />
                    </a>
                </div>
                <h5 className={styles.footText}>SOCIALS</h5>
                <div className={styles.socHold}>
                    <a className={styles.socialI}>
                        <BsFacebook />
                    </a>
                    <a className={styles.socialI}>
                        <BsLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}
