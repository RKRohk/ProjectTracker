import { Box, BoxProps } from "@chakra-ui/core";
import { motion, MotionProps } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const COLOR = "#624DE3";
const MotionBox = motion.custom(Box);
interface HeaderBoxContent {
    content: string;
    to: string;
}

const HeaderItem: React.FC<HeaderBoxContent & MotionProps & BoxProps> = (
    props
) => {
    return (
        <Link to={props.to}>
            <MotionBox
                whileHover={{
                    scale: 1.1,
                    color: COLOR,
                    textDecoration: "underline",
                }}
                {...props}
            >
                {props.content}
            </MotionBox>
        </Link>
    );
};

export default HeaderItem;
