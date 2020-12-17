import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import MenuOpen from '@material-ui/icons/MenuOpen';

import {db} from '../../../ConfigFirebase';

const useStyles = makeStyles(styles);

export default function ListSpeakersSection(){
    const classes = useStyles();
    var speakers = [];
    const [speakersList,setSpeakersList] = useState([]);
    const [lettersInSurname, setLettersInSurname] = useState([]);
    const [visitLetters, setVisitLetters] = useState({});

    useEffect(async () => {
        await db.collection("speakers").where("talks","!=", null)
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
        speakers.sort(function(a,b){
            if(a.surname > b.surname){
                return 1;
            }
            if(a.surname < b.surname){
                return -1;
            }
            return 0;
        });
        setSpeakersList(speakers);
    },[]);

    // Al modificar speakers list con el contenido se actualiza
    useEffect(() => {
        handleLettersInSurname();
    },[speakersList]);
    
      
    // Función que revisa las letras que existen para hacer listas
    function handleLettersInSurname(){
        let letterSet = new Set();
        let visitLetters = {};
        speakersList
        .forEach(speaker => {
            letterSet.add(speaker.surname.charAt(0))
            visitLetters[speaker.surname.charAt(0)] = false;
        });
        setLettersInSurname([...letterSet]);
        setVisitLetters(visitLetters);        
    }  

    const listAlphabetical = lettersInSurname.map(letter => 
        <>
            <li 
                style={{cursor: 'pointer'}}> 
                <h1 className={classes.title}> 
                    {letter} <MenuOpen
                    onClick={onclickLetter.bind(this, letter)}
                    /> {visitLetters[letter] ? 'simon' : 'nel'}
                </h1>
            </li>
        </>
    );

    function onclickLetter(letter){
        let newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
    }

    return(
        <div className={classes.section}> 
            <h1 className={classes.title}> Speakers List </h1>
            <ul>
                {listAlphabetical}
             </ul>       
        </div>
    );
}