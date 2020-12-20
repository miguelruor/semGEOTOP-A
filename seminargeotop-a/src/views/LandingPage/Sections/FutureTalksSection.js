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
            speaker: "Alice Patania",
            tittle: "Indiana University - USA"
        },
        {
            date: "February 19",
            speaker: "Nina Otter",
            tittle: "UCLA - USA"
        },
        {
            date: "March 5",
            speaker: "Davide Michieletto",
            tittle: "University of Edinburgh - UK"
        },
        {
            date: "March 19",
            speaker: "Daniel Peralta-Salas",
            tittle: "ICMAT - Spain"
        },
        {
            date: "April 9",
            speaker: "Stephen Childress",
            tittle: "NYU - USA"
        },
        {
            date: "April 23",
            speaker: "Andrzej Stasiak",
            tittle: "University of Lausanne - Switzerland"
        },
        {
            date: "May 7",
            speaker: "Aldo Guzmán-Sáenz",
            tittle: "IBM Thomas J. Watson Research Center - USA"
        },
        {
            date: "May 21",
            speaker: "Caroline Uhler",
            tittle: "ETH Zurich - Switzerland"
        },
    ]);

    return(
        <div className={classes.section} style={{paddingTop: 20}}>
            <h1 className={classes.title}>SPRING 2021 TALKS</h1>
            <div styles={{justifyContent: 'center'}}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
                        <Button type="button" color="info" disabled>Date</Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={10}>
                        <Button type="button" color="info" disabled>Speaker</Button>
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
    );
}