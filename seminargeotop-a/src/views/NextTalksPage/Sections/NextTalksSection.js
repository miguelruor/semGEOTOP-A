import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import image1 from "../../../assets/img/images/sp40.jpg";

// import {db} from '../../../ConfigFirebase';

const useStyles = makeStyles(styles);

export default function NextTalksSection(){
    /**
    speakers = []
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
                        years: [],
                    });

                    let speakers_len = speakers.length
                    let talks_len = speakers[speakers_len-1].talks.length

                    for(let i=0; i<talks_len; i++){
                        db.collection("talks").doc(speakers[speakers_len-1].talks[i].toString())
                        .get()
                        .then(function(doc){
                            speakers[speakers_len-1].years
                            .push(doc.data().date.toDate().getFullYear());
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

    speakers.sort(function(a,b){
        if(a.surname > b.surname){
            return 1;
        }
        if(a.surname < b.surname){
            return -1;
        }
        return 0;
    });
    **/
    const [talks, setTalks] = useState([
        {
            date: "January 22, 2021",
            speaker: "Sergei Nechaev",
            title: "Low-dimensional topology and non-Euclidean geometry in nature",
            keywords: ["Statistical topology", "Low-dimensional topology", "unknotted long polymer chain", 
            "DNA folding"],
            abstract: 'In the talk I demonstrate on specific examples the emergence of a new actively '
            + 'developing field, the "statistical topology", which unifies topology, noncommutative geometry, '
            + 'probability theory and random walks. In particular, I plan to discuss the following interlinked '
            + 'questions: (i) statistics of random walks on hyperbolic manifolds and graphs in connection with '
            + 'the topology and fractal structure of unknotted long polymer chain confined in a bounding box and '
            + 'hierarchical DNA folding, and (ii) optimal embedding in the three-dimensional space of '
            + 'exponentially growing tissues, like, for example, the salad leaf, and how the hierarchical '
            + 'ultrametric geometry emerges in that case.',
            image: "../../../assets/img/images/sp40.jpg",
        },
    ]);

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
      );
    return(
        <GridContainer>
            <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
                    <img src={image1} className={imageClasses}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={1}/>
            <GridItem xs={12} sm={12} md={6}>
                <GridContainer>
                    {talks.map(talk => (
                        <>
                        <GridItem xs={12} sm={12} md={12}><h1 className={classes.title}>{talk.speaker}</h1></GridItem>
                        <GridItem xs={12} sm={12} md={12}><h4 className={classes.description}>{talk.date}</h4></GridItem>
                        <GridItem xs={12} sm={12} md={12}><h4 className={classes.description}>{talk.title}</h4></GridItem>
                        <GridItem xs={12} sm={12} md={12}><h4 className={classes.description}>{talk.abstract}</h4></GridItem>
                        <GridItem xs={12} sm={12} md={12}><h4 className={classes.description}>{talk.keywords.join(", ")}</h4></GridItem>
                        </>
                    ))}
                    
                </GridContainer>
            </GridItem>
        </GridContainer>
    );
}