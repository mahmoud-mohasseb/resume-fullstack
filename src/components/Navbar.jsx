import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenuUnfold, AiFillCloseCircle } from "react-icons/ai";

import { Link } from "react-scroll";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack direction={"row"}>
      {NAVITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {/* <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger> */}
          <Link
            activeClass="active"
            to={navItem.label}
            spy={true}
            smooth={true}
            // p={10}
            // py={20}
            // href={navItem.href ?? "/"}
            // fontSize={"inherit"}
            // fontWeight={"semibold"}
            // fontFamily={"heading"}
            // color={linkColor}
            // _hover={{
            //   textDecoration: "none",
            //   color: linkHoverColor,
            //   width: "100%",
            //   left: "0",
            // }}
          >
            <Text
              fontSize={"inherit"}
              fontWeight={"semibold"}
              fontFamily={"heading"}
              pl={10}
              mr={15}
              color={linkColor}
              cursor={"pointer"}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
                width: "100%",
                left: "0",
              }}
            >
              {navItem.label}
            </Text>
          </Link>
          {/* </PopoverTrigger>
          </Popover> */}
        </Box>
      ))}
    </Stack>
  );
};

const MobiletopNav = () => {
  //   const { isOpen, onToggle } = useDisclosure();
  const textcolor = useColorModeValue("gray.600", "gray.200");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAVITEMS.map((navItem) => (
        <Box>
          <Stack spacing={1}>
            <Flex
              py={2}
              as={Link}
              justifyContent={"center"}
              //   align={"center"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Link
                activeClass="active"
                to={navItem.label}
                spy={true}
                smooth={true}
              >
                <Text fontWeight={600} color={textcolor}>
                  {navItem.label}
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        as="header"
        w="100%"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderBottom={0.4}
        shadow={"sm"}
        borderStyle={"inherit"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        //   align={"center"}
        justify={{ base: "center", md: "start" }}
      >
        <Flex
          //   flex={{ base: 1, md: "auto" }}
          //   ml={{ base: -2 }}
          display={{ base: "start", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            borderRadius={"full"}
            icon={
              isOpen ? (
                <AiFillCloseCircle size={"30"} />
              ) : (
                <AiOutlineMenuUnfold size={"30"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        {/*  */}
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Flex>
            <Text
              borderLeft="3px solid red"
              fontWeight={"bold"}
              fontSize={"20"}
              textTransform={"uppercase"}
            >
              Mahmoud
            </Text>
            <Text ml="2" fontSize={"20"}>
              Ahmed
            </Text>
          </Flex>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity align={"center"}>
        <MobiletopNav />
      </Collapse>
    </Box>
  );
};
const NAVITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Skills",
    href: "/Skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contacts",
    href: "/Contacts",
  },
];
export default Navbar;
