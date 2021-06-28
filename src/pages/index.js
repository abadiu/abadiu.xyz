import React from 'react'
import Helmet from 'react-helmet'

import Seo from '../components/Seo'
import config from '../data/config'

import Layout from '../layout'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'

// import avatar from '../images/avatar.jpg';
class Index extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <Helmet title={config.siteTitle} />
                    <Seo />
                    <header className="p-20">
                        <div className="font-serif">
                            <h1 className="text-6xl">
                                Hello, <br /> I'm Adrian
                            </h1>
                            <h2 className="text-3xl">
                                A Web Developer, based in Southampton, looking
                                for new projects to work on.
                                <br /> Let's work together!
                            </h2>
                            <Button
                                className="aws-btn"
                                label="Get in touch"
                                link="mailto:adrian@abadiu.xyz"
                            />
                        </div>
                    </header>
                    <div className="p-20">
                        <h3 className="text-2xl">About me</h3>
                        <div className="Wrapper">
                            {/* <img src={avatar} alt="Adrian Badiu" /> */}
                            <h5>
                                Passionate about building products that provide
                                a great user experience, my focus is primarily
                                building fast, reliable frontends, but I know my
                                way around a server/backend.
                            </h5>
                            <p>
                                My journey into web development began as a hobby
                                and quickly developed into a long-standing
                                passion for software and the web.
                                <br />
                                After more than 4 years working as a freelance
                                developer in my spare time, I'm excited to take
                                the next the next step and work on projects
                                fulltime.
                                <br />
                                Most of my current work revolves around React.js
                                and the wider JavaScript ecosystem, to build
                                offline-ready, optimised progressive web apps.
                            </p>
                        </div>
                    </div>
                    <div className="p-20">
                        <h3 className="text-2xl">Projects</h3>
                        <div className="flex-nowrap">
                            <ProjectCard
                                title="Ottimo"
                                link="https:/ottimo.site"
                                bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                            >
                                Website development and design for ottimo, a web
                                performance optimisation service, for busy
                                website owners.
                            </ProjectCard>
                            <ProjectCard
                                title="Phoenix"
                                link="https://phoenixtotherescue.co.uk"
                                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                            >
                                An on demand WordPress support service, using
                                chatbots and a trusty human to help you in your
                                hour need.
                            </ProjectCard>
                            <ProjectCard
                                title="Gopika"
                                link="https://gopika.co.uk"
                                bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                            >
                                An ecommerce app made for the modern web. Self
                                care monthly bundles delivered to your door.
                            </ProjectCard>
                            <ProjectCard
                                title="Loopside"
                                link="https://loopside.uk"
                                bg="linear-gradient(to right, #1C3D5A 0%, #382B5F 100%)"
                            >
                                Developer resources like themes and general UI
                                stuff to use with react.
                            </ProjectCard>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className="Wrapper">
                            <h3 className="text-2xl">Get in touch</h3>
                            <p>
                                Say <a href="mailto:adrian@abadiu.xyz">Hi</a> or
                                find me on other platforms:{' '}
                                <a href="https://github.com/abadiu">Github</a> &{' '}
                                <a href="https://twitter.com/AdrianBadiu/">
                                    Twitter
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Index
