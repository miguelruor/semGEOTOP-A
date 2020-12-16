import React from 'react';
import AnalogClock, { Themes } from 'react-analog-clock';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

const WIDTH = 80;

const customTheme = {
    background: 'transparent',
    border: 'transparent',
    center: 'transparent',
    seconds: '#000',
    minutes: '#000',
    hour: '#000',
    tick: '#000',
    smallTickWidth: 1,
    largeTickWidth: 1,
    secondHandWidth: 1,
    minuteHandWidth: 1,
    hourHandWidth: 1,
};

const useStyles = makeStyles(styles);

export default function StreamingTime(){
    const classes = useStyles();

    return(
        <GridContainer style={{paddingBottom: 100}} justify = "left">
            <GridItem>
                <h1 className={classes.title}>Streaming time</h1>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "left">
                    <GridItem xs={8} sm={8} md={8}>
                        <p className={classes.description}>Los Angeles</p>
                        <p className={classes.description}>8 am</p>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}><span><AnalogClock width={WIDTH} theme={Themes.dark} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center">
                    <GridItem xs={8} sm={8} md={8}>
                        <p className={classes.description}>Mexico City</p>
                        <p className={classes.description}>10 am</p>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}><span><AnalogClock width={WIDTH} theme={Themes.dark} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center">
                    <GridItem xs={8} sm={8} md={8}>
                        <p className={classes.description}>New York</p>
                        <p className={classes.description}>11 am</p>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}><span><AnalogClock width={WIDTH} theme={Themes.dark} /></span></GridItem>
                </GridContainer>
            </GridItem>
            <GridItem  xs={3} sm={3} md={3}>
                <GridContainer justify = "center">
                    <GridItem xs={8} sm={8} md={8}>
                        <p className={classes.description}>London</p>
                        <p className={classes.description}>4 pm</p>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}><span><AnalogClock width={WIDTH} theme={Themes.dark} /></span></GridItem>
                </GridContainer>
            </GridItem>
        </GridContainer>
    );
}