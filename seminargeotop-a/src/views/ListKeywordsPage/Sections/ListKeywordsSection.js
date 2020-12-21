import React, {useState, useEffect} from "react";
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
    let keywords_aux = {};
    // keywords_aux sera un diccionario indexado por todas las keywords que almacena listas de objetos 
    // del tipo [talk.id, surname, year]

    const [keywords, setKeywords] = useState({});
    const [keywordsListByLetter,setKeywordsListByLatter] = useState([]);
    const [lettersInKeywords, setLettersInKeywords] = useState([]);
    const [visitLetters, setVisitLetters] = useState({});
    
    useEffect(async()=>{
        await db.collection("talks").get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                let keys = doc.data().keywords;
                let keys_len = keys.length;
                for(let i=0; i<keys_len; i++){
                    // Checo si encuentro una keyword nueva
                    if(!(keys[i] in keywords_aux)){
                        keywords_aux[keys[i]] = []
                    }
                    
                    keywords_aux[keys[i]].push(
                        [doc.id, /*doc.data().surname*/'dato', doc.data().date.toDate().getFullYear()]
                        );   
                }
            });
        })
        .catch(function(error){
            alert("Cannot load some talk")
        });
        setKeywords(keywords_aux);
    },[]);

    // Al modificar speakers list con el contenido se actualiza
    useEffect(() => {
        handleLettersInKeyWords();
    },[keywords]);

    // Función que revisa las letras que existen para hacer listas
    function handleLettersInKeyWords(){
        let letterSet = new Set();
        let visitLetters = {};
        let keywordsWithLetter = {};
        for(var k in keywords){
            var letter = k.charAt(0).toUpperCase();
            letterSet.add(letter);
            visitLetters[letter] = false;
            keywordsWithLetter[letter] = [];
        }
        for(var k in keywords){
            var letter = k.charAt(0).toUpperCase() ;
            var copy = {};
            copy[k] = keywords[k];
            keywordsWithLetter[letter].push(copy);
        }
        var auxLetterSet = [...letterSet];
        auxLetterSet.sort();
        setLettersInKeywords(auxLetterSet);
        setVisitLetters(visitLetters);
        setKeywordsListByLatter(keywordsWithLetter); 
    }  

    function listWithLetter(letter){
    
        const listItems = keywordsListByLetter[letter].map(keyword =>
            <li> 
            <h5 style={{fontSize: '20px', fontStyle:'normal'}}> 
                {Object.keys(keyword).map(function(k) {
                    let result = '';
                    let first = true;    
                    {keyword[k].map(function(data) {
                        result = result.concat((first ? '' : ',  ') + data[1] + ' ' + data[2]);
                        first = false;
                    })}
                    return (<>{k} <br/> {result} </>);})}
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
        const listItems = lettersInKeywords.map(letter => 
                <li
                    style={{cursor: 'pointer', listStyleType:'none'}} > 
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
        <div className={classes.section} > 
            {listAlphabetical()}
        </div>
    );
}