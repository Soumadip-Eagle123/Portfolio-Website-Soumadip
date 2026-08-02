import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Soumadip Sen</HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt>PERN Stack Developer & AI Engineer</HighlightAlt>{" "}
        currently studying at VIT Chennai.
      </p>
      <p>
        I build robust, scalable backends and integrate autonomous AI agents{" "}
        <br />
        to solve real-world system and logistics challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
