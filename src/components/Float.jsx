import React from "react";
import { Box, Stack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { DiGithubAlt } from "react-icons/di";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Float = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position={"fixed"} top={"250px"} zIndex={"2"} left={"2"}>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"center"}
        direction={"column"}
        spacing={6}
        py={"2"}
        w={"10"}
        borderRadius={"2xl"}
        align="center"
      >
        <IconButton
          rounded={"full"}
          icon={
            <FaFacebookF
              size={"30"}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100028325798571"
                )
              }
            />
          }
        />
        <IconButton
          rounded={"full"}
          icon={
            <AiFillLinkedin
              size={"30"}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mahmoud-mohasseb-5b6824b6/"
                )
              }
            />
          }
        />
        {/* github */}
        <IconButton
          rounded={"full"}
          icon={
            <DiGithubAlt
              size={"30"}
              onClick={() => window.open("https://github.com/mahmoud-mohasseb")}
            />
          }
        />

        <IconButton
          rounded={"full"}
          icon={
            <AiFillYoutube
              size={"30"}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UC7ZGXKD0eqYB-9Usg8poazg"
                )
              }
            />
          }
        />

        <IconButton borderRadius={"full"} onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <MdDarkMode size={"20"} />
          ) : (
            <MdLightMode size={"20"} />
          )}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Float;
