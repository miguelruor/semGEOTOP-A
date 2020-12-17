import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPage.js";

import {db} from '../../../ConfigFirebase';

const useStyles = makeStyles(styles);

export default function ListSpeakersSection(){
    const classes = useStyles();
    let keywords_aux = {};
    // keywords_aux sera un diccionario indexado por todas las keywords que almacena listas de objetos 
    // del tipo [talk.id, surname, year]

    const [keywords, setKeywords] = useState({});

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
                        [doc.id, doc.data().surname, doc.data().date.toDate().getFullYear()]
                        );   
                }
            });
        })
        .catch(function(error){
            alert("Cannot load some talk")
        });
        setKeywords(keywords_aux)
    },[]);
    
    let sorted_keywords = Object.keys(keywords).map(key => [key, keywords[key]]);
    
    // ordenar por keywords
    sorted_keywords.sort(function(a,b){
        if(a[0]>b[0]){
            return 1;
        }
        if(a[0]<b[0]){
            return -1;
        }
        return 0;
    });

    const Componente = sorted_keywords.map(element => {
        <>
        <h1 className={classes.title}> {element[0] + ": "} </h1>

        {
        element[1].map(talk => {
            <>
            <h1 className={classes.title}>
                {talk[1] + " " + talk[2] + ", "}
            </h1>
            </>
        })
        }
        </>
    });

    return(
        Componente
    );
}