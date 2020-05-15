import React from 'react'
import Question from './Question'

const Questions = ({ questions, values, setValues }) => {
  return (
    <div>
      {questions.map((question) => 
        <Question 
          key={question.name} 
          question={question} 
          value={values[question.name] ? values[question.name] : 0} 
          setValue={(value) => setValues({...values, [question.name]: value})} 
        /> ) }
    </div>
  )
}

export default Questions
