import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import Field from '../../InputFields/Field'

const Question = ({ question, answers, setAnwers }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='Question'>
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
      <p>{language.headers.additionalInformation}</p>
      <Field 
        fieldType='textField'
        value={answers[question.identifyingString + 'Open']}
        setValue={(value) => setAnwers({...answers, [question.identifyingString + 'Open']: value})}
      />
    </div>
  )
}

export default Question
