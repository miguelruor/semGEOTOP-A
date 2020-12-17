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
import { Speaker } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ListSpeakersSection(){
    const classes = useStyles();
    var speakers = [];
    const [speakersList,setSpeakersList] = useState([]);
    const [speakersListByLetter,setSpeakersListByLatter] = useState([]);
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
                        middle_initial: doc.data().middle_initial,
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
        let speakersWithLetter = {};
        speakersList
        .forEach(speaker => {
            letterSet.add(speaker.surname.charAt(0))
            visitLetters[speaker.surname.charAt(0)] = false;
            speakersWithLetter[speaker.surname.charAt(0)] = [];
        });
        speakersList
        .forEach(speaker => {
            speakersWithLetter[speaker.surname.charAt(0)].push(speaker);
        });
        setLettersInSurname([...letterSet]);
        setVisitLetters(visitLetters);
        setSpeakersListByLatter(speakersWithLetter); 
    }  

    function listWithLetter(letter){
    
        const listItems = speakersListByLetter[letter].map(speaker =>
            <li> 
            <h5 className={classes.title}> 
                {speaker.surname} {speaker.name} {speaker.middle_initial}
            </h5>
            </li>
        );
        
        return (
            <ul>
                {listItems}
            </ul>
        );
    }

    function listAlphabetical(){
        const listItems = lettersInSurname.map(letter => 
                <li 
                    style={{cursor: 'pointer'}}> 
                    <h1 className={classes.title}> 
                        {letter} <MenuOpen
                        onClick={onclickLetter.bind(this, letter)}
                        /> {visitLetters[letter] ? listWithLetter(letter) : null}
                    </h1>
                </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    const [count, setCount] = useState(0);

    function onclickLetter(letter){
        let newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
        setCount(count+1);
    }

    return(
        <div className={classes.section}> 
            <h1 className={classes.title}> Speakers List </h1>
                {listAlphabetical()}
        </div>
    );
}