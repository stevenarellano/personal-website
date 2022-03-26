import { Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";

// components
import Navbar from "../misc/navbar";
import Main from "../content/main";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Main />
      <div>footer</div>
    </Box>
  );
}
