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
import image1 from "../../../assets/img/images/speakers/sp041.png";

const useStyles = makeStyles(styles);

export default function NextTalksSection(){

    
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
            image: "../../../assets/img/images/sp41.jpg",
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
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{talk.title}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {talk.abstract}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </>
                    ))}
                </GridContainer>
            </GridItem>
        </GridContainer>
    );
}