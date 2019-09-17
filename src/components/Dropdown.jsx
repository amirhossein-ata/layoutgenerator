import React, { useState } from 'react'
import PropTypes from 'prop-types';
 
const Dropdown = ({ onSelect, selected }) => {
    const [isOpen, setIsOpen] = useState(false)
    document.onclick = e => {
        setIsOpen(e.target.id === 'dropdown' || e.target.className === "option")
    }
    const options = [
        "XL","L","SM","2SM","2SM/2L/2SM","2SM/XL","2XL","4L","XL/2L","XL/L/2SM","2L/4SM","8SM","3SM","5SM","3L","2L","SM/L"
    ]
    return (
        <div className="dropdown">
            <div className="selected" id="dropdown">{selected ? selected : "موردی را انتخاب کنید"}</div>  
            <div className={`options ${isOpen ? 'visible' : 'invisible'}`}>
                {options.map((layout, index) => (
                    <div
                        key={index}
                        onClick={() => onSelect(layout)}
                    >
                        {layout}
                    </div>
                ))}
            </div>
        </div>
    )
}

Dropdown.propTypes= {
    onSelect: PropTypes.func.isRequired
}

export default Dropdown;