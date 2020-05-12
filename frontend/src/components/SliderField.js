import React from 'react'

const SliderField = ({ name, handleValueChange, value }) => {
    return(
        <div>
            <p>{name}</p>
            <input
                type="range" 
                min='0' 
                max='100' 
                onChange={handleValueChange}
                value={value} 
                class='slider' 
            />
            <p>{value}%</p>
        </div>
    )
}

export default SliderField