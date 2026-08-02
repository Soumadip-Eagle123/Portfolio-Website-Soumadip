import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <EduIntro>Here's my skill set!</EduIntro>
      {skillGroups.map(({ title, items }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{items}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const skillGroups = [
  { title: "Programming Languages", items: "C++, Java, JavaScript, Python, C" },
  {
    title: "Frameworks & Libraries",
    items:
      "React, Next.js, Node.js, Express, FastAPI, Tailwind CSS, Docker, Langchain, HuggingFace",
  },
  { title: "Databases", items: "PostgreSQL, MySQL, Supabase, SQLite" },
  { title: "Tools & Platforms", items: "GitHub, Git, Docker, Postman, Linux" },
  {
    title: "Soft Skills",
    items:
      "Communication, Leadership, Teamwork, Problem Solving, Critical Thinking",
  },
];

export default Skills;
