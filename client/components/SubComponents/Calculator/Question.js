import React from 'react'
import Field from '../../InputFields/Field'
import CommentField from 'Components/InputFields/CommentField'

const Question = ({ question, answers, setAnwers, nextQuestion }) => {

  return (
    <div className='Calculator-question'>
      <p>{question.name}</p>
      <Field
        fieldType={question.type}
        options={question.options}
        minValue={question.minValue}
        maxValue={question.maxValue}
        unit={question.unit}
        value={answers[question.identifyingString]}
        setValue={(value) => setAnwers({...answers, [question.identifyingString]: value})} 
        nextQuestion={nextQuestion}
      />
      <CommentField answers={answers} setAnswers={setAnwers} question={question} />
      
    </div>
  )
}

export default Question
