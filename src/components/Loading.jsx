import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/reactjs.json";
import { Box } from "@chakra-ui/react";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box align={"center"}>
      <Lottie options={defaultOptions} height={600} width={660} />
    </Box>
  );
};

export default Loading;
