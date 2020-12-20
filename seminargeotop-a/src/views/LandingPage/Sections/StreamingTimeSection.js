import React from 'react';

// Lines for Clock's
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

//https://material-ui.com/es/components/grid/
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

export default function StreamingTime(){
    const classes = useStyles();

    // Next Talks ... 
    const date1 = new Date(2020, 1, 1, 8, 0, 0, 0);
    const date2 = new Date(2020, 1, 1, 10, 0, 0, 0);
    const date3 = new Date(2020, 1, 1, 11, 0, 0, 0);
    const date4 = new Date(2020, 1, 1, 4, 0, 0, 0);

    const date5 = new Date(2020, 1, 1, 5, 0, 0, 0);
    const date6 = new Date(2020, 1, 1, 7, 0, 0, 0);
    const date7 = new Date(2020, 1, 1, 12, 0, 0, 0);
    const date8 = new Date(2020, 1, 1, 1, 0, 0, 0);

    const size = 50; // Clock's size

    return(
        <GridContainer style={{paddingBottom: 100}} justify = "left">
            <GridItem>
                <h1 className={classes.title}>Streaming time</h1>
            </GridItem>

            <GridItem  xs={3} sm={3} md={3} >
                <GridContainer justify = "left" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>Los Angeles</p>
                        <p className={classes.description}>8 am</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date1} size={size} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>Mexico City</p>
                        <p className={classes.description}>10 am</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date2} size={size} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>New York</p>
                        <p className={classes.description}>11 am</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date3} size={size}/></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>London</p>
                        <p className={classes.description}>4 pm</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date4} size={size}/></span></GridItem>
                </GridContainer>
            </GridItem>

            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "left" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>Paris</p>
                        <p className={classes.description}>5 pm</p> 
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date5} size={size} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>Moscow</p>
                        <p className={classes.description}>7 pm</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date6} size={size} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>Beijin</p>
                        <p className={classes.description}>12 am</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date7} size={size}/></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center" alignItems="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <p className={classes.description}>Tokyo</p>
                        <p className={classes.description}>1 am + 1</p>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}><span><Clock value={date8} size={size}/></span></GridItem>
                </GridContainer>
            </GridItem>
        </GridContainer>
    );
}