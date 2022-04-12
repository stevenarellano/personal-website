import { Box } from "@chakra-ui/react";
// import styles from "../styles/Home.module.scss";

// components
import Navbar from "../misc/navbar";
import Main from "../content/main";
import Footer from "../misc/footer";

export default function Home() {
	return (
		<Box maxW='100vw' bg='#eeeeee'>
			<Navbar />
			<Main />
			<Footer />
		</Box>
	);
}
