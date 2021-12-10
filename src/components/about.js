import React from 'react'
import '../styles/style.css'

function About() {
    return (
        <div>
            <div>
                <img className="abouthero" src="./homepics/abouthero.png" alt="" />
            </div>

            <div>
                <h1 className="font-weight-bold mt-5 ml-4">About us</h1>
                <div className="aboutsect text-justify font-weight-bolder">
                    <div className="mr-5">French Dentist was established in 2007 and proved its constant commitment to provide
                        high quality treatment to both the expatriate and Shanghainese community. Our team of
                        highly qualified dentists and specialists comes exclusively from France, Germany
                        and Korea, and they are selected for their commitment to excellent results and quality
                        patient care.
                    </div>
                    <div>We understand that first-rate state-of-the-art equipment, highly-educated and friendly staff,
                        and a wide range of services are qualities that are on the top of your expectations.
                        We understand that first-rate state-of-the-art equipment, highly-educated and friendly staff,
                        and a wide range of services are qualities that are on the top of your expectations.
                    </div>
                </div>
            </div>

            <div className="aboutsect1">
                <div>“I believe in a quality driven approach - from our warm and friendly staff to Shanghai's
                    finest ceramists. Quality creates long lasting relationships- and thats what's important to
                    me.”
                </div>
                <hr />
                <div>
                    Dr. Louis Costa
                </div>
            </div>

            <div>
                <img src="./homepics/aboutimg.png" alt="" />
            </div>

            <div className="aboutsect1">
                <div>
                    “I have received amazing service and treatment. I would certainly recommend with great confidence”
                </div>
                <hr />
                <div>Katie, patient</div>
            </div>

            <div className="aboutsect2">
                <img src="./homepics/aboutimg1.png" alt="" />
                <img className="ml-2" src="./homepics/aboutimg2.png" alt="" />
            </div>

            <div className="mb-5">
                <div className="text-center font-weight-bold mt-5">Our Locations</div>
                <hr />
                <div className="sect4">
                    <div className="aboutsect3 mr-5">
                        <img className="mr-4" src="./homepics/jimao.png" alt="" />
                        <div>
                            <h3>Shanghai Mart Clinic (PuXi)</h3>
                            <p>Shanghai Mart, 17th floor, room 1711-1712, 2299 Yan'an West Road,
                                Changning District, Shanghai
                                Tel: 021-5169 9696, frenchdentist@frenchdentist.com</p>
                        </div>
                    </div>
                    <div className="aboutsect3">
                        <img className="mr-4" src="./homepics/shanghaimart.png" alt="" />
                        <div>
                            <h3>Shanghai Mart Clinic (PuXi)</h3>
                            <p>Shanghai Mart, 17th floor, room 1711-1712, 2299 Yan'an West Road,
                                Changning District, Shanghai
                                Tel: 021-5169 9696, frenchdentist@frenchdentist.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
