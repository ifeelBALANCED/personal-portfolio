import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import TimeLine from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Accomplishments from "../components/Accomplishments/Acomplishments";

const Home = () => {
    return (
        <Layout>
            <Section grid>
                <Hero/>
                <BgAnimation/>
            </Section>
            <Projects/>
            <Technologies/>
            <TimeLine/>
            <Accomplishments/>
        </Layout>
    );
};

export default Home;
