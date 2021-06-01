import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


import cssClass from '../../components/BodyContent/BodyContent.module.css';
import Items from './Items';
import CartList from '../AddToCart/CartList';


const style = makeStyles({
    gridContainer:{
        marginBottom:'10px'
        
    } 
});

const BodyContent = (props) => {

    const classes = style();

    return (

        <div className={cssClass.BodyContent}>

             <Grid container  >
              
                    <Items />
     
            </Grid>
        </div>
       
    )
}

export default BodyContent
/* put these inside the div above

//         {
        //             JSONDATA.filter((val) =>{
        //                 if(context.searchedTerm == "" ){
        //                     return val;
        //                 }else if(val.first_name.toLowerCase().includes(context.toLowerCase())){
        //                     return val;
        //                 }
        //             }).map((valu, key) =>{
        //                 return(
        //                     <Items key={key} searchedValue={valu.first_name}/>
        //                 );
        //             })
        //         }

*/

