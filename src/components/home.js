import React from 'react'
import '../styles/style.css'

function Home() {
    return (
        <div >
            <div>
                <div className="herosection"></div>
                <img className="heroimg" src="./homepics/hero.png" alt="" />
            </div>

            <div className="hometxt1">
                <div>Premium Dentists in <br></br> Central Shanghai</div>
                <div>At French Dentist, we strive to maintain</div>
            </div>
            
            <div className="section1">
                <div className="secttext">
                    <h1 className="ml-5">Who We Are</h1>
                    <hr />
                    <p className="text-justify">
                        French Dentist was established in 2007 and proved its constant commitment to 
                        provide high quality treatment to both the expatriate and Shanghainese community.
                         Our team of highly qualified dentists and specialists comes exclusively from France,
                         Germany and Korea, and they are selected for their commitment to excellent results 
                         and quality patient care.
                        <br></br>
                        <br />
                        <br />
                        We understand that first-rate state-of-the-art equipment, highly-educated and friendly 
                        staff, and a wide range of services are qualities that are on the top of your expectations. 
                    </p>
                    <button>Read More</button>
                </div>
                <div>
                    <img className="homeimg2" src="./homepics/section.png" alt="" />
                    <img className="homeimg3" src="./homepics/section1.png" alt="" />
                </div>
            </div>

            <div className="homeservices">
                <div className="text-center font-weight-bold">Our Services</div>
                <hr />
                <div className="servtab">
                    <div><img src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">VENEERS</div>
                        <div>Porcelain veneer is a thin shell of porcelain / ceramic that is bonded onto the 
                            front surface of a tooth so to improve its cosmetic appearance. </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">WHITENING</div>
                        <div>Our smile says a lot about us to other people. Dazzling white smile creates a 
                            pleasant impression and wins people’s favor.  </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">IMPLANTOLOGY</div>
                        <div>A dental implant is a metal post that replaces the root of a missing tooth. 
                            An artificial tooth (crown) is placed on an extension of the post (abutment) on.</div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">ORTHODONTICS</div>
                        <div>At French Dentist we pride ourselves on offering a full range of braces using 
                            the latest technology, as well as the more traditional fixed braces.  </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">INVISALIGN</div>
                        <div>Apart from the usual orthodontic procedures, which employ brackets (bands, arches) 
                            and which are intended for general corrective work.</div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">SPEECH THERAPY</div>
                        <div>From birth, children learn to communicate in a variety of ways including through 
                            eye gazes, gestures and vocalizations. Some kids have trouble.</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center font-weight-bold">What Our Patients Say</div>
                <hr />
                <div className="homescroll">
                    <div>
                        <img src="./homepics/Group 6.png" alt="" />
                    </div>
                    <div className="ml-5">
                        <div> <img className="mb-5" src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                        <div className="text-justify mb-5 text-black-50">
                        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet 
                        vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium. Amet in elementum nulla
                         scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. 
                         Varius volutpat hac adipiscing tincidunt pretium.
                        </div>
                        <div className="font-weight-bold">Elizabeth, Orthodontics patient</div>
                    </div>
                </div>
            </div>

            <div className="homebilling">
                <div className="text-center font-weight-bold">Direct Billing Facility</div>
                <hr />
                <div className="billingsect">
                    <div>
                        <img src="./homepics/banda.png" alt="" />
                        <div className="font-weight-bolder mt-3">Simplified Process</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div>
                    <div>
                        <img src="./homepics/carbon_security.png" alt="" />
                        <div className="font-weight-bolder mt-3">Safe and Secure</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div> 
                    <div>
                        <img src="./homepics/emoji.png" alt="" />
                        <div className="font-weight-bolder mt-3">Happy patients </div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
