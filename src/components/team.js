import React from 'react'
import '../styles/style.css'

function Team() {
    return (
        <div>
            <div>
                <img className="teamcover" src="./homepics/teamhero.png" alt="" />
                <div className="teamhero">
                    <h1 className="mb-5">A team of <br /> international dentists</h1>
                    <p>Our team of highly qualified dentists and specialists comes exclusively from France, 
                        Germany and Korea, and they are selected for their commitment to excellent results 
                        and quality patient care.</p>
                </div>
            </div>

            <div className="teamsect text-justify">
                <img className="mr-5" src="./homepics/teamimg.png" alt="" />
                <div className="mt-5">
                    <h3>Dr. Louis Costa</h3>
                    <h5>Dental surgeon, Implantologist, Cosmetic dentistry</h5> <br />
                    <p>Dr. Costa earned his dental Surgery degree from Marseille University, France, where he 
                        also later served as a Clinical instructor. Following his time at Marseille, he finished 
                        a partnership research program in Rome, Italy. <br /><br />

                    Working in the best dental clinics he first moved to Monaco, then to Geneva and finally to 
                    Moscow where he stayed 5 years, specializing in aesthetic and full-mouth rehabilitation. <br /><br />
 
                    Dr. Costa also obtained 3 certificates in various specializations, including aesthetic 
                    dentistry, and a master degree in medical and biological sciences. <br /> <br />
 
                    During his 20 years of clinical experience, he always looked for excellence in his specialty. 
                    He is proud to be a cofounder of a charity association named A.D.H.E.P curing Vietnamese orphans.
                     He is fluent in French, English, Italian and conversant in Russian.</p>
                </div>
            </div>

            <div></div>
        </div>
    )
}

export default Team