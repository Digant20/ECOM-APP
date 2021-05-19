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
import BodyOnlyOnSearchFilter from '../../BodyContent/BodyOnlyOnSearchFilter';
import WelcomeCard from '../../Layout/WelcomeCard.js';
import Auxiliary from '../../../hoc/Auxiliary';
import ReactCarousel from '../../Layout/Carousel/ReactCarousel';
import BodyContent from '../../BodyContent/BodyContent';
import Footer from '../../Layout/footer/Footer';
import SearchedContent from '../SearchBar/SearchedContent';
//import CloseIcon from './CloseIcon';


const SideNav = (props) => {


    const [oldSidebarState, setSidebarState] = useState(false);

    const showSidebar = () => setSidebarState(!oldSidebarState);

    let cssStyle = oldSidebarState ? '0' : '-100%' ;

    //for search input filter
    const [searchInput,setSearchInput] = useState('');

    const handleSearchInput = (event) => setSearchInput(event.target.value);
    //console.log("inside SideNav.js: ", searchInput);

 
   let attachedClasses = [cssClass.SideNav,cssClass.Close];
   if(oldSidebarState){
       attachedClasses = [cssClass.SideNav,cssClass.Open];
   }
  console.log("searchInput length value: "+searchInput.length);
  

    return (
        //conditional rendering                                 

searchInput === '' && searchInput.length <= 0 ?       <div>
                                                <IconContext.Provider value={ {color:'#292929'} }>
                                                <div className={cssClass.Nav} >
                                                    <NavLink to="#" className={cssClass.Hamburger}>
                                                            <FAicons.FaBars onClick={showSidebar}/>
                                                    </NavLink> 
                                                    <SearchBar searchInputMethod={handleSearchInput}/>
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

                                                <WelcomeCard /> 
                                                <ReactCarousel /> 
                                                <BodyContent /> 
                                                <Footer />                                                   

                                        </div>
                     
                     
                                :  
                                
                                <Auxiliary> 
                                     <div>
                                        <IconContext.Provider value={ {color:'#292929'} }>
                                        <div className={cssClass.Nav} >
                                            <NavLink to="#" className={cssClass.Hamburger}>
                                                    <FAicons.FaBars onClick={showSidebar}/>
                                            </NavLink> 
                                            <SearchBar searchInputMethod={handleSearchInput}/>

                                        </div>           
                                        </IconContext.Provider>
                                    </div>
                                                            
                                    <SearchedContent searchedTerm={searchInput}/>

                                </Auxiliary> 

                                        
                                        
                                        
    )
}

export default SideNav
