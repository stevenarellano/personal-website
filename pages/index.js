import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

// components
import Navbar from "./navbar/navbar";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Steven Arellano</title>
            </Head>
            <body>
                <Navbar />
                here we go
            </body>
        </div>
    );
}
