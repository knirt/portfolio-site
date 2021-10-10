import React from "react"
import Head from "../components/Head"

function NotFound() {
    return (
        <React.Fragment>
            <Head></Head>
            <div className="container">
                <h1 className="four-o-four">404: NOT FOUND</h1>
                <h2 className="four-o-four">
                    Opps, looks like you tried to navigate to a non-existent
                    page, use the navbar above to navigate to whatever page you
                    want to check out.
                </h2>
            </div>
        </React.Fragment>
    )
}

export default NotFound
