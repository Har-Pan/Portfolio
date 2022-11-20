import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br/>
        to my portfolio
      </SectionTitle>
      <SectionText>
        Intro text about yourself.
      </SectionText>
      <Button onClick = {() => window.location = "https://google.com"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;