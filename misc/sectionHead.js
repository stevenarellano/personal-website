import { Box, Divider, Flex } from "@chakra-ui/react";

// components

export default function SectionHead({ name, number }) {
  const ids = ["projects", "contact"];
  const ind = parseInt(number) - 1;
  return (
    <Flex
      id={ids[ind]}
      px={{ base: "1rem", md: "0" }}
      fontSize="1.5rem"
      align="center"
      w={{ base: "100%", md: "65%" }}
      justify="space-between"
      overflow="hidden"
    >
      <Flex
        textTransform="uppercase"
        whiteSpace="nowrap"
        pr="1rem"
        display="block"
      >
        <Box display="inline">{number}. </Box>
        {name}
      </Flex>
      <Divider borderColor="#0583D2" />
    </Flex>
  );
}
