import { Container, Div1, Div2, Div3, LogoLink, NavLink } from './HeaderStyles';
import { links } from "../../constants/constants";
import { DiCssdeck } from 'react-icons/di';
import Socials from "../Socials/Socials";
import Link from 'next/link';
import React from 'react';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <LogoLink>
                    <DiCssdeck size="3rem"/> <span>Portfolio</span>
                </LogoLink>
            </Link>
        </Div1>
        <Div2>
            {links.map(({ href, text }) => (
                <li key={text}>
                    <Link href={href}>
                        <NavLink>{text}</NavLink>
                    </Link>
                </li>
            ))}
        </Div2>
        <Div3>
            <Socials/>
        </Div3>
    </Container>
);

export default Header;
