import React from 'react'

const QuestionsSidebar = ({ questions }) => {
  return (
    <div>
      {questions.map(question => <p key={question.id}>{question.name}</p>)}
    </div>
  )
}

export default QuestionsSidebar
