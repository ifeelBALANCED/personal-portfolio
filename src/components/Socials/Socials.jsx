import React, { Fragment } from 'react';
import { SocialIcons } from "../Header/HeaderStyles";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Socials = () => {
    return (
        <Fragment>
            <SocialIcons href="https://github.com/mmnkuh">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/vlad-herasymenko-1414b71a9">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://instagram.com/heras_vlad">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </Fragment>
    );
};

export default Socials;
