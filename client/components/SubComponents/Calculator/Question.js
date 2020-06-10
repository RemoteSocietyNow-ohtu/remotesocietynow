import React from 'react'
import Field from '../../InputFields/Field'
import CommentField from 'Components/InputFields/CommentField'

const Question = ({ question, answers, setAnwers, nextQuestion, skipQuestion }) => {

  return (
    <div className='Calculator-question'>
      <h2 className='Calculator-question-header'>{question.name}</h2>
      <Field
        fieldType={question.type}
        options={question.options}
        minValue={question.minValue}
        maxValue={question.maxValue}
        unit={question.unit}
        placeholder={question.placeholder}
        value={answers[question.identifyingString]}
        setValue={(value) => setAnwers({...answers, [question.identifyingString]: value})} 
        nextQuestion={nextQuestion}
        skipQuestion={skipQuestion}
      />
      <CommentField answers={answers} setAnswers={setAnwers} question={question} />
      
    </div>
  )
}

export default Question
