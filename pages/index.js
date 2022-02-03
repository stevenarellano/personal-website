import Head from "next/head";
import Image from "next/image";

// components
import Navbar from "./misc/navbar";
import Main from "./main/main";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Steven Arellano</title>
            </Head>
            <body>
                <Navbar />
                <Main />
            </body>
        </div>
    );
}
