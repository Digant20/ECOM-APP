import React from 'react';
import cssClass from '../BodyContent/Items.module.css';

const Items = () => {
    return (
        <div className={cssClass.Items}>
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
    )
}

export default Items
