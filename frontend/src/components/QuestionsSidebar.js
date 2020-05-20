import React from 'react'
import QuestionSidebarItem from './QuestionSidebarItem'

const QuestionsSidebar = ({ questions, answers, currentQuestion }) => {

  return (
    <div>
      {questions.map(question => <QuestionSidebarItem question={question}
        questions={questions} answers={answers} currentQuestion={currentQuestion} />)}
    </div>
  )
}

export default QuestionsSidebar
