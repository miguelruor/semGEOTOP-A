import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "../Grid/GridContainer.js"  //"../components/Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js" // "../components/Grid/GridItem.js";

import styles from "../../assets/jss/material-kit-react/components/navPillsStyle.js";

import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js"

import imagenPrueba from "../../assets/img/faces/avatar.jpg";


const useStyles = makeStyles(styles);

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
    //alert('cambio');
  };
  const handleChangeIndex = index => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
          {tabs.map((prop, key) => {
            return (
              <div className={classes.tabContent} key={key}>
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        José-Carlos Gómez-Larrañaga
                        <br />
                        <small className={classes.smallTitle}>CIMAT Mexico</small>
                      </h4>
                      <CardBody>
                        <p className={classes.description}>
                          You can write here details about one of your team members. You
                          can give more details about what they do.
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={6} md={4} > 
                    <img src={imagenPrueba}  width="280" height="300"/>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} > 
                    <img src={imagenPrueba}  width="280" height="300"/>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} > 
                    <img src={imagenPrueba}  width="280" height="300"/>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} > 
                    <img src={imagenPrueba}  width="280" height="300"/>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} > 
                    <img src={imagenPrueba}  width="280" height="300"/>
                  </GridItem>
                </GridContainer>
              </div>
            );
          })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};