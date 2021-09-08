import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = ({ handleClick }) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br/>
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    The purpose of Web development is to help aspiring and established developers to take their
                    development skills to the next level and build awesome apps.
                </SectionText>
                <Button onClick={handleClick}>Learn More</Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
