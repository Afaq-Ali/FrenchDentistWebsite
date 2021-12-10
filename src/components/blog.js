import React from 'react'
import '../styles/style.css'

function Blog() {
    return (
        <div className="ml-5 mr-5 blogpage">
            <div>
                <img className="  w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>Teeth Whitening</h2>
                    <div>Your smile is the first thing people notice about you. Professionally whitening your
                        teeth can help ensure your smile is making the best impression possible. Dr. McCormick
                        offers a wide variety of professionally- supervised teeth whitening treatment options
                        to meet all your needs.</div>
                    <button className="mt-5">Call Us</button>
                </div>
            </div>

            <div>
                <h2 className="mt-5">Professional Teeth Whitening in Central Shanghai</h2>
                <div className="blogsect">
                    <img src="./homepics/blogimg.png" alt="" />
                    <div className="p-2">
                        <div>
                            <h2>Get Peace of Mind with Professional Whitening</h2>
                            <p>Do-it-yourself tooth whitening products are everywhere but in some cases they can
                                strip tooth enamel or cause uneven results. Professional whitening treatment is the
                                safest option for you and your smile.</p>
                        </div>
                        <div>
                            <h2>See Immediate Results with In-Office Whitening</h2>
                            <p>We offer in-office whitening for patients who want to have an immediately whiter smile. </p>
                        </div>
                        <div>
                            <h2>Whiten Gently with At-Home Kits</h2>
                            <p>If your teeth are sensitive, we offer a supervised at-home whitening product to whiten your
                                smile gently over time, avoiding some of the tooth sensitivity often associated with
                                whitening..</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mt-5">Other Treatments: </h2>
                <div>
                    <button>Invisalign</button>
                    <button>Orthodontics</button>
                    <button>Veneers</button>
                    <button>Implantology</button>
                </div>
            </div>

            <div className="blogsect2">
                <div>
                    <img src="./homepics/Group 6.png" alt="" />
                </div>
                <div className="ml-5">
                    <div> <img src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                    <div className="text-black-50">
                        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet
                        vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium. Amet in elementum nulla
                        scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec.
                        Varius volutpat hac adipiscing tincidunt pretium.
                    </div>
                    <div className="font-weight-bold mt-5">Elizabeth, Orthodontics patient</div>
                </div>
            </div>

        </div>
    )
}

export default Blog