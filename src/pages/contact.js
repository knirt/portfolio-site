import React from "react"
import Head from "../components/Head"
import arminImg from "../images/arminIMG.png"
const Contact = function () {
    return (
        <React.Fragment>
            <Head></Head>
            <div className="container contact-container">
                <img src={arminImg} alt="" className="proj-img-contact" />
                <div className="contact-box">
                    <h2>
                        If you need to contact me you can email me at the
                        address below.
                    </h2>
                    <p>
                        <b>trinkusm@aol.com</b>
                    </p>
                    <br />
                    <p>
                        For phone, just email and I would be happy to give you
                        my phone number! It's just easier for me if all initial
                        inquiries from this site come from one place. Plus I
                        feel weird putting my phone number on the internet.
                    </p>
                    <br />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact
