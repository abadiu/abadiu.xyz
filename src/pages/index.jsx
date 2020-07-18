import React from 'react';
import Helmet from 'react-helmet';

import SEO from '../components/SEO.jsx';
import config from '../data/config';

import Layout from '../layout/index.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Button from '../components/Button.jsx';

// import avatar from '../images/avatar.jpg';
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
            <div>
              <h1>
                Hello, <br /> my name is Adrian.
              </h1>
              <h2>
                I'm a javascript developer, based in Southampton, UK, looking for new projects to work on.
              </h2>
              <div>
                <Button
                  link="mailto:adrian@abadu.xyz"
                  label="Get in touch"
                  bg="#1F9D55"
                />
              </div>
            </div>
            <div>
              <h3>About</h3>
              <div>
                {/* <img src={avatar} alt="Adrian Badiu" /> */}
                <h5>
                  I am passionate about building products that provide a great
                  user experience, my focus is primarily frontend development,
                  but I know my way around a server.
                </h5>
              </div>
              <p>
                My journey into web development began as a hobby and quickly
                developed into a passion for software and the web. After more
                than 4 years working as a freelance developer in my spare time,
                I'm excited to take the next the next step and work on projects
                fulltime. Most of my current work revolves around React.js and
                the wider JavaScript ecosystem, to build offline-ready,
                optimised progressive web apps.
              </p>
            </div>
            <div>
              <h3>Projects</h3>
              <div>
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
              </div>
            </div>
            <div>
              <div>
                <h3>Get in touch</h3>
                <p>
                  Say <a href="mailto:adrian@abadiu.xyz">Hi</a> or find me on
                  other platforms:{' '}
                  <a href="https://github.com/abadiu">Github</a> &{' '}
                  <a href="https://twitter.com/AdrianBadiu/">Twitter</a>
                </p>
              </div>
            </div>
            <footer>
                &copy; 2020 Source code on{' '}
                <a href="https://github.com/abadiu/abadiu">Github</a>. Made by{' '}
                <a href="https://abadiu.xyz">Adrian Badiu</a>.
            </footer>
        </div>
      </Layout>
    );
  }
}

export default Index;
