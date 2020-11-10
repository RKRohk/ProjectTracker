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
        ></Flex>
    );
};

export default Header;
