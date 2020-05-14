import React from 'react'
import Field from './Field'

const Question = ({ question, value, setValues }) => {  
  return (
    <div>
      <p>{question.name}</p>         
      <Field fieldType={question.type} options={question.options} value={value} setValue={setValues} />
    </div>
  )
}

export default Question
