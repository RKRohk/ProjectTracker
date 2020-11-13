import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/core";
import { BoxProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";
import React from "react";
const MotionFlex = motion.custom(Flex);
const COLOR = "#624DE3";

/**
 * Takes Color, Text and onClick for the butotn
 */
interface FilledButtonProps {
    COLOR?: string;
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Props for filled button
 * @param COLOR `String`
 * @param text `String` Text for the button
 * @param onClick `Function` onClick handler for the button
 */
const FilledButton: React.FC<
    FilledButtonProps &
        BoxProps &
        MotionProps &
        React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
    return (
        <MotionFlex
            as="button"
            align="flex-end"
            color="white"
            borderRadius={["1rem"]}
            backgroundColor={COLOR}
            px={6}
            py={2}
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{ scale: "0.9" }}
            onClick={props.onClick}
        >
            {props.text}
        </MotionFlex>
    );
};

export default FilledButton;
