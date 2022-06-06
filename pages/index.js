import { Box, Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import Construction from "../content/construction";
// import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<Box maxW='100vw' height='100vh' bg='#eeeeee'>
			<Construction />
		</Box>
	);
}
