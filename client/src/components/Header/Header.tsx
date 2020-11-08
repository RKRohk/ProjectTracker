import { Flex } from "@chakra-ui/core";
import React from "react";

const Header: React.FC = () => {
    return (
        <Flex
            as="nav"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
        ></Flex>
    );
};

export default Header;
