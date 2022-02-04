import styles from "../../styles/misc/Footer.module.scss";
import axios from "axios";

// icons
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
    function handler() {
        axios.get("/api/hello").then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    return (
        <div className={styles.container}>
            <hr />

            <div className={styles.socCont}>
                <a className={styles.socialI}>
                    <BsGithub />
                </a>
                <a className={styles.socialI}>
                    <BsInstagram />
                </a>

                <h5 className={styles.footText}>SOCIALS</h5>

                <a className={styles.socialI}>
                    <BsFacebook />
                </a>
                <a onClick={handler} className={styles.socialI}>
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
}
