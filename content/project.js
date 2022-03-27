import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "../styles/Projects.module.scss";

// components

export default function Project({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, image, description, github, website, tools } = data;

  const toolEle = tools.map((tool) => (
    <Box bg="lightgrey" px=".5rem" mr=".5rem">
      {tool}
    </Box>
  ));
  return (
    <>
      <Flex
        bg={`url(${image})`}
        bgColor="blue"
        backgroundSize="cover"
        backgroundPosition="50%"
        w={{ base: "20rem", md: "20rem" }}
        h={{ base: "20rem", md: "20rem" }}
        mb="2rem"
        align="center"
        borderRadius=".25rem"
        justify="center"
        className={styles.thumbnail}
      >
        <Button
          fontSize="1.5rem"
          borderRadius=".5rem"
          className={styles.clickme}
          variant="solid"
          colorScheme="blue"
          onClick={onOpen}
        >
          SEE MORE
        </Button>
      </Flex>

      <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column">
              <Flex align="center" flexWrap="wrap">
                {toolEle}
              </Flex>
              <Box my="1rem"> {description}</Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex w="100%" justify="flex-start">
              {website && (
                <Link target="_blank" href={website}>
                  <FiExternalLink size="2rem" />
                </Link>
              )}
              {github && (
                <Link target="_blank" ml="1rem" href={github}>
                  <FiGithub size="2rem" />
                </Link>
              )}

              <Button ml="auto" colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
