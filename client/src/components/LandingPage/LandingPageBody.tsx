import { Box, Flex, Heading, Image } from "@chakra-ui/core";
import React from "react";
import backgroundImage from "../../media/gummy-programming.svg";
const LandingPageBody: React.FC = () => {
    return (
        <Flex direction="row" p={8}>
            <Box>
                <Heading>An easy way to keep track of your tasks</Heading>
            </Box>
            <Flex align="flex-end">
                <Image src={backgroundImage} />
            </Flex>
        </Flex>
    );
};

export default LandingPageBody;
