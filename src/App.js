import React from "react";
import './styles/style.css';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";
import {
  Routes,
  Route
} from "react-router-dom";
import About from './components/about.js';
import Team from './components/team';
import Care from './components/care';
import Blog from './components/blog';
import Contactus from './components/contactus';
import Home from './components/home';
import { Container, Navbar, Nav } from "react-bootstrap";

export default function App() {
  const { t } = useTranslation();

 
  return (
    <>
        <div className="upperheader">
          <div className="miniheadertxt">
            <img className="firstimg" src="./homepics/Icon.png" alt="" />
            {t("part1")}
          </div>
          <div className="socialicons">
            <img className="icon" src="./homepics/Instagram.png" alt="" />
            <img className="icon" src="./homepics/Twitter.png" alt="" />
            <img className="icon" src="./homepics/youtube.png" alt="" />
          </div>
        </div>

        <div>
          <Navbar collapseOnSelect expand="lg" >
              <Container className="navbarrr">
                <Navbar.Brand className="mainfrlink" href="/">{t("part2")}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto navbarrrr">
                    <Nav.Link className="navelem" href="/about">{t("part3")}</Nav.Link>
                    <Nav.Link className="navelem" href="/team">{t("part4")}</Nav.Link>
                    <Nav.Link className="navelem" href="/care">{t("part5")}</Nav.Link>
                    <Nav.Link className="navelem" href="/blog">{t("part6")}</Nav.Link>
                    <Nav.Link className="navelem" href="/contactus">{t("part7")}</Nav.Link>
                    <Nav.Link>  
                      <div className="language-select">
                        <LanguageSelect />
                      </div>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>



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
        </div>
        <div className="footer">
          <footer className="upperfooter">
            <div className="text-center pt-5">
              <div className="fontsizefooter font-weight-450">{t("part8")}</div>
              <div className="fontsizefooter1">{t("part9")}</div>
            </div>
            <span className="hrfooterr"></span>
            <div className="footeradd row">
              <div className="col-lg-3">
                <div className="text-justify mr-5">
                  <h4>{t("part10")}</h4>
                  {t("part11")}</div>
              </div>
              <div className="text-justify mr-5 col-lg-3">
                <h4>{t("part12")}</h4>
                {t("part13")}
              </div>
              <div className="text-justify mr-5 col-lg-3">
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


    </>
  );
}
