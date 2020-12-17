import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";


// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";


import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Backgroud image
import backgroundImageHome from '../../assets/img/images/img2.jpg';

// Sections for this page
import ListSpeakersSection from "./Sections/ListSpeakersSection";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ListSpeakersPage(){
    const classes = useStyles();

    return(
        <div>
            <Header
                color="blue"
                routes={dashboardRoutes}
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
                            <h1 className={classes.title}>List of speakers</h1>
                            <h4>
                                Find all speakers in alphabetical order
                            </h4>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ListSpeakersSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}