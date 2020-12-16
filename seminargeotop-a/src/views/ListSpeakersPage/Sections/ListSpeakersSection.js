import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPage.js";

import {db} from '../../../ConfigFirebase';

const useStyles = makeStyles(styles);

export default function ListSpeakersSection(){
    const classes = useStyles();
    let speakers = [];

    useEffect(() => {
        db.collection("speakers").where("talks","!=", null)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    speakers.push({
                        name: doc.data().name,
                        surname: doc.data().surname,
                        middle_inital: doc.data().middle_inital,
                        talks: doc.data().talks,
                        years: []
                    });

                    let speakers_len = speakers.length
                    let talks_len = speakers[speakers_len-1].talks.length

                    for(let i=0; i<talks_len; i++){
                        db.collection("talks").doc(speakers[speakers_len-1].talks[i])
                        .get()
                        .then(function(querySnapshot){
                            querySnapshot.forEach(function(doc){
                                speakers[speakers_len-1].years.push(doc.data().date.getFullYear())
                            });
                        })
                        .catch(function(error){
                            alert("Cannot load some talk");
                        });
                    }

                }); // Se acaba el forEach
            })
            .catch(function(error) {
                alert("Cannot load speakers");
            });
      },[]);

    const Component = speakers.map(speaker => 
        <>
        <h1 className={classes.title}> {speaker.surname + ", "+ speaker.name+ ", " + speaker.middle_inital
            + '; '} </h1>
        </>
    );

    return(
        Component
    );
}