import React from 'react'
import '../styles/style.css'

function Care() {
    return (
        <div className="carepage">
            <div>
                <img className="carehero w-100" src="./homepics/carecover.png" alt="" />
            </div>
            
            <div className="caresect">
                <img className="m-5 sectimg" src="./homepics/careimg.png" alt="" />
                <h3>Emergency Care</h3>
                <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been </p>
            </div>

            <div>
                <h2 className="text-center font-weight-bold">
                    We are a full service dental office providing <br /> family, restorative, 
                    and cosmetic dentistry
                </h2>
                <div className="caresect2 m-5">
                    <img src="./homepics/careimg1.png" alt="" />
                    <h3>Cosmetic Dentistry</h3>
                    <hr />
                    <p>Dr. McCormick is a world-class cosmetic dentist. From whitening to veneers, tooth 
                        straightening & more, we offer a wide range of cosmetic dentistry services designed 
                        to help you achieve a smile you’re truly proud of.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Care