import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons


import classNames from "classnames";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function FutureTalks(){
    const classes = useStyles();

    return(
        <div>
            <p>
                <h2 className={classes.title}> SPRING 2021 TALKS: </h2>
                <ol>
                    <li className={classes.description}>January 22: <b>Sergei Nechaev</b> - Interdisciplinary Scientific Center Poncelet (CNRS UMI 2615) Moscow - Russia</li>
                    <li className={classes.description}>February 5: <b>Alice Patania</b> - Indiana University - USA</li>
                    <li className={classes.description}>February 19: <b>Nina Otter</b> - UCLA - USA</li>
                    <li className={classes.description}>March 5: <b>Davide Michieletto</b> - University of Edinburgh - UK</li>
                    <li className={classes.description}>March 19: <b>Daniel Peralta-Salas</b> - ICMAT - Spain</li>
                    <li className={classes.description}>April 9: <b>Stephen Childress</b> - NYU - USA</li>
                    <li className={classes.description}>April 23: <b>Andrzej Stasiak</b> - University of Lausanne - Switzerland</li>
                    <li className={classes.description}>May 7: <b>Aldo Guzmán-Sáenz</b> - IBM Thomas J. Watson Research Center - USA</li>
                    <li className={classes.description}>May 21: <b>Caroline Uhler</b> - ETH Zurich - Switzerland</li>
                </ol>
            </p>
        </div>
    );
}