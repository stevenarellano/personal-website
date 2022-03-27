import { Flex } from "@chakra-ui/react";

// components
import About from "./about";
import Projects from "./projects";
import SectionHead from "../misc/sectionHead";
import Contact from "./contact";

export default function Main() {
  return (
    <Flex justify="center" align="center" flexDir="column">
      <About />
      <SectionHead name="Projects" number="01" orientation="left" />
      <Projects />
      <SectionHead name="Contact Me" number="02" orientation="left" />
      <Contact />
    </Flex>
  );
}
