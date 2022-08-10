import React, { useState } from "react";
import { Box, Image, Grid, Text, Link } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import resume from "../assets/MahmoudAhmed.pdf";
import CV from "../assets/cv1.png";
import Lottie from "react-lottie";
import * as animationData from "../assets/mainshowcase.json";

const Main = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    // <Box>
    <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr " }} id={"/"}>
      <Box m={"20"} lineHeight={"2.2"} align={"start"}>
        <Box
          fontSize={"30"}
          fontFamily={"Cormorant"}
          fontWeight="bold"
          fontsize={"30"}
        >
          <Typewriter
            options={{
              strings: ["Hello World", "Mahmoud Ahmed", "Full-stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Text mt={"5"} fontSize="20">
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web and Mobile applications with JavaScript / Reactjs /
          Nodejs / React Native and some other cool libraries and frameworks.
        </Text>
        <Box w={"70px"} h={"70px"}>
          <Link textDecoration={"none"} href={resume} download>
            <Image
              src={CV}
              alt={"resume"}
              w={"70px"}
              h={"70px"}
              ml={10}
              mt={5}
            />
          </Link>
        </Box>
      </Box>
      <Box
        w={"170"}
        h={"450"}
        rounded={"lg"}
        //   alignContent={"start"}
        //   mt={-12}
        //   background={"yellow"}
        pos={"relative"}
      >
        <Lottie options={defaultOptions} height={600} width={560} />
      </Box>
    </Grid>
    // </Box>
  );
};

export default Main;
