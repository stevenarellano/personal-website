import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

// components
import Navbar from "./navbar/navbar";
import Main from "./main/main";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steven Arellano</title>
            </Head>
            <body className={styles.container}>
                <Navbar />
                <Main />
            </body>
        </div>
    );
}
