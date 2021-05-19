import React,{Component} from 'react';
import {FiSearch} from 'react-icons/fi';
import {IoPersonOutline} from 'react-icons/io5';
import {BsBag} from 'react-icons/bs';

import cssClass from '../SearchBar/SearchBar.module.css';
import Auxiliary from '../../../hoc/Auxiliary';



class SearchBar extends Component  {
    
    state ={
        searchedTerm: ""
     }

  handleUserInput = (event) =>{
               
                    this.setState({searchedTerm: event.target.value});
                    console.log(this.state.searchedTerm);
               
        }
    
    render(){


    return (
        <Auxiliary >
            <div  className={cssClass.SearchBar}>
                    <FiSearch className={cssClass.Icon}/>
                    <input type="text"
                            className={cssClass.TextBox} 
                            placeholder="What are you looking for?" 
                            onChange={this.handleUserInput}
                            value={this.state.searchedTerm}
                            />
            </div>

            <div className={cssClass.HeaderIcons}>
                <div>
                    <IoPersonOutline />
                    <BsBag className={cssClass.Icons}/>
                </div>  
            </div>
           
        </Auxiliary>
        
        )
    }

    
}

export  default SearchBar;
