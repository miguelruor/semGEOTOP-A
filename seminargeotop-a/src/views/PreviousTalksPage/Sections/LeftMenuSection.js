import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function LeftMenuSection(){
    const classes = useStyles();
    return(
        <NavPills
            color="rose"
            horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 }
            }}
            tabs={[
                {
                tabButton: "Fall 2020",
                tabContent: (
                    <span>
                    <p className={classes.title}>
                        Plática 1
                    </p>
                    <br />
                    <p>
                        Plática 2
                    </p>
                    <br />
                    <p>
                        Plática 3
                    </p>
                    </span>
                )
                },
                {
                tabButton: "Summer 2020",
                tabContent: (
                    <span>
                    <p>
                        Plática 4
                    </p>
                    <br />
                    <p>
                        Plática 5
                    </p>
                    <br />
                    <p>
                        Plática 6
                    </p>
                    </span>
                )
                }
            ]}
            />
    );
}

