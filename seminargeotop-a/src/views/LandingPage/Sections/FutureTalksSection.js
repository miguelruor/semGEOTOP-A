import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import {db} from '../../../ConfigFirebase';

import classNames from "classnames";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { FormatAlignJustify } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function FutureTalks(){
    const classes = useStyles();

    const [talks,setTalks] = useState([
        {
            date: "January 22",
            speaker: "Sergei Nechaev",
            tittle: "Interdisciplinary Scientific Center Poncelet (CNRS UMI 2615) Moscow - Russia"
        },
        {
            date: "February 5",
            speaker: "Sergei Nechaev",
            tittle: "Indiana University - USA"
        },
        {
            date: "February 19",
            speaker: "Sergei Nechaev",
            tittle: "UCLA - USA"
        },
        {
            date: "March 5",
            speaker: "Sergei Nechaev",
            tittle: "University of Edinburgh - UK"
        },
        {
            date: "March 19",
            speaker: "Sergei Nechaev",
            tittle: "ICMAT - Spain"
        },
        {
            date: "April 9",
            speaker: "Sergei Nechaev",
            tittle: "NYU - USA"
        },
        {
            date: "April 23",
            speaker: "Sergei Nechaev",
            tittle: "University of Lausanne - Switzerland"
        },
        {
            date: "May 7",
            speaker: "Sergei Nechaev",
            tittle: "IBM Thomas J. Watson Research Center - USA"
        },
        {
            date: "May 21",
            speaker: "Sergei Nechaev",
            tittle: "ETH Zurich - Switzerland"
        },
    ]);

    return(
        
        <div className={classes.section} style={{paddingTop: 20}}>
            <h1 className={classes.title}>SPRING 2021 TALKS</h1>
            <div styles={{justifyContent: 'center'}}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
                        <Button type="button" color="info">Date</Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={10}>
                        <Button type="button" color="info">Speaker</Button>
                    </GridItem>
                    {talks.map(talk => (
                        <>
                        <GridItem xs={12} sm={12} md={2}>
                            <p className={classes.description}>{talk.date}</p>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <p className={classes.description}>{talk.speaker}</p>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            <p className={classes.description}>{talk.tittle}</p>
                        </GridItem>
                        </>
                    ))}
                </GridContainer>
            </div>
        </div>
        /*
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
            </p>*/
    );
}