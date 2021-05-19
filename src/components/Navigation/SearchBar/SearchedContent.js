import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


import cssClass from './SearchedContent.module.css';
import BodyOnlyOnSearchFilter from '../../BodyContent/BodyOnlyOnSearchFilter';


const style = makeStyles({
    gridContainer:{
        marginBottom:'10px'
        
    } 
});

const SearchedContent = (props) => {

    const classes = style();
    //console.log("inside SearchedContent:", props.searchedTerm);

    return (

        <div className={cssClass.SearchedContent}>
             <Grid container  >
              
                    <BodyOnlyOnSearchFilter searchedInputTerm={props.searchedTerm}/>
     
            </Grid>
        </div>
       
    )
}

export default SearchedContent;


