import React from 'react'
import NumberField from './NumberField'
import SliderField from './SliderField'
import MultipleChoiceField from './MultipleChoiceField'
import TextField from './TextField'
import TextAreaField from './TextAreaField'

const Field = ({ fieldType, options, value, setValue, minValue, maxValue, placeholder, unit, nextQuestion, skipQuestion }) => {
  const handleValueChange = (event) => setValue(event.target.value)
  if (fieldType === 'number') {    
    return ( 
      <NumberField 
        handleValueChange={handleValueChange} 
        value={value} 
        minValue={minValue} 
        maxValue={maxValue}
        nextQuestion={nextQuestion}
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
      <MultipleChoiceField 
        options={options} 
        handleValueChange={handleValueChange} 
        value={value} 
        nextQuestion={nextQuestion}
        skipQuestion={skipQuestion}
      />
    )
  } else if (fieldType === 'text') {
    return (
      <TextField handleValueChange={handleValueChange} value={value} nextQuestion={nextQuestion}/>
    )
  } else if (fieldType === 'textArea') {
    return (
      <TextAreaField handleValueChange={handleValueChange} value={value} placeholder={placeholder} />
    )
  }
  return null
}

export default Field