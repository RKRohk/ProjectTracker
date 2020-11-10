import { Flex, Heading } from "@chakra-ui/core";
import FilledButton from "../FilledButton/FilledButton";
import HeaderItem from "../HeaderItem/HeaderItem";
import React from "react";

const Navbar: React.FC = () => {
    return (
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
                <HeaderItem
                    mr={6}
                    mt={3}
                    fontWeight="bold"
                    content="Features"
                    to="/features"
                />

                <HeaderItem
                    mr={6}
                    mt={3}
                    fontWeight="bold"
                    content="FAQ"
                    to="/faq"
                />
                <FilledButton text="Login" />
            </Flex>
        </Flex>
    );
};

export default Navbar;
