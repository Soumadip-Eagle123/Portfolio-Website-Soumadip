import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        "Talk is cheap. Show me the code." <br />
        Here are some of my featured projects:
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Agentic AI Honeypot",
    desc: "Autonomous honeypot system evaluating scam messages and engaging scammers in tactical conversations.",
    url: "https://github.com/Soumadip-Eagle123/Agentic-AI-Honeypot-Complete",
  },
  {
    id: 2,
    title: "Agentic Supply Chain Guardian",
    desc: "Warehouse logistics system with interactive Leaflet.js tracking and self-hosted Llama 3 AI transfer agents.",
    url: "https://github.com/Soumadip-Eagle123/agentic-supply-chain-guardian",
  },
  {
    id: 3,
    title: "Distraction Free Learning",
    desc: "Focused learning platform with YouTube distraction-blocking, built-in Pomodoro timer, and ambient white noise player.",
    url: "https://github.com/Soumadip-Eagle123/distraction-free-learning",
  },
  {
    id: 4,
    title: "Online Store",
    desc: "E-commerce platform for music CDs featuring cart operations, product filtering, and search functionality.",
    url: "https://github.com/Soumadip-Eagle123/Online-store",
  },
];

export default Projects;
