import React, { useState } from 'react'
import NumberField from './NumberField'
import SliderField from './SliderField'


const Field = ({ name, fieldType, startingValue }) => {
    const [value, setValue] = useState(startingValue)
    const handleValueChange = (event) => setValue(event.target.value)
    if (fieldType === 'field') {
        return <NumberField name={name} handleValueChange={handleValueChange} value={value} />
    }
    if (fieldType === 'slider') {
        return(
            <SliderField name={name} handleValueChange={handleValueChange} value={value} />
        )
    }
}

export default Field