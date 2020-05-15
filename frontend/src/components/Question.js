import React from 'react'
import Field from './Field'

const Question = ({ question, value, setValue }) => {
  return (
    <div className='Question'>
      <div className='Question-separator'></div>
      <h3>{question.name}</h3>
      <Field
        fieldType={question.type}
        options={question.options}
        minValue={question.minValue}
        maxValue={question.maxValue}
        value={value}
        setValue={setValue} />
    </div>
  )
}

export default Question
