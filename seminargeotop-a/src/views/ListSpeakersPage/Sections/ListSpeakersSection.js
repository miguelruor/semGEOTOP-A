import React, {useEffect, useState} from "react";

import removeAccents from "remove-accents"

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
    const [talks,setTalks] = useState({});


    useEffect(async () => {
        var talks = {};
        await db.collection("talks")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(async function(doc){
                talks[doc.id] = doc.data();
            })
        })
        .catch(function(error) {
            alert("Cannot load some talk.");
        });
        setTalks(talks);

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
            const letter = removeAccents(speaker.surname.charAt(0));
            console.log(letter);
            letterSet.add(letter);
            visitLetters[letter] = false;
            speakersWithLetter[letter] = [];
        });
        speakersList
        .forEach(speaker => {
            const letter = removeAccents(speaker.surname.charAt(0));
            console.log(letter);
            speakersWithLetter[letter].push(speaker);
        });
        setLettersInSurname([...letterSet]);
        setVisitLetters(visitLetters);
        setSpeakersListByLatter(speakersWithLetter); 
    }  

    function listWithLetter(letter){
    
        const listItems = speakersListByLetter[letter].map(speaker =>
            <li> 
            <h5 className={classes.title} style={{fontSize: '20px', fontStyle:'normal'}}> 
                {speaker.surname} {speaker.name} {speaker.middle_initial}
                <br/>
                {speaker.talks.map(function(talkID) {
                  let first = true;
                  return (
                      <>
                        {first ? first=false : ',' } <a href={talks[talkID].video} target="_blank">{talks[talkID].season}</a>
                      </>
                  );  
                })}
            </h5>
            </li>
        );
        
        return (
            <ul style={{listStyleType:'none'}}>
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
            <ul style={{textAlign: 'left'}}>{listItems}</ul>
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
            {listAlphabetical()}
        </div>
    );
}