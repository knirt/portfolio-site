import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import tsIMG from "../../static/ts-react.png"
import meIMG from "../../static/me.jpg"

export default function Home() {
    return (
        <Layout>
            <Head></Head>
            <div className="container home-container">
                <div className="home-flex">
                    <div>
                        <h1 className="title-text">
                            Hi, my name is Matthew Trinkus
                        </h1>
                        <h1>
                            This is a site made to display my projects,
                            interests, etc., to anyone interested for personal
                            or professional reasons
                        </h1>
                    </div>
                    <img src={meIMG} alt="" className="title-image" />
                </div>
                <h1 id="stuff-i-can">Stuff I can do:</h1>
                <div className="home-sub-head">
                    <h2 className="title-text">
                        I can make and deploy web apps, so I am seeking
                        employment in web-development. To be clear, everything I
                        know about development is self taught, I have no formal
                        education or experience. Here is what I have learned
                        through Udemy and self study:
                    </h2>
                    <div id="list-flex">
                        <ul>
                            <li>
                                <b>JavaScript</b>
                            </li>
                            <li>
                                <b>HTML / CSS</b>
                            </li>
                            <li>
                                <b>React</b>
                            </li>
                            <li>
                                <b>TypeScript</b>
                            </li>
                            <li>
                                <b>Redux</b>
                            </li>
                            <li>
                                <b>SASS (CSS preprocessed syntax)</b>
                            </li>
                            <li>
                                <b>Familiar with NGINX and server Linux</b>
                            </li>
                        </ul>
                        <img id="home-image-ts" src={tsIMG} alt="" />
                    </div>
                    <h2 className="title-text">
                        For more info on this, my projects page has everything I
                        have made that I figured was worth showing off plus
                        descriptions and links to the sites / source code. I
                        deployed this site via NGINX on a Debian 10 VPS I own.
                    </h2>
                </div>
            </div>
        </Layout>
    )
}
