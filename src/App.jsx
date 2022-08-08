import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Float from "./components/Float";
import Main from "./components/Main";
import ScrollUp from "./components/ScrollUp";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Video from "./pages/Video";
import SkillsIcons from "./pages/Skills";
import Loading from "./components/Loading";

function App() {
  if (!Main && !Navbar && !Float) {
    return <Loading />;
  } else {
    return (
      <Box>
        <Navbar />
        <Main />
        <Float />
        <Projects />
        <Video />
        <SkillsIcons />
        <Contact />
        <ScrollUp />
      </Box>
    );
  }
}

export default App;
