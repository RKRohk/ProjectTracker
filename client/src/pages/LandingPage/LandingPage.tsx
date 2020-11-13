import { Box, Flex, Heading, Image } from "@chakra-ui/core";
import React from "react";
import FilledButton from "../../components/FilledButton/FilledButton";
import HeaderBox from "../../components/HeaderBox/HeaderBox";
import backgroundImage from "../../media/gummy-programming.svg";

const LandingPage: React.FC = () => {
    return (
        <div className="LandingPage">
            <Flex
                flexGrow={2}
                as="nav"
                align="center"
                justify="space-between"
                wrap="nowrap"
            >
                <Flex align="center" mr={5} ml={5}>
                    <Heading size="lg" letterSpacing={"-.1rem"}>
                        Project Tracker
                    </Heading>
                </Flex>
                <Flex mr={6} mt={4} justify="flex-end">
                    <HeaderBox
                        mr={6}
                        mt={3}
                        fontWeight="bold"
                        content="Features"
                    />
                    <HeaderBox mr={6} mt={3} fontWeight="bold" content="FAQ" />
                    <FilledButton text="Login" />
                </Flex>
            </Flex>
            <Flex direction="row" p={8}>
                <Box>
                    <Heading>An easy way to keep track of your tasks</Heading>
                </Box>
                <Flex align="flex-end">
                    <Image src={backgroundImage} />
                </Flex>
            </Flex>
        </div>
    );
};

export default LandingPage;
