import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import { cards } from "../../constants/constants"
import CountUp  from "react-countup"

const Accomplishments = () => (
    <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Boxes>
            {cards.map(({ number, text }, index) => (
                <Box key={index}>
                    <BoxNum>
                        <CountUp
                            start={0}
                            end={number}
                            duration={2.75}
                        />
                    </BoxNum>
                    <BoxText>{text}</BoxText>
                </Box>
            ))}
        </Boxes>
        <SectionDivider/>
    </Section>
);

export default Accomplishments;
