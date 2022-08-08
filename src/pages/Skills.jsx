import React from "react";
import { Image, Box, Text, Grid, Container } from "@chakra-ui/react";
import { Skills } from "../data/Data";
import { motion } from "framer-motion";

const SkillsIcons = () => {
  return (
    <Container
      mt={50}
      id={"Skills"}
      borderRadius={"20"}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      maxW="full"
      minW="full"
      //   w="500px"
      centerContent
      overflow="hidden"
    >
      <Text
        fontSize="5rem"
        fontWeight={"900"}
        textTransform={"uppercase"}
        background={"url(https://i.ibb.co/w0dtBsv/1.jpg) no-repeat scroll"}
        color={"transparent"}
        backgroundClip={"text"}
      >
        {"<  MY SKILLS / >"}
      </Text>
      {/* templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr " }} */}
      <Grid
        templateColumns={{
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={2}
        m={"10"}
      >
        {Skills.map((item) => {
          return (
            <Box
              borderRadius="lg"
              as={motion.div}
              whileHover={{ scale: [null, 1.2, 1] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={"150px"}
                height={"100px"}
                bg={"white"}
                alt={"Image"}
                rounded={"lg"}
                objectFit={"contain"}
                p={"2"}
                overflow={"hidden"}
                boxShadow={"2xl"}
                src={item.image}
              />
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SkillsIcons;
