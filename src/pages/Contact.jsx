import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import mahmoud from "../assets/mahmoud.png";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9zxymhc",
        "template_xv2lv7v",
        form.current,
        "user_ClfWuVOjW6NdnYqmC7pF6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      id={"Contacts"}
    >
      <Flex>
        <Box
          boxShadow={"2xl"}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color="gray.500">Contact</Heading>

                  <Image
                    borderRadius={"full"}
                    height={100}
                    width={100}
                    // opacity={"0.7"}
                    objectFit={"cover"}
                    // boxSize="100%"
                    src={mahmoud}
                    alt="Mahmoud Ahmed"
                  />
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 5 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.500"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +40752331545
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.500"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        Ghareb4@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.500"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn size="20px" />}
                        onClick={() =>
                          window.open(`
                        https://www.google.ro/maps/place/Bucium+507201/@45.7355387,25.1033062,11z/data=!4m5!3m4!1s0x474cafe0ed416c71:0xbe25b01cee6f1831!8m2!3d45.7426541!4d25.0971086?hl=ro`)
                        }
                      >
                        Brasov, Romania
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      rounded={"full"}
                      icon={
                        <FaFacebookF
                          size={"28"}
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
                          size={"28"}
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/in/mahmoud-mohasseb-5b6824b6/"
                            )
                          }
                        />
                      }
                    />
                    <IconButton
                      rounded={"full"}
                      icon={
                        <DiGithubAlt
                          size={"28"}
                          onClick={() =>
                            window.open("https://github.com/mahmoud-mohasseb")
                          }
                        />
                      }
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="gray.500">
                    <VStack
                      spacing={5}
                      as={"form"}
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" name="user_email" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md" name="user_email" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          type={"text"}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          type="submit"
                          value="Send"
                          borderRadius={"full"}
                          fontSize={"sm"}
                          fontWeight={600}
                          color={"white"}
                          bg={"black"}
                          href={"#"}
                          _hover={{
                            bg: "gray.800",
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
