import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { AiFillRocket } from "react-icons/ai";

const ScrollUp = () => {
  const scrollpositionheight = window.innerHeight - 60;
  const scrollpositionwidth = window.innerWidth - 60;
  return (
    <Box
      position={"fixed"}
      left={scrollpositionwidth}
      top={scrollpositionheight}
    >
      <Link activeClass="active" to={"/"} spy={true} smooth={true}>
        <IconButton
          variant="outline"
          rounded={"full"}
          fontSize="20px"
          icon={<AiFillRocket />}
        />
      </Link>
      {/* <IconButton /> */}
    </Box>
  );
};

export default ScrollUp;
