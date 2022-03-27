import { Box, Flex } from "@chakra-ui/react";
import styles from "../styles/Misc.module.scss";

export default function Navbar() {
  return (
    <Flex
      className={styles.navb}
      bg="#0583d2"
      fontSize="1.2rem"
      p="1rem"
      top="0"
      gap="2rem"
    >
      <Box>
        <a href="#home">Home</a>
      </Box>
      <Box ml="auto">
        <a href="#projects">Projects</a>
      </Box>
      <Box>
        <a href="#contact">Contact</a>
      </Box>
    </Flex>
  );
}
