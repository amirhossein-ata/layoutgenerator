import React from 'react';
import PropTypes from 'prop-types';
import { isNumber } from 'util';

const Layout = ({layout}) => {
    let slotArray = []
    layout.split('/').map(slot => {
        if(isNaN(slot[0])){
            slotArray = slotArray.concat(slot)
        } else {
            for (let index = 0; index < Number(slot[0]); index++) {
             slotArray = slotArray.concat(slot.slice(1,slot.length))  
            }
        }
    })
    return (
        <div className="layout">
            {slotArray.map((slot)=> <div className={slot}/>)}
        </div>
    )
}

Layout.propTypes= {
    layout: PropTypes.string
}

export default Layout;