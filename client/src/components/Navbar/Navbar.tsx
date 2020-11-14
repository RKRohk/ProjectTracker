import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
import HeaderBox from "../HeaderBox/HeaderBox";
import FilledButton from "../FilledButton/FilledButton";
import { useHistory } from "react-router";
const Navbar: React.FC = () => {
    const history = useHistory();

    /**
     * Naviigates to Login Page
     * @param e React.MouseEvent<HTMLButtonELement>
     */
    const pushToLogin = () => {
        history.push("/login");
    };
    return (
        <Flex
            flexGrow={2}
            as="nav"
            align="center"
            justify="space-between"
            wrap="nowrap"
        >
            <Flex align="center" mr={5} ml={5}>
                <a href="/">
                    <Heading size="lg" letterSpacing={"-.1rem"}>
                        Project Tracker
                    </Heading>
                </a>
            </Flex>
            <Flex mr={6} mt={4} justify="flex-end">
                <HeaderBox mr={6} mt={3} fontWeight="bold" content="Features" />
                <HeaderBox mr={6} mt={3} fontWeight="bold" content="FAQ" />
                <FilledButton text="Login" onClick={pushToLogin} />
            </Flex>
        </Flex>
    );
};

export default Navbar;
