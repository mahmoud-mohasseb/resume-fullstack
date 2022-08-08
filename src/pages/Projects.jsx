import React, { useState } from "react";
import {
  Box,
  useColorModeValue,
  SimpleGrid,
  Container,
  Text,
} from "@chakra-ui/react";

// import ecommercemode from "./assets/ecommercemode.png";

import { IconButton } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { WebProjects } from "../data/Data";
import { motion } from "framer-motion";

const Projects = () => {
  const hoverbg = useColorModeValue("white", "gray.800");

  return (
    <Container
      id="Projects"
      maxW="full"
      minW="full"
      mt={20}
      centerContent
      overflow="hidden"
    >
      <Box
        borderRadius={"20"}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Text
          fontSize="5rem"
          fontWeight={"900"}
          textTransform={"uppercase"}
          background={"url(https://i.ibb.co/w0dtBsv/1.jpg) no-repeat scroll"}
          color={"transparent"}
          backgroundClip={"text"}
        >
          {"< Projects / >"}
        </Text>
      </Box>
      <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr " }}>
        {WebProjects.map((item, id) => (
          <Box
            key={id}
            w={"400px"}
            h={"300px"}
            m={"3"}
            rounded={"2xl"}
            overflow={"hidden"}
            boxShadow={"2xl"}
          >
            <Box
              w={"400px"}
              h={"300px"}
              bg={hoverbg}
              rounded={"2xl"}
              bgImg={item.image}
              bgSize={item.width}
              bgPosition="center"
              bgRepeat="no-repeat"
              overflow={"hidden"}
              cursor="pointer"
              boxShadow={"2xl"}
              role="group"
              position={"relative"}
              _hover={{
                transform: "scale(1.4)",
                transition: "all 1.5s ease",
              }}
            >
              <Box
                display={"flex"}
                backgroundColor={`rgba(31, 31, 31, 0.85)`}
                flexDirection={"row"}
                gap={"6"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"100%"}
                h={"100%"}
                //   rounded={"md"}
                opacity={0}
                transition="all 1.5s ease"
                transform="translateY(70%)"
                _groupHover={{
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                <IconButton
                  size="lg"
                  onClick={() => window.open(item.github)}
                  borderRadius={"full"}
                  aria-label="AiFillGithub"
                  icon={<FiGithub size={30} />}
                />
                <IconButton
                  size="lg"
                  onClick={() => window.open(item.website)}
                  borderRadius={"full"}
                  aria-label="AiOutlineEye"
                  icon={<AiOutlineEye size={30} />}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
