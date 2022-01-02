import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
        <div >
            <div>
                <div className="herosection"></div>
                <img className="heroimg" src="./homepics/hero.png" alt="" />
            </div>

            <div className="hometxt1">
                <div className="caretext maintxthome text-center font-weight-bold mt-5">{t("part24")}<br></br> {t("part25")}</div>
                <h4 className="subhead mt-5">{t("part26")}</h4>
            </div>
            
            <div className="section1">
                <div className="secttext">
                    <div className="caretext paddinghome text-center font-weight-bolder ml-5">{t("part27")}</div>
                <hr className="hroverall" />
                    <p className="text-justify">
                        {t("part28")}
                        <br></br>
                        <br />
                        <br />
                        {t("part29")} 
                    </p>
                    <div className="webbtn ">{t("part30")} </div>
                </div>
                <div>
                    <img className="homeimg2" src="./homepics/section.png" alt="" />
                    <img className="homeimg3" src="./homepics/section1.png" alt="" />
                </div>
            </div>

            <div className="homeservices">
            <div className="caretext paddingtophome text-center font-weight-bolder mt-5 ">{t("part31")}</div>
                <hr className="hroverall" />
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="hometxtsect ml-5">
                        <div className="font-weight-bolder mb-3">{t("part32")}</div>
                        <div>{t("part33")} </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part34")}</div>
                        <div>{t("part35")}  </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part36")}</div>
                        <div>{t("part37")}</div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part38")}</div>
                        <div>{t("part39")}  </div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part40")}</div>
                        <div>{t("part41")}</div>
                    </div>
                </div>
                <div className="servtab">
                    <div><img className="homefullwid" src="./homepics/noun_dental care_3740157 2.png" alt="" /></div>
                    <div className="ml-5">
                        <div className="font-weight-bolder mb-3">{t("part42")}</div>
                        <div>{t("part43")}</div>
                    </div>
                </div>
            </div>

            <div>
            <div className="caretext text-center font-weight-bolder mt-5 ">{t("part44")}</div>
                <hr className="hroverall" />
                <div className="homescroll">
                    <div>
                        <img className="homeresimg" src="./homepics/Group 6.png" alt="" />
                    </div>
                    <div className="ml-5">
                        <div> <img className="mb-5" src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                        <div className="text-justify mb-5 text-black-50">
                        {t("part45")}
                        </div>
                        <div className="font-weight-bold">{t("part46")}</div>
                    </div>
                </div>
            </div>

            <div className="homebilling">
            <div className="caretext text-center font-weight-bolder mt-5 ">{t("part47")}</div>
                <hr className="hroverall mt-5" />
                <div className="billingsect mt-5">
                    <div>
                        <img src="./homepics/banda.png" alt="" />
                        <div className="font-weight-bolder mt-3">{t("part48")}</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div>
                    <div>
                        <img src="./homepics/carbon_security.png" alt="" />
                        <div className="font-weight-bolder mt-3">{t("part49")}</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div> 
                    <div>
                        <img src="./homepics/emoji.png" alt="" />
                        <div className="font-weight-bolder mt-3">{t("part50")}</div>
                        <div>Lorem ipsum dolor sit amet, <br />
                            consecteteu.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
