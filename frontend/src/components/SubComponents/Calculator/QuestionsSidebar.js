import React from 'react'
import QuestionSidebarItem from './QuestionSidebarItem'

const QuestionsSidebar = ({ questions, answers, currentQuestion, setCurrentQuestion }) => {

  return (
    <div>
      {questions.map(question => <QuestionSidebarItem question={question}
        questions={questions} answers={answers} currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion} />)}
    </div>
  )
}

export default QuestionsSidebar
