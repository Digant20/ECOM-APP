import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import * as FAicons from 'react-icons/fa';
import * as AIicons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import {AiOutlineClose} from 'react-icons/ai';

import NavigationItems from '../NavigationItems/NavigationItems';
import SideNavData from './SideNavData';
import cssClass from './SideNav.module.css';
import SearchBar from '../SearchBar/SearchBar';
//import CloseIcon from './CloseIcon';




const SideNav = (props) => {


    const [oldSidebarState, setSidebarState] = useState(false);

    const showSidebar = () => setSidebarState(!oldSidebarState);

    let cssStyle = oldSidebarState ? '0' : '-100%' ;


 
   let attachedClasses = [cssClass.SideNav,cssClass.Close];
   if(oldSidebarState){
       attachedClasses = [cssClass.SideNav,cssClass.Open];
   }
  

    return (
        <div>
        <IconContext.Provider value={ {color:'#292929'} }>
           <div className={cssClass.Nav} >
               <NavLink to="#" className={cssClass.Hamburger}>
                    <FAicons.FaBars onClick={showSidebar}/>
               </NavLink> 
               <SearchBar />

           </div>           
           
           {/* <nav className={cssClass.SideNav} style={{left: cssStyle}}   oldSidebarState={oldSidebarState} > */}

           <nav className={attachedClasses.join(' ')}    oldSidebarState={oldSidebarState} >
               
               <div >
                    <div style = {{marginTop:'20px', marginBottom:'10px'}}>
                            <span style={{marginLeft: '2.5rem', color:'grey', fontSize:'1.2rem'}}>All Categories</span>
                            <NavLink to="#" className={cssClass.CloseIcon}>
                                <AiOutlineClose onClick={showSidebar} />
                            </NavLink>
                    </div> 


                {SideNavData.map((item, index) =>{
                    return <NavigationItems item={item} key={index} />
                })}
               </div>
           </nav>

        </IconContext.Provider>
        </div>
    )
}

export default SideNav
