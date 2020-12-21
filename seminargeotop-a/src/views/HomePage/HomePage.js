import '../../App.css';

import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
//import styles from "./HomePageStyle.js";

// Sections for this page
import TeamSection from "../../views/LandingPage/Sections/TeamSection.js";
import SectionCarousel from "../../views/Components/Sections/SectionCarousel.js";

// Background Image
import backgroundImageHome from '../../assets/img/images/img1.jpg';
import FutureTalksSection from '../../views/LandingPage/Sections/FutureTalksSection.js';
import StreamingTimeSection from '../../views/LandingPage/Sections/StreamingTimeSection.js';

import {db} from '../../ConfigFirebase';
import { Speaker } from '@material-ui/icons';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  
  const[talkTitle,setTalkTitle] = useState('');
  const[talkDescription,setTalkDescription] = useState('');
  const[talkVideo,setTalkVideo] = useState('');
  const[talkKeywords,setTalkKeywords] = useState([]);
  const [speaker, setSpeaker] = useState('');
  const [modal, setModal] = React.useState(false);

  var speakerID = '';
  var findTalk = false;

  useEffect(async () => {
    await db.collection("talks").orderBy("date", "desc").limit(2)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              var url_video = doc.data().video;

              if(url_video != null && !findTalk){
                setTalkTitle(doc.data().title);
                setTalkKeywords(doc.data().keywords);
                setTalkVideo(doc.data().video);
                setTalkDescription(doc.data().abstract);
                speakerID = doc.id;
                findTalk = true;
                
                db.collection("speakers").doc(speakerID).get()
                .then(function(doc){
                    var mi = doc.data().middle_initial;
                    setSpeaker(doc.data().name + " " + 
                    (mi != null ? mi : "") + " " + doc.data().surname);
                })
                .catch(function(error){
                  //alert("Cannot load speaker");
                  alert(error);
                });
              }
            });
        })
        .catch(function(error) {
            //alert("Cannot load last talk");
            alert(error);
        });

  },[]);

  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Seminar GEOTOP-A</h1>
              <h4>
                A series of talks on current topics of interest in applications of Geometry and Topology.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                //href="https://www.youtube.com/watch?v=lpgcG4ZdmNc&feature=emb_logo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={()=>setModal(true)}
              >
                <i className="fas fa-play" />
                Watch our last seminar!
              </Button>
              <Dialog
                classes={{
                  root: classes.center,
                  paper: classes.modal
                }}
                open={modal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setModal(false)}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description"
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
                    onClick={() => setModal(false)}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton>
                  <h2 className={classes.modalTitle} >Talk Details</h2>
                </DialogTitle>
                <DialogContent
                  id="modal-slide-description"
                  className={classes.modalBody}
                >
                  <p>
                    <b>Speaker: </b>{speaker}
                    <br/>
                    <b>Title: </b>{talkTitle}
                    <br/>
                    <b>Keywords: </b> {talkKeywords.join(', ')}
                    <br/>
                    <b>Abstract: </b>{talkDescription}
                    <br/>
                    <b>Video: </b> <a href={talkVideo}>Click here</a>
                  </p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                  <Button
                    onClick={() => setModal(false)}
                    color="danger"
                    simple
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        <div className={classes.container}>
          <TeamSection />
          <FutureTalksSection />
          <StreamingTimeSection />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}


