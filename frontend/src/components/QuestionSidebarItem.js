import React from 'react'

const QuestionSidebarItem = ({ question, answers, questions, currentQuestion }) => {

  if (questions[currentQuestion].identifyingString === question.identifyingString) {
    return (
      <>
        <p key={question.identifyingString}><b>{question.name} <br></br> - {answers[question.identifyingString]}</b></p>
      </>
    )
  }
  return (
    <>
      <p key={question.identifyingString}>{question.name} <br></br> - {answers[question.identifyingString]}</p>
    </>
  )
}

export default QuestionSidebarItem
