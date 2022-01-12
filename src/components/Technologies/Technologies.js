import React from 'react';
import { DiCss3, DiDocker, DiFirebase, DiGit, DiHtml5, DiJavascript, DiLinux, DiNodejs, DiNpm, DiPostgresql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development space. 
      From Back-end to Design 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js<br/>
            Html5<br/>
            Css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Express.js<br/>
            Node.js<br/>
            Postgresql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Figma 
          </ListParagraph>
        </ListContainer>
      </ListItem>
          
        
      
    </List>
  </Section>
);

export default Technologies;
