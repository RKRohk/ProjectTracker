import { Box, BoxProps } from "@chakra-ui/core";
import { motion, MotionProps } from "framer-motion";
import React from "react";
const COLOR = "#624DE3";
const MotionBox = motion.custom(Box);
interface HeaderBoxContent {
  content?: string;
}

const HeaderBox: React.FC<HeaderBoxContent & MotionProps & BoxProps> = (
  props
) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.1, color: COLOR, textDecoration: "underline" }}
      {...props}
    >
      {props.content}
    </MotionBox>
  );
};

export default HeaderBox;
