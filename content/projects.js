import { SimpleGrid, Box, Flex } from "@chakra-ui/react";
import styles from "../styles/Projects.module.scss";

// components
import { PROJECT_DATA } from "../data/projectData";

export default function Projects() {
  return (
    <Flex my="1rem" w={{ base: "100%", md: "65%" }} gap="1rem" flexWrap="wrap">
      <Box bg="purple" w="15rem" h="15rem">
        helo
      </Box>
      <Box bg="purple" w="15rem" h="15rem">
        helo
      </Box>
      <Box bg="purple" w="15rem" h="15rem">
        helo
      </Box>
      <Box bg="purple" w="15rem" h="15rem">
        helo
      </Box>
    </Flex>
  );
}
