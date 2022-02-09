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
                <a
                    href="https://github.com/stevenarellano"
                    target={"_blank"}
                    className={styles.socialI}
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
                <a
                    href="https://www.instagram.com/_stevenarellano/?hl=en"
                    target={"_blank"}
                    className={styles.socialI}
                    rel="noreferrer"
                >
                    <BsInstagram />
                </a>

                <h5 className={styles.footText}>SOCIALS</h5>

                <a
                    href="https://www.facebook.com/steven.arellano.5095/"
                    target={"_blank"}
                    className={styles.socialI}
                    rel="noreferrer"
                >
                    <BsFacebook />
                </a>
                <a
                    href="https://www.linkedin.com/in/stevenjarellano/"
                    target={"_blank"}
                    onClick={handler}
                    className={styles.socialI}
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
}
