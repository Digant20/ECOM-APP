import React from 'react';
import {FiSearch} from 'react-icons/fi';
import cssClass from '../SearchBar/SearchBar.module.css';
import Auxiliary from '../../../hoc/Auxiliary';

import {IoPersonOutline} from 'react-icons/io5';
import {BsBag} from 'react-icons/bs';

const SearchBar = () => {
    return (
        <Auxiliary >
            <div  className={cssClass.SearchBar}>
                <FiSearch className={cssClass.Icon}/><input type="text" className={cssClass.TextBox}  placeholder="What are you looking for?" />
            </div>
            <div className={cssClass.HeaderIcons}>
              <div ><IoPersonOutline /><BsBag className={cssClass.Icons}/></div>  
            </div>
        </Auxiliary>
        
    )
}

export default SearchBar
