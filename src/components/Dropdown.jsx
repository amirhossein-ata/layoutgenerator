import React, { useState } from 'react'
import PropTypes from 'prop-types';
 
const Dropdown = ({ onSelect, selected }) => {
    const [isOpen, setIsOpen] = useState(false)
    document.onclick = e => {
        setIsOpen(e.target.id === 'dropdown' || e.target.className === "option")
    }
    const options = [
        "XL","2XL","6XS/SM", "3L/SM/2XS", "XL/2L", "XL/2SM", "L/SM/L/XS/SM/XS","2SM/XL/L", "3L/2SM", "4SM/XL", "6XS/SM"
    ]
    return (
        <div className="dropdown">
            <div className="selected" id="dropdown">
                <div>
                    {selected ? selected : "موردی را انتخاب کنید"}
                </div>
            </div>  
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