import { Box, Divider, Flex } from "@chakra-ui/react";

// components

export default function SectionHead({ name, number }) {
  return (
    <Flex
      px="1rem"
      fontSize="1rem"
      align="center"
      w={{ base: "100%", md: "65%" }}
      justify="space-between"
      overflow="hidden"
    >
      <Flex whiteSpace="nowrap" pr="1rem" display="block">
        {number}. {name}
      </Flex>
      <Divider borderColor="purple" />
    </Flex>
  );
}
