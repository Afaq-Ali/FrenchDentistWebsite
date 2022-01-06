import React, { useState } from "react";
import './styles/style.css';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import About from './components/about.js';
import Team from './components/team';
import Care from './components/care';
import Blog from './components/blog';
import Contactus from './components/contactus';
import Home from './components/home';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function App() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const { t } = useTranslation();
    return (
        <>

            <Router>
                <nav className="main-nav">

                    <div className="upperheader">
                        <div className="miniheadertxt">
                            <img className="firstimg" src="./homepics/Icon.png" alt="" />
                            {t("part1")}
                        </div>
                        <div className="socialicons">
                            <img className="icon" src="./homepics/Instagram.png" alt="" />
                            <img className="icon" src="./homepics/Instagram.png" alt="" />
                            <img className="icon" src="./homepics/Twitter.png" alt="" />
                        </div>
                    </div>
                    <div className="logo">
                        <Link className="navbar-brand" to="/">{t("part2")}</Link>
                    </div>

                    {/* 2nd menu part  */}
                    <div
                        className={
                            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                        }>
                        <ul>
                            <li>
                                <Link className="nav-link" to="/about">{t("part3")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/team">{t("part4")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/care">{t("part5")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/blog">{t("part6")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/contactus">{t("part7")}</Link>
                            </li>
                            <li>
                                <div className="language-select">
                                    <LanguageSelect />
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd social media links */}
                    <div className="social-media">


                        {/* hamburget menu start  */}
                        <div className="hamburger-menu">
                            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                <GiHamburgerMenu />
                            </a>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route exact path="/" element={<Home />}>
                    </Route>
                    <Route exact path="/about" element={<About />}>
                    </Route>
                    <Route exact path="/team" element={<Team />}>
                    </Route>
                    <Route exact path="/care" element={<Care />}>
                    </Route>
                    <Route exact path="/blog" element={<Blog />}>
                    </Route>
                    <Route exact path="/contactus" element={<Contactus />}>
                    </Route>
                </Routes>
                <div className="footer">
                    <footer className="upperfooter">
                        <div className="text-center pt-5">
                            <div className="fontsizefooter font-weight-450">{t("part8")}</div>
                            <div className="fontsizefooter1">{t("part9")}</div>
                        </div>
                        <hr className="hrfooter" />
                        <div className="footeradd">
                            <div>
                                <div className="text-justify mr-5">
                                    <h4>{t("part10")}</h4>
                                    {t("part11")}</div>
                            </div>
                            <div className="text-justify mr-5">
                                <h4>{t("part12")}</h4>
                                {t("part13")}
                            </div>
                            <div className="text-justify mr-5">
                                <h4>{t("part14")}</h4>
                                {t("part15")}
                            </div>
                        </div>
                    </footer>
                    <div className="lowerfooter">
                        <div>
                            <ul className="footernav">
                                <li className="mr-3 mt-5">{t("part16")}</li>
                                <li className="mr-3 mt-5">{t("part17")}</li>
                                <li className="mr-3 mt-5">{t("part18")}</li>
                                <li className="mr-3 mt-5">{t("part19")}</li>
                                <li className="mr-3 mt-5">{t("part20")}</li>
                                <li className="mr-3 mt-5">{t("part21")}</li>
                                <li className="mr-3 mt-5">{t("part22")}</li>
                            </ul>
                        </div>
                        <hr className="hrfooter1" />
                        <div className="text-center pb-5">{t("part23")}</div> </div>
                </div>


            </Router>
        </>
    );
}