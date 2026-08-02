import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
   ____                                   ___        
  / __/___  __ _____  ___ ___ _____  ___ / _ \\___ ___
 _\\ \\/ _ \\/ // / _ \\/ _ \`/ _ \`/ _ \\/ -_) // / -_) _ \\
/___/\\___/\\_,_/_//_/\\_,_/\\_,_/ .__/\\__/____/\\__/_//_/
                            /_/                      
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  ___                  
 / __| ___ _  _ _ __  
 \\__ \\/ _ \\ || | '  \\ 
 |___/\\___/\\_,_|_|_|_|
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to Soumadip Sen's terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          Full Source Code available on{" "}
          <Link href="https://github.com/Soumadip-Eagle123">GitHub</Link>.
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
