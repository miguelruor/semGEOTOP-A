import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function ListSpeakersSection(){
    const classes = useStyles();

    const [talks,setTalks] = useState([
        {
            surname: "Sergei Nechaev",
            name: 
            minitial:
            years: 
            idTalks:
        },
        {
            surname: "Sergei Nechaev",
            name: 
            minitial:
            years:
            idTalks:
        },
        {
            surname: "Sergei Nechaev",
            name: 
            minitial:
            years:
            idTalks:
        },
        {
            surname: "Sergei Nechaev",
            name: 
            minitial:
            years: 
            idTalks:
        },
        {
            surname: "Sergei Nechaev",
            name: 
            minitial:
            years:
            idTalks:
        },
        {
            surname: "Sergei Nechaev",
            name: 
            minitial:
            years:
            idTalks:
        },
    ]);

    return(
        <p> Hola </p>
    );
}