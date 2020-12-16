import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function LeftMenuSection(){
    const classes = useStyles();
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
                }
            ]}
            />
    );
}

