import React from 'react'
import NumberField from './NumberField'
import SliderField from './SliderField'
import MultipleChoiceField from './MultipleChoiceField'

const Field = ({ fieldType, options, value, setValue }) => {
  const handleValueChange = (event) => setValue(event.target.value)

  if (fieldType === 'field') {    
    return <NumberField handleValueChange={handleValueChange} value={value} />
  } else if (fieldType === 'slider') {
    return(
      <SliderField handleValueChange={handleValueChange} value={value} />
    )
  } else if (fieldType === 'multipleChoice') {
    return(
      <MultipleChoiceField options={options} handleValueChange={handleValueChange} value={value} />
    )
  }
  return null
}

export default Field