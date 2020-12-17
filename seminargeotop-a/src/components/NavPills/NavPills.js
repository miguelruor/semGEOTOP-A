import React, { useEffect } from "react";
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
import Button from "../../components/CustomButtons/Button.js";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

import Close from "@material-ui/icons/Close";

import imagenPrueba from "../../assets/img/faces/avatar.jpg";


const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function NavPills(props) {

  const [active, setActive] = React.useState(props.active);
  const [classicModal, setClassicModal] = React.useState(false);
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
    classes.imgRounded,
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
                <GridContainer >
                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <h4 className={classes.cardTitle} style={{textAlign:'left'}}>
                        <small className={classes.smallTitle} >Fecha</small>
                      </h4>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        Titulo de la plática
                        <br />
                        <small className={classes.smallTitle}>Speaker</small>
                      </h4>
                      <Button 
                        round 
                        color='primary' 
                        className={classes.button}
                        onClick={() => setClassicModal(true)}
                      >
                          Round
                        </Button> 
                      <Dialog
                        classes={{
                          root: classes.center,
                          paper: classes.modal
                        }}
                        open={classicModal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => setClassicModal(false)}
                        aria-labelledby="classic-modal-slide-title"
                        aria-describedby="classic-modal-slide-description"
                      >
                        <DialogTitle
                          id="classic-modal-slide-title"
                          disableTypography
                          className={classes.modalHeader}
                        >
                          <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setClassicModal(false)}
                          >
                            <Close className={classes.modalClose} />
                          </IconButton>
                          <h4 className={classes.modalTitle}>Modal title</h4>
                        </DialogTitle>
                        <DialogContent
                          id="classic-modal-slide-description"
                          className={classes.modalBody}
                        >
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/0EqHqPvXcMU" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen/>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean. A small
                            river named Duden flows by their place and supplies it
                            with the necessary regelialia. It is a paradisematic
                            country, in which roasted parts of sentences fly into your
                            mouth. Even the all-powerful Pointing has no control about
                            the blind texts it is an almost unorthographic life One
                            day however a small line of blind text by the name of
                            Lorem Ipsum decided to leave for the far World of Grammar.
                          </p>
                        </DialogContent>
                        <DialogActions className={classes.modalFooter}>
                          <Button
                            onClick={() => setClassicModal(false)}
                            color="danger"
                            simple
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>

                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <h4 className={classes.cardTitle} style={{textAlign:'left'}}>
                        <small className={classes.smallTitle} >Fecha</small>
                      </h4>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        Titulo de la plática
                        <br />
                        <small className={classes.smallTitle}>Speaker</small>
                      </h4>
                      <Button round color='primary' className={classes.button}>Round</Button>  
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <h4 className={classes.cardTitle} style={{textAlign:'left'}}>
                        <small className={classes.smallTitle} >Fecha</small>
                      </h4>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        Titulo de la plática
                        <br />
                        <small className={classes.smallTitle}>Speaker</small>
                      </h4>
                      <Button round color='primary' className={classes.button}>Round</Button>  
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <h4 className={classes.cardTitle} style={{textAlign:'left'}}>
                        <small className={classes.smallTitle} >Fecha</small>
                      </h4>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        Titulo de la plática
                        <br />
                        <small className={classes.smallTitle}>Speaker</small>
                      </h4>
                      <Button round color='primary' className={classes.button}>Round</Button>  
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <h4 className={classes.cardTitle} style={{textAlign:'left'}}>
                        <small className={classes.smallTitle} >Fecha</small>
                      </h4>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        Titulo de la plática
                        <br />
                        <small className={classes.smallTitle}>Speaker</small>
                      </h4>
                      <Button round color='primary' className={classes.button}>Round</Button>  
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} >
                    <Card plain>
                      <h4 className={classes.cardTitle} style={{textAlign:'left'}}>
                        <small className={classes.smallTitle} >Fecha</small>
                      </h4>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={imagenPrueba} alt="..." className={imageClasses} />
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        Titulo de la plática
                        <br />
                        <small className={classes.smallTitle}>Speaker</small>
                      </h4>
                      <Button round color='primary' className={classes.button}>Round</Button>  
                    </Card>
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
