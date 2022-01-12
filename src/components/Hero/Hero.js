import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi My Name Is Gugu Mavimbela<br/>
        Welcome To My Portfolio

      </SectionTitle>
      <SectionText>
        I am a junior web developer who is interested in sharpening and growing my skillset while working on real world projects. Looking for a junior web development position or internship
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1L5YIiQ3ZPqaAWxlZ2tyT0mZF-m_IQjYY/view?usp=sharing'}>resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;