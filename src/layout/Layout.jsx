import { Container, ScrollToTop, Icon } from './LayoutStyles'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export const Layout = ({ children }) => {

    const [scroll, setScroll] = useState(0);
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300)
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            toggleVisible()
            scrollProgress()
        });
        return () => {
            window.removeEventListener("scroll", () => {
                toggleVisible()
                scrollProgress()
            });
        }
    }, [])

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
        setScroll(scrolled);
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const progressContainerStyle = {
        background: "#0F1624",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        height: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 99
    };

    const progressBarStyle = {
        height: "5px",
        background: "#fff",
        width: scroll
    };
    return (
        <Container>
            <div className="progress-container" style={progressContainerStyle}>
                <div className="progress-bar" style={progressBarStyle}/>
            </div>
            <Header/>
            <main>{children}</main>
            <Footer/>
            <ScrollToTop
                visible={visible}
                onClick={scrollTop}
            >
                <Icon>&uarr;</Icon>
            </ScrollToTop>
        </Container>
    )
}
