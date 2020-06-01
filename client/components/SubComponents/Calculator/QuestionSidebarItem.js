import React from 'react'

const QuestionSidebarItem = ({ question, answers, questions, currentQuestion, setCurrentQuestion }) => {
  
  //If qustion is multichoice question, don't show value but the corresponding string. 
  const getAnwerString = () => {
    if(question.options && question.options.find(q => q.value === answers[question.identifyingString])) {
      return question.options.find(q => q.value === answers[question.identifyingString]).string
    }
    return answers[question.identifyingString]
  }

  if (questions[currentQuestion] && questions[currentQuestion].identifyingString === question.identifyingString) {
    return (
      <>
        <p className='QuestionSidebar-item' key={question.identifyingString} onClick={() => setCurrentQuestion(question.number)}><b>{question.name} <br></br> {getAnwerString()}</b></p>
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
      <p className='QuestionSidebar-item' key={question.identifyingString}  onClick={() => setCurrentQuestion(question.number)}>{question.name} <br></br> {getAnwerString()}</p>
    </>
  )
}

export default QuestionSidebarItem
