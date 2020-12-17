import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import {db} from '../../../ConfigFirebase';

const useStyles = makeStyles(styles);

export default function LeftMenuSection(){
    const classes = useStyles();

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var speakers_aux = {};
    var seasons_aux = {};

    const [seasons, setSeasons] = useState({});

    useEffect(async()=>{
        await db.collection("speakers").get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                var idSpeaker = doc.id;
                var mi = doc.data().middle_initial;

                speakers_aux[idSpeaker] = doc.data().name + " " + 
                    (mi != null ? mi : "") + " " + doc.data().surname;
            });
            //alert("Carga de speakers exitosa")
        })
        .catch(function(error){
            alert("Cannot load some speaker");
        });

        await db.collection("talks").orderBy("date", "desc")
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                var sea = doc.data().season;
                if(!(sea in seasons_aux)){
                    seasons_aux[sea] = []
                }
                
                const speakerID = doc.data().speaker;
                const date = doc.data().date.toDate();

                seasons_aux[sea].push(
                    {
                        speaker: speakers_aux[speakerID],
                        title: doc.data().title,
                        keywords: doc.data().keywords,
                        date: month[date.getMonth()] + date.getDay().toString()+", " + date.getFullYear().toString(),
                        abstract: doc.data().abstract,
                        video: doc.data().video,
                    }
                );
                //alert(speakerID)
            });
        })
        .catch(function(error){
            alert(error);
        });

        setSeasons(seasons_aux);
    },[]);

    return(
        <NavPills
            color="transparent"
            horizontal={{
                tabsGrid: { xs: 12, sm: 2, md: 2 },
                contentGrid: { xs: 12, sm: 10, md: 10 }
            }}
            tabs={[
                {
                tabButton: "Purple",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 1
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 2
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 3
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 4
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 5
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 6
                    </p>
                    <br />
                    </span>
                )
                },
                {
                tabButton: "Blue",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 4
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 5
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 6
                    </p>
                    </span>
                )
                },
                {
                tabButton: "Spring 2020",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 1
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 2
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 3
                    </p>
                    </span>
                )
                },
                {
                tabButton: "Fall 2019",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 1
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 2
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 3
                    </p>
                    </span>
                )
                },
                {
                tabButton: "Spring 2019",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 1
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 2
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 3
                    </p>
                    </span>
                )
                },
                {
                tabButton: "Fall 2018",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 1
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 2
                    </p>
                    <br />
                    <p className={classes.title}>
                        Plática 3
                    </p>
                    </span>
                )
                }
            ]}
            />
    );
}

