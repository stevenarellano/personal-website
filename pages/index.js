import Head from "next/head";
import Image from "next/image";

// components
import Navbar from "./misc/navbar";
import Main from "./main/main";
import Footer from "./misc/footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steven Arellano</title>
            </Head>
            <div className="root">
                <Navbar />
                <Main />
                <Footer />
            </div>
        </div>
    );
}
