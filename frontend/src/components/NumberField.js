import React from 'react'


const NumberField = ({ name, handleValueChange, value}) => {
    return(
        <div>
            <p>{name}</p>
            <input
                type="number"
                value={value}
                onChange={handleValueChange}
                id="valueField"
            />
            <p>{value}</p>
       </div>
        )  
}

export default NumberField