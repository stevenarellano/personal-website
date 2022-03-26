import { Box, Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium, BsMailbox2 } from "react-icons/bs";
import styles from "../styles/About.module.scss";

// components

export default function About() {
  return (
    <Flex
      h="90vh"
      fontSize="3rem"
      flexDir="column"
      justify="center"
      align="center"
      gap="1rem"
    >
      <Box lineHeight="1.5rem">Steven Arellano</Box>
      <Box fontSize="1.75rem">blockchain and web developer</Box>
      <Flex fontSize="2.5rem" gap="3rem">
        <a href="https://github.com/stevenarellano">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/stevenjarellano/">
          <BsLinkedin />
        </a>
        <a href="https://medium.com/@stevenjarellano">
          <BsMedium />
        </a>
        <a href="#contact">
          <BsMailbox2 />
        </a>
      </Flex>
      <Box fontSize="2rem">
        <a className={styles.resume} href="#resume">
          resume
        </a>
      </Box>
    </Flex>
  );
}
