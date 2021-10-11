import React from "react"
const ProjectDiv = function (props) {
    return (
        <div className="project-box">
            <p>
                <b>{props.intro}</b>
            </p>
            <img src={props.imgRef} alt="" className="project-image" />
            <p className="project-list">{props.description}</p>
            <div className="project-nav-btn-box">
                <a
                    href={props.codeLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <button id="proj-btn-1" className="project-nav-button">
                        See source code
                    </button>
                </a>
                <a
                    href={props.siteLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <button id="proj-btn-2" className="project-nav-button">
                        See site
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProjectDiv
