import React from 'react'
import Field from './Field'

const Question = ({ question, value, setValue }) => {
  return (
    <div className='Question'>
      <div className='Question-separator'></div>
      <p>{question.name}</p>
      <Field
        fieldType={question.type}
        options={question.options}
        minValue={question.minValue}
        maxValue={question.maxValue}
        unit={question.unit}
        value={value}
        setValue={setValue} />
    </div>
  )
}

export default Question
