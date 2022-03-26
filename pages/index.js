import { Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";

// components
import Navbar from "../misc/navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <div>footer</div>
    </Box>
  );
}
