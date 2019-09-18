import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({layout}) => {
    const parseLayout = () => {
        let slotArray = []
        layout.split('/').map(slot => {
            if(slot !== ''){
                if(isNaN(slot[0])){
                    slotArray = slotArray.concat(slot)
                } else {
                    for (let index = 0; index < Number(slot[0]); index++) {
                        slotArray = slotArray.concat(slot.slice(1,slot.length))  
                    }
                }
            }
        })
        return slotArray
    }
    
    const slotArray = parseLayout()
    return (
        <div className="layout">
            {slotArray.length !== 0 && slotArray.map((slot)=> (
                <div className={slot}> slot {slot}</div>
            ))}
        </div>
    )
}

Layout.propTypes= {
    layout: PropTypes.string
}

export default Layout;