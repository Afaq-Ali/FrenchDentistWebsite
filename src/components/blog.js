import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Blog() {
    const { t } = useTranslation();
    return (
        <div className="ml-5 mr-5 blogpage">
            <div>
                <img className="  w-100" src="./homepics/blog.png" alt="" />
                <div className="herotext">
                    <h2>{t("part94")}</h2>
                    <div>{t("part95")}</div>
                        <div className="webbtn mt-5">{t("part93")}</div>
                </div>
            </div>

            <div>
                <h2 className="mt-5 mb-5 cardheading">{t("part96")}</h2>
                <div className="blogsect">
                    <img src="./homepics/blogimg.png" alt="" />
                    <div className="p-2 ml-4">
                        <div className="mt-5">
                            <h5>{t("part97")}</h5>
                            <p>{t("part98")}</p>
                        </div>
                        <div className="mt-5">
                            <h5>{t("part99")}</h5>
                            <p>{t("part100")}</p>
                        </div>
                        <div className="mt-5">
                            <h5>{t("part101")}</h5>
                            <p>{t("part102")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mt-5">{t("part103")} </h2>
                <div className="blogbtn">
                    <a  className="blogbtnsty mr-5"  href="#">{t("part104")}</a>
                    <a  className="blogbtnsty mr-5"  href="#">{t("part105")}</a>
                    <a  className="blogbtnsty mr-5"  href="#">{t("part106")}</a>
                    <a  className="blogbtnsty mr-5"  href="#">{t("part107")}</a>
                </div>
            </div>

            <div className="blogsect2">
                <div>
                    <img className="homeresimg" src="./homepics/Group 6.png" alt="" />
                </div>
                <div className="ml-5">
                    <div> <img src="./homepics/fa-solid_quote-left.png" alt="" /></div>
                    <div className="text-black-50">
                        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet
                        vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium. Amet in elementum nulla
                        scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec.
                        Varius volutpat hac adipiscing tincidunt pretium.
                    </div>
                    <div className="font-weight-bold mt-5">{t("part108")}</div>
                </div>
            </div>

        </div>
    )
}

export default Blog