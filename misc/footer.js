import { Box, Divider, Flex, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium, BsMailbox2 } from "react-icons/bs";

import styles from "../styles/Misc.module.scss";

export default function Footer() {
  return (
    <Flex fontSize="1.5rem" w="100%" flexDir="column">
      <Divider borderColor="purple" />
      <Flex p="2rem" flexDir="column">
        <Flex align="center" gap="1rem">
          Links:{" "}
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
        <Box>
          Email:{" "}
          <a
            className={`ani ${styles.lin}`}
            href="mailto: stevenjarellano2@gmail.com"
          >
            {" "}
            stevenjarellano2@gmail.com{" "}
          </a>
        </Box>
      </Flex>
    </Flex>
  );
}
