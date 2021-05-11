import React from 'react';
import cssClass from '../../components/BodyContent/BodyContent.module.css';
import Items from './Items';


const BodyContent = () => {
    return (
        <div className={cssClass.BodyContent}>
           
            <Items />
            <Items />
            <Items />
            
        </div>
    )
}

export default BodyContent



/*
import React from 'react';
import cssClass from '../../components/BodyContent/BodyContent.module.css';

const BodyContent = () => {
    return (
        <div className={cssClass.BodyContent}>
            <div className={cssClass.BodyContent1}>
                <div className={cssClass.Cards}>
                    <p>Hello there 1</p>
                </div>
                
                
                <div className={cssClass.Cards}>
                    <p>Hello there 2</p>
                </div>

                <div className={cssClass.Cards}>
                    <p>Hello there 3</p>
                </div>

                <div className={cssClass.Cards}>
                    <p>Hello there 3</p>
                </div>
            </div>
            
        </div>
    )
}

export default BodyContent
*/
