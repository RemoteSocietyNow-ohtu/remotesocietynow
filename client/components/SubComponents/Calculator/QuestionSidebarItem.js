import React from 'react'

const QuestionSidebarItem = ({ question, answers, questions, currentQuestion, setCurrentQuestion }) => {

  if (questions[currentQuestion].identifyingString === question.identifyingString) {
    return (
      <>
        <p key={question.identifyingString} onClick={() => setCurrentQuestion(question.number)}><b>{question.name} <br></br> - {answers[question.identifyingString]}</b></p>
      </>
    )
  }
  return (
    <>
      <p key={question.identifyingString}  onClick={() => setCurrentQuestion(question.number)}>{question.name} <br></br> - {answers[question.identifyingString]}</p>
    </>
  )
}

export default QuestionSidebarItem
