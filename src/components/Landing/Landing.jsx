import React from "react";
import RedirectButton from "../RedirectButton/RedirectButton";
import Logo from "../../assets/CoachesCLASS.jpeg";
import "./landing.scss";
import { Grid } from "@material-ui/core";

function Landing(props) {
  return (
    <div id="container">
      <div className="first-page">
      <br></br> <br></br>
      <header id="site-header" >
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet"></link>
        <div className="site-title">
          <img id="dtImage" className="logo" src={Logo} alt="Coaches Class" />
        </div>
      </header>
      <div className="landing-slide-one">
        <div className="content-container">
          <div>
            <div>
              <h1>Coaches C.L.A.S.S.</h1>
              <h3>Learn real skills from real experts.</h3>
              <h3>\/</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="landing-slide-two">
        <br></br> <br></br>
        <div className="skills">
          <h1 className="ml-1">Hone your skills in...</h1> <br></br>
          <h2>Leadership</h2> <br></br>
          <h3>Communication</h3> <br></br>
          <h4>Entrepeneurship</h4> <br></br>
          <h5>Public Speaking</h5><br></br>
          <h6>And many more!</h6> <br></br> <br></br> <br></br>
        </div>
        <div className="vl"></div>
        <div className="quotes">
          <br></br> <br></br> <br></br>
          <p>"I love this website. It's helped me so much."</p> <br></br>
          <p>"I learned real skills in no time!"</p>
        </div>
      </div>
      <div className="landing-slide-three">
        <h1>Start Learning Now</h1>
        <div className="form-group has-feedback has-feedback-left">
          <RedirectButton path="/courses" className="buttonSpacing">
            Available Courses
          </RedirectButton>
          <hr />
          <RedirectButton path="/login" className="buttonSpacing">
            Login
          </RedirectButton>
        </div>
        <h1>Government Access</h1>
        <div className="form-group has-feedback has-feedback-left">
          <RedirectButton path="" className="buttonSpacing">
            View Special Pricing Options
          </RedirectButton>
        </div>
        <h1>Learn More About Us!</h1>
        <div className="form-group has-feedback has-feedback-left">
          <RedirectButton path="" className="buttonSpacing">
            About Us
          </RedirectButton>
          <hr />
          <RedirectButton path="" className="buttonSpacing">
            LinkedIn
          </RedirectButton>
        </div>
      </div>
    </div>
  );
}

export default Landing;
