import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { technologies } from "../../constants/constants";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range a technologies in the web development world.
            From Back-end To Design
        </SectionText>
        <List>
            {technologies.map(({ icon, text, listText }) => (
                <ListItem key={text}>
                    <picture>
                        {icon}
                    </picture>
                    <ListContainer>
                        <ListTitle>{listText}</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            {text}
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
        </List>
        <SectionDivider colorAlt/>
    </Section>
);

export default Technologies;
