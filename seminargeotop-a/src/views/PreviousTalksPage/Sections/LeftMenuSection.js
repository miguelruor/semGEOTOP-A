import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function LeftMenuSection(props){
    const classes = useStyles();

    //Probar acceso a datos
    //useEffect(() => alert(props.previousTalks['SPRING 2020'][0]['speaker']),[]);
    
    return(
        <NavPills
            color="primary"
            horizontal={{
                tabsGrid: { xs: 12, sm: 2, md: 2 },
                contentGrid: { xs: 12, sm: 10, md: 10 }
            }}
            content={props.previousTalks}
            tabs={[
                {
                    tabButton: "Fall 2020",
                },
                {
                    tabButton: "SUMMER 2020",
                },
                {
                    tabButton: "Spring 2020",
                },
                {
                    tabButton: "Fall 2019",
                },
                {
                    tabButton: "Spring 2019",
                },
                {
                    tabButton: "Fall 2018",
                }
            ]}
            />
    );
}

