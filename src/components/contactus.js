import React from 'react'

function Contactus() {
    return (
        <div>
            <div>
                <img className="w-100 contacthero" src="./homepics/contact.png" alt="" />
            </div>

            <div className="careupper">
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contactimg.png" alt="" />
                    <h6 className="cardheading">Working Hours</h6>
                    <p>Mon-Sat 09:00-20:00
                    Sunday Emergency only</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contact3.png" alt="" />
                    <h6 className="cardheading">Email</h6>
                    <p>info@frenchdentist.cn</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contact1.png" alt="" />
                    <h6 className="cardheading">Emergency Care</h6>
                    <p>021 5169 9696</p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/contactimg.png" alt="" />
                    <h6 className="cardheading">WeChat</h6>
                    <img src="./homepics/QR.png" alt="" />
                </div>
            </div>

            <h2 className="caretext text-center font-weight-bold mt-5 ">
                Things to make your visit a better experience
            </h2>

            <div className="contactdetails">
                <div className="contactsect mt-5">
                    <img className="mr-5" src="./homepics/appointment.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">BOOKING YOUR APPOINTMENT</h5>
                        <h6 className="pcon">The easiest way to book your appointment is by giving us a call at 021 - 5169 - 9696. We speak Chinese, French, English and German.</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5" src="./homepics/payment-mehotd.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">PAYMENT OPTIONS</h5>
                        <h6 className="pcon">We accept Visa, MasterCard and American Express and work with many major PPO dental insurance plans as a form of payment.</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5" src="./homepics/affection 1.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">WHAT TO EXPECT DURING YOUR VISIT</h5>
                        <h6 className="pcon">We are a team of passionate dentists and every patient is important for us, hence we we will ensure you will have a good experience with us.</h6>
                    </div>
                </div>
                <div className="contactsect  mt-5">
                    <img className="mr-5" src="./homepics/affection 1.png" alt="" />
                    <div className="mt-3">
                        <h5 className="mb-3">WHAT TO EXPECT DURING YOUR VISIT</h5>
                        <h6 className="pcon">We are a team of passionate dentists and every patient is important for us, hence we we will ensure you will have a good experience with us.</h6>
                    </div>
                </div>
            </div>

            <div>
                <div className="caretext text-center font-weight-bolder mt-5 ">Direct Billing Facility</div>
                <hr className="hroverall" />
                <div className="text-center contactpros">
                    <div>
                        <img src="./homepics/banda.png" alt="" />
                        <div className="font-weight-bolder mb-3 ">Simplified Process</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div>
                    <div>
                        <img src="./homepics/carbon_security.png" alt="" />
                        <div className="font-weight-bolder mb-3 ">Safe and Secure</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div> 
                    <div>
                        <img src="./homepics/emoji.png" alt="" />
                        <div className="font-weight-bolder mb-3 ">Happy patients </div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div>
                </div>
            </div>

            <div className="map">
            <div>
            <div className="caretext text-center font-weight-bolder mt-5 ">Our Locations</div>
            <hr className="hroverall" />
            <div className="contactlst">
                <div className="contactlast">
                    <img className="mr-4" src="./homepics/jimao.png" alt="" />
                    <div>
                        <h5 className="mt-3">Shanghai Mart Clinic (PuXi)</h5>
                        <div className="mt-2">Shanghai Mart, 17th floor, room 1711-1712, 2299 Yan'an West Road, 
                            Changning District, Shanghai
                            Tel: 021-5169 9696, frenchdentist@frenchdentist.com
                        </div>
                    </div>
                </div>
                <div className="contactlast mt-5">
                    <img className="mr-4" src="./homepics/shanghaimart.png" alt="" />
                    <div>
                        <h5 className="mt-3">Shanghai Mart Clinic (PuXi)</h5>
                        <div className="mt-2">Shanghai Mart, 17th floor, room 1711-1712, 2299 Yan'an West Road, 
                            Changning District, Shanghai
                            Tel: 021-5169 9696, frenchdentist@frenchdentist.com
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <img className="conmap" src="./homepics/map.png" alt="" />
            </div>
            </div>
        </div>
    )
}

export default Contactus