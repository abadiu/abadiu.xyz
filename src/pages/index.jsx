/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

// Components
import Layout from '../layout';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Wrapper = styled.div`
  ${tw`flex flex-col items-center`};
`;

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Parallax pages={4}>
            <Hero offset={0}>
              <BigTitle>
                Hello, <br /> my name is Adrian.
              </BigTitle>
              <Subtitle>
                I'm a javascript developer, based in Southampton, UK, looking for new projects to work on.
              </Subtitle>
              <Wrapper>
                <Button
                  link="mailto:adrian@abadu.xyz"
                  label="Get in touch"
                  bg="#1F9D55"
                />
              </Wrapper>
            </Hero>
            <About offset={1}>
              <Title>About</Title>
              <AboutHero>
                <Avatar src={avatar} alt="Adrian Badiu" />
                <AboutSub>
                  I am passionate about building products that provide a great
                  user experience, my focus is primarily frontend development,
                  but I know my way around a server.
                </AboutSub>
              </AboutHero>
              <AboutDesc>
                My journey into web development began as a hobby and quickly
                developed into a passion for software and the web. After more
                than 4 years working as a freelance developer in my spare time,
                I'm excited to take the next the next step and work on projects
                fulltime. Most of my current work revolves around React.js and
                the wider JavaScript ecosystem, to build offline-ready,
                optimised progressive web apps.
              </AboutDesc>
            </About>
            <Projects offset={2}>
              <Title>Projects</Title>
              <ProjectsWrapper>
                <ProjectCard
                  title="ottimo"
                  link="https:/ottimo.site"
                  bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                >
                  Website development and design for ottimo, a web performance
                  optimisation service, for busy website owners.
                </ProjectCard>
                <ProjectCard
                  title="Phoenix"
                  link="https://phoenixtotherescue.co.uk"
                  bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                >
                  An on demand WordPress support service, using chatbots and a
                  trusty human to help you in your hour need.
                </ProjectCard>
                <ProjectCard
                  title="Gopika"
                  link="https://gopika.co.uk"
                  bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                >
                  An ecommerce app made for the modern web. Self care monthly
                  bundles delivered to your door.
                </ProjectCard>
                <ProjectCard
                  title="Loopside"
                  link="https://loopside.uk"
                  bg="linear-gradient(to right, #1C3D5A 0%, #382B5F 100%)"
                >
                  Developer resources like themes and general UI stuff to use
                  with react.
                </ProjectCard>
              </ProjectsWrapper>
            </Projects>
            <Contact offset={3}>
              <Inner>
                <Title>Get in touch</Title>
                <ContactText>
                  Say <a href="mailto:adrian@abadiu.xyz">Hi</a> or find me on
                  other platforms:{' '}
                  <a href="https://github.com/abadiu">Github</a> &{' '}
                  <a href="https://twitter.com/AdrianBadiu/">Twitter</a>
                </ContactText>
              </Inner>
              <Footer>
                &copy; 2020 Source code on{' '}
                <a href="https://github.com/abadiu/abadiu">Github</a>. Made by{' '}
                <a href="https://abadiu.xyz">Adrian Badiu</a>.
              </Footer>
            </Contact>
          </Parallax>
        </div>
      </Layout>
    );
  }
}

export default Index;
