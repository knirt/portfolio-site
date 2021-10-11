import React from "react"
import Head from "../../components/Head"
import ProjectDiv from "../../components/ProjectDiv"
import archImg from "../../../static/arch-anime.png"
import javaImg from "../../../static/javascript.png"
import reduxImg from "../../../static/redux.png"
import libraryImg from "../../../static/library.png"
import recipeImg from "../../../static/recipeBook.png"
import portfolioImg from "../../../static/portfolio.png"

const projectInfo = {
    library: {
        name: "Book Collection",
        intro: "This is a web app I built to store and display my collection of literature and academic writing",
        description:
            "I used react, typescript, and redux to build the app. All the books are stored in a database on my VPS using mariaDB (libre version of MySQL), and I wrote the backend in PHP.",
        imgRef: libraryImg,
        codeLink: "https://github.com/knirt/library-website",
    },
    recipes: {
        name: "Forkify",
        intro: "My first ever web app, a recipe site. This was a guided project I did as part of a Udemy course on JS",
        description:
            "Created using nothing but vanilla JS. Its a basic recipe site which calls an API (not developed by me) with bookmarking, keyword search, and the ability to submit new recipies of your own via POST request.",
        imgRef: recipeImg,
        codeLink: "https://github.com/knirt/forkify-recipe-app",
    },
    starwars: {
        name: "Galactic Empire Intelligence",
        intro: "A mock intelligence repository for the Galactic Empire from Star Wars.",
        description: "",
        imgRef: recipeImg,
    },
    portfolio: {
        name: "Portfolio Site",
        intro: "This site: my portfolio site",
        description:
            "This site was made using gatsby.js, a static site generator that utilizes react to produce static html sites efficiently. It is able to harness the efficiency of react without the bloat. It was styled using SASS.",
        imgRef: portfolioImg,
        codeLink: "https://github.com/knirt/portfolio-site",
    },
}

const Projects = function () {
    return (
        <React.Fragment>
            <Head></Head>
            <div className="container img-container">
                <img src={archImg} alt="" className="proj-img-footer" />
                <img src={javaImg} alt="" className="proj-img-footer" />
                <img src={reduxImg} alt="" className="proj-img-footer" />
            </div>
            <div className="container projects-container">
                <ProjectDiv
                    imgRef={projectInfo.library.imgRef}
                    intro={projectInfo.library.intro}
                    description={projectInfo.library.description}
                    codeLink={projectInfo.library.codeLink}
                ></ProjectDiv>
                <ProjectDiv
                    imgRef={projectInfo.recipes.imgRef}
                    intro={projectInfo.recipes.intro}
                    description={projectInfo.recipes.description}
                    codeLink={projectInfo.recipes.codeLink}
                ></ProjectDiv>
                <ProjectDiv
                    imgRef={projectInfo.portfolio.imgRef}
                    intro={projectInfo.portfolio.intro}
                    description={projectInfo.portfolio.description}
                    codeLink={projectInfo.portfolio.codeLink}
                ></ProjectDiv>
            </div>
        </React.Fragment>
    )
}

export default Projects
