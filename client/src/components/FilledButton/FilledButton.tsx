import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/core";
import { BoxProps } from "@chakra-ui/core";
import { MotionProps } from "framer-motion";
import React from "react";
const MotionFlex = motion.custom(Flex);
const COLOR = "#624DE3";

const FilledButton: React.FC<
  { COLOR?: string; text: string } & BoxProps & MotionProps
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
    >
      {props.text}
    </MotionFlex>
  );
};

export default FilledButton;
