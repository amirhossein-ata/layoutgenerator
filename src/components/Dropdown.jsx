import React, { useState } from 'react'
import PropTypes from 'prop-types';
 
const Dropdown = ({ onSelect, selected }) => {
    const [isOpen, setIsOpen] = useState(false)
    document.onclick = e => {
        setIsOpen(e.target.id === 'dropdown' || e.target.className === "option")
    }
    return (
        <div className="dropdown">
            <div className="selected" id="dropdown">{selected ? selected : "موردی را انتخاب کنید"}</div>  
            <div className={`options ${isOpen ? 'visible' : 'invisible'}`}>
                <div onClick={() => onSelect("XL")}>XL</div>
                <div onClick={() => onSelect("2XL")}>2XL</div>
                <div onClick={() => onSelect("4L")}>4L</div>
                <div onClick={() => onSelect("XL/2L")}>XL/2L</div>
                <div onClick={() => onSelect("XL/L/2SM")}>XL/L/2SM</div>
            </div>
        </div>
    )
}

Dropdown.propTypes= {
    onSelect: PropTypes.func.isRequired
}

export default Dropdown;