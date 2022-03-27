import { Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";

// components
import Navbar from "../misc/navbar";
import Main from "../content/main";
import Footer from "../misc/footer";

export default function Home() {
  return (
    <>
      <head>
        <title>Steven Arellano</title>
      </head>
      <Box bg="#eeeeee">
        <Navbar />
        <Main />
        <Footer />
      </Box>
    </>
  );
}
