import { Box, Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";

export default function Construction() {
	return (
		<Flex
			h='100%'
			w='100%'
			align='center'
			justify='center'
			flexDir='column'>
			<Box fontSize='2rem'>
				My website is currently under construction
			</Box>
			<Box>
				In the meantime, please use the links below to see my work
			</Box>
			<Flex fontSize='2rem' pt='1rem' gap='2rem'>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://github.com/stevenarellano'>
					<BsGithub />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/stevenjarellano/'>
					<BsLinkedin />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://medium.com/@stevenjarellano'>
					<BsMedium />
				</a>
			</Flex>
		</Flex>
	);
}
