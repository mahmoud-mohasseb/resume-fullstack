import React, { useRef } from "react";
import { Box, IconButton, Image, SimpleGrid, Center } from "@chakra-ui/react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { ReactNativeProjects } from "../data/Data";

const Video = () => {
  return (
    <Center>
      <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr " }} gap="4">
        {ReactNativeProjects.map((item, id) => (
          <Box
            position={"relative"}
            height={"300px"}
            width={"350px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              icon={<AiOutlinePlayCircle size={"50"} />}
              size={"lg"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              zIndex={"2"}
              transform={"translateX(-50%) translateY(-50%)"}
              onClick={() => window.open(item.youtube)}
            />
            <Image
              alt={"Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={item.image}
              // opacity="0.5"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default Video;
