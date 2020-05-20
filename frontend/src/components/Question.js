import React from 'react'
import Field from './InputFields/Field'

const Question = ({ question, answers, setAnwers }) => {
  return (
    <div className='Question'>
      <div className='Line-separator-full'></div>
      <p>{question.name}</p>
      <Field
        fieldType={question.type}
        options={question.options}
        minValue={question.minValue}
        maxValue={question.maxValue}
        unit={question.unit}
        value={answers[question.identifyingString]}
        setValue={(value) => setAnwers({...answers, [question.identifyingString]: value})} 
      />
      <Field 
        fieldType='textField'
        value={answers[question.identifyingString + 'Open']}
        setValue={(value) => setAnwers({...answers, [question.identifyingString + 'Open']: value})}
      />
    </div>
  )
}

export default Question
