/*import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";


function App() {
  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        //{...rest}
      />
    </div>
  );
}

export default App;
*/

import './App.css';

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Button from "./components/CustomButtons/Button.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import Parallax from "./components/Parallax/Parallax.js";

import styles from "./assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TeamSection from "./views/LandingPage/Sections/TeamSection.js";
import WorkSection from "./views/LandingPage/Sections/WorkSection.js";
import SectionCarousel from "./views/Components/Sections/SectionCarousel.js";

// Background Image
import backgroundImageHome from './assets/img/images/img1.jpg';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        //{...rest}
      />
      <Parallax filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Seminar GEOTOP-A</h1>
              <h4>
                A series of talks on current topics of interest in applications of Geometry and Topology.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=lpgcG4ZdmNc&feature=emb_logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch our last seminar!
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        <div className={classes.container}>
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}


