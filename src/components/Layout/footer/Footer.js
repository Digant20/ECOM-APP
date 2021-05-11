import React from 'react';
import cssClass from './Footer.module.css';
import * as GRicon from 'react-icons/gr';
import * as RIicons from 'react-icons/ri';
import {Link} from 'react-router-dom';

const Footer =() =>{
    let today = new Date();
    let year = today.getFullYear();

    return(
        <footer className={cssClass.Footer}>
            <span className={cssClass.Copyright}>Copyright © {year}</span> <strong style={{float: 'left'}}> ECOM App</strong><span className={cssClass.Copyright}>, All rights reserved.</span> <span className={cssClass.Social}> Find us on:<Link className={cssClass.Links} to="/facebook"> <GRicon.GrFacebook /></Link>  <Link className={cssClass.Links} to="/twitter"><GRicon.GrTwitter /></Link> <Link className={cssClass.Links} to="/insta"> <RIicons.RiInstagramFill /></Link> </span>
        </footer>
    )
}

export default Footer;