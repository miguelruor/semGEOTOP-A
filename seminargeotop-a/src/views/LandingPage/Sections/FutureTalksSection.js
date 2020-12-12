import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

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
                <h2> SPRING 2021 TALKS: </h2>
                <ol>
                    <li>January 22: <b>Sergei Nechaev</b> - Interdisciplinary Scientific Center Poncelet (CNRS UMI 2615) Moscow - Russia</li>
                    <li>February 5: <b>Alice Patania</b> - Indiana University - USA</li>
                    <li>February 19: <b>Nina Otter</b> - UCLA - USA</li>
                    <li>March 5: <b>Davide Michieletto</b> - University of Edinburgh - UK</li>
                    <li>March 19: <b>Daniel Peralta-Salas</b> - ICMAT - Spain</li>
                    <li>April 9: <b>Stephen Childress</b> - NYU - USA</li>
                    <li>April 23: <b>Andrzej Stasiak</b> - University of Lausanne - Switzerland</li>
                    <li>May 7: <b>Aldo Guzmán-Sáenz</b> - IBM Thomas J. Watson Research Center - USA</li>
                    <li>May 21: <b>Caroline Uhler</b> - ETH Zurich - Switzerland</li>
                </ol>
            </p>
        </div>
    );
}