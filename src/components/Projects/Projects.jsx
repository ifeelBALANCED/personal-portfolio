import React from 'react';
import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider/>
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(({ title, image, tags, visit, source, description }, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={image}/>
                        <TitleContent>
                            <HeaderThree title={title}>{title}</HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo className="card-info">{description}</CardInfo>
                        <div>
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                                {tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={visit}>View</ExternalLinks>
                            <ExternalLinks href={source}>Source</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;
