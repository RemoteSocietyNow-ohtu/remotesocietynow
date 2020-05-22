import React from 'react'

const QuestionSidebarItem = ({ question, answers, questions, currentQuestion, setCurrentQuestion }) => {


  if (questions[currentQuestion] && questions[currentQuestion].identifyingString === question.identifyingString) {
    return (
      <>
        <p className='QuestionSidebar-item' key={question.identifyingString} onClick={() => setCurrentQuestion(question.number)}><b>{question.name} <br></br> {answers[question.identifyingString]}</b></p>
      </>
    )
  }
  if (answers[question.identifyingString] === '' || answers[question.identifyingString] === undefined) {
    return (
      <>
        <p className='QuestionSidebar-item' key={question.identifyingString}  onClick={() => setCurrentQuestion(question.number)}>{question.name} <br></br> - </p>
      </>
    )
  }
  return (
    <>
      <p className='QuestionSidebar-item' key={question.identifyingString}  onClick={() => setCurrentQuestion(question.number)}>{question.name} <br></br> {answers[question.identifyingString]}</p>
    </>
  )
}

export default QuestionSidebarItem
