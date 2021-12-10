import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/about.js';
import Team from './components/team';
import Care from './components/care';
import Blog from './components/blog';
import Contactus from './components/contactus';
import Home from './components/home';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="upperheader">
        <div className="miniheadertxt"><img className="firstimg" src="./homepics/Icon.png" alt="" /> For any questions, give us a call on 021-5169 9696.</div>
        <div className="socialicons">
          <img className="icon" src="./homepics/Instagram.png" alt="" />
          <img className="icon" src="./homepics/Instagram.png" alt="" />
          <img className="icon" src="./homepics/Twitter.png" alt="" />
        </div>
      </div>

      <div >
        <nav className="navbar navbar-expand-lg navbar-light">             
          <Link className="navbar-brand" to="/">French Dentist</Link> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/care">Care</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact Us</Link>
              </li>
            </ul>
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
      </div>
      <div className="footer">
        <footer className="upperfooter">
          <div className="text-center pt-5">
            <b>FRENCH DENTIST</b> <br></br> We do it for you
          </div>
        <hr />
        <div className="footeradd">
            <div>
              <div className="text-justify mr-5">
                <h4>Shanghai Mart Clinic (PuXi)</h4>
              Shanghai Mart, 17th floor, room 1711-1712, 2299 Yan'an West Road, Changning District, 
              Shanghai 021-5169 9696, frenchdentist@frenchdentist.com</div>
            </div>
            <div className="text-justify mr-5">
            <h4>Office Hours</h4> 
              Monday - Friday: 9am to 7pm
              Saturday: 10am to 5pm
              Sunday: emmergencies only
            </div>
            <div className="text-justify mr-5">
            <h4>Jinmao Tower Clinic (PuDong)</h4> 
            J-Life Building, 3rd floor, No. 88 Century Avenue, Jinmao Tower, Pudong New District, Shanghai
            021-5169 9696, frenchdentist@frenchdentist.com
            </div>
        </div>
        </footer>
        <div className="lowerfooter">
          <div>
            <ul className="footernav">
              <li className="mr-3 mt-5">Our Team</li>
              <li className="mr-3 mt-5">Treatments</li>
              <li className="mr-3 mt-5">Blog</li>
              <li className="mr-3 mt-5">Contact Us</li>
              <li className="mr-3 mt-5">Teeth Whitening</li>
              <li className="mr-3 mt-5">Orthodontics</li>
              <li className="mr-3 mt-5">Veneers</li>
            </ul>
          </div>
          <hr />
          <div className="text-center pb-5">© 2021 French Dentist. All rights reserved.</div> </div>
      </div>


    </Router>
  );
}

export default App;
