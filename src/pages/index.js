import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import tsIMG from "../../static/ts-react.png"

export default function Home() {
    return (
        <Layout>
            <Head></Head>
            <div className="container home-container">
                <div>
                    <h1 className="title-text">
                        Hi, my name is Matthew Trinkus
                    </h1>
                    <h1>
                        This is a site made to convince you to hire me (please
                        hire me)
                    </h1>
                </div>
                <div className="home-sub-head">
                    <h2 className="title-text">
                        I can make web apps and deploy them, so I would like to
                        make money doing that. Everything I know about
                        development is self taught, I have no formal education
                        or experience, but here is what I know:
                    </h2>
                    <div id="list-flex">
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML / CSS</li>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Redux</li>
                            <li>SASS (CSS preprocessed syntax)</li>
                            <li>Bash Scripting</li>
                            <li>Familiar with Docker and NGINX</li>
                        </ul>
                        <img id="home-image-ts" src={tsIMG} alt="" />
                    </div>
                    <h2 className="title-text">
                        For more info on this, my projects page has all the
                        stuff I made that I figured was worth showing off plus
                        descriptions of how I set the server up to host all the
                        projects
                    </h2>
                </div>
            </div>
        </Layout>
    )
}
