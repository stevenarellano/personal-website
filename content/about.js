import { Box, Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium, BsMailbox2 } from "react-icons/bs";
import styles from "../styles/About.module.scss";

// components

export default function About() {
  return (
    <Flex
      h="95vh"
      w="100%"
      background="linear-gradient(20deg, #eeeeee 0 50%, #0583d2 50% 100%);"
      fontSize="3rem"
      flexDir="column"
      justify="center"
      align="center"
      gap="1rem"
    >
      <Box lineHeight="1.5rem">Steven Arellano</Box>
      <Box fontSize={{ base: "1.5rem", md: "1.75rem" }}>
        blockchain and web developer
      </Box>
      <Flex className={styles.iconBar} fontSize="2.5rem" gap="3rem">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/stevenarellano"
        >
          <BsGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stevenjarellano/"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@stevenjarellano"
        >
          <BsMedium />
        </a>
        <a href="#contact">
          <BsMailbox2 />
        </a>
      </Flex>
      <Box fontSize="2rem">
        <a className={`${styles.resume} ani`} href="#resume">
          resume
        </a>
      </Box>
      <script src="finisher-header.es5.min.js" type="text/javascript" />
    </Flex>
  );
}
