import { Box, Flex } from "@chakra-ui/react";

// components
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <Flex
      h="75vh"
      px={{ base: "1rem", md: "0" }}
      w={{ base: "100%", md: "65%" }}
      fontSize="1.75rem"
      my="2rem"
      justify="flex-start"
    >
      <Box w={{ base: "100%", md: "55%" }}>
        Please feel free to send me an email at{" "}
        <a
          className={`ani ${styles.lin}`}
          href="mailto: stevenjarellano2@gmail.com"
        >
          {" "}
          stevenjarellano2@gmail.com{" "}
        </a>{" "}
        or find me on{" "}
        <a
          className={`ani ${styles.lin}`}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stevenjarellano/"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          className={`ani ${styles.lin}`}
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@stevenjarellano"
        >
          Medium
        </a>
        .
      </Box>
    </Flex>
  );
}
