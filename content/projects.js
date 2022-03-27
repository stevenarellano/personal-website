import { SimpleGrid, Box, Flex } from "@chakra-ui/react";
import styles from "../styles/Projects.module.scss";

// components
import { PROJECT_DATA } from "../data/projectData";
import Project from "./project";

export default function Projects() {
  const projects = PROJECT_DATA.map((data) => (
    <Project key={Math.random()} data={data} />
  ));

  return (
    <Flex
      mt="2rem"
      mb="25vh"
      px={{ base: "1rem", md: "0" }}
      w={{ base: "100%", md: "65%" }}
      gap="1rem"
      justify="space-between"
      align="center"
      flexWrap="wrap"
      flexDir={{ base: "column", md: "row" }}
    >
      {projects}
    </Flex>
  );
}
