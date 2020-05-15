import React from 'react'
import Field from './Field'

const Question = ({ question, value, setValue }) => {   
  return (
    <div>
      <h3>{question.name}</h3>         
      <Field 
        fieldType={question.type} 
        options={question.options} 
        value={value} 
        setValue={setValue} />
    </div>
  )
}

export default Question
