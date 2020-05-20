import React from 'react'
import NumberField from './NumberField'
import SliderField from './SliderField'
import MultipleChoiceField from './MultipleChoiceField'
import TextField from './TextField'

const Field = ({ fieldType, options, value, setValue, minValue, maxValue, unit }) => {
  const handleValueChange = (event) => setValue(event.target.value)
  if (fieldType === 'field') {    
    return ( 
      <NumberField 
        handleValueChange={handleValueChange} 
        value={value} 
        minValue={minValue} 
        maxValue={maxValue}
      />
    )
  } else if (fieldType === 'slider') {
    return (
      <SliderField 
        handleValueChange={handleValueChange} 
        value={value} 
        minValue={minValue} 
        maxValue={maxValue}
        unit={unit}
      />
    )
  } else if (fieldType === 'multipleChoice') {
    return (
      <MultipleChoiceField options={options} handleValueChange={handleValueChange} value={value} />
    )
  } else if (fieldType === 'textField') {
    return (
      <TextField handleValueChange={handleValueChange} value={value} />
    )
  }
  return null
}

export default Field