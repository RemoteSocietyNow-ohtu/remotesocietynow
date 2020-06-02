import React, { useEffect } from 'react'
import questionService from '../../services/questionService'
import Questions from '../SubComponents/Calculator/Questions'
import QuestionsSidebar from '../SubComponents/Calculator/QuestionsSidebar'
import Results from '../SubComponents/Calculator/Results'
import LoadingScreen from './LoadingScreen'

//answerValues get initial values. It is default value if such is available, otherwise empty string
const initAnswerValues = questions => {
  return questions.reduce((newObject, question) => {
    return {
      ...newObject,
      [question.identifyingString]: question.defaultValue ? question.defaultValue : '',
      [question.identifyingString + 'OpenField']: ''
    }
  }, {})
}

const Calculator = ({ questions, setQuestions, answers, setAnwers, results, setResults, currentQuestion, setCurrentQuestion, isCompany }) => {

  //Fetch questions and init question and aswer states
  useEffect(() => {
    const fetchCompanyQuestions =
    () => questionService.getQuestionsCompany()
      .then(res => {
        setQuestions(res)
        setAnwers(initAnswerValues(res))
      })
    const fetchPeopleQuestions = () => questionService.getQuestionsPeople()
      .then(res => {
        setQuestions(res)
        setAnwers(initAnswerValues(res))
      })
    if (isCompany) {
      fetchCompanyQuestions()
    } else {
      fetchPeopleQuestions()
    }
  }, [isCompany])

  // Return loading screen if question and aswer states are not ready
  if (Object.keys(answers).length === 0 || questions.length === 0) {
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }

  return (
    <div>
      <div className='Container'>
        <div className='Calculator-content-left'>
          {currentQuestion < questions.length ? // If currentQuestion-index is greater than number of questions -> show results instead
            <Questions
              questions={questions}
              answers={answers}
              setAnwers={setAnwers}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              setResults={setResults}
              isCompany={isCompany}
            />
            : <Results 
              results={results}
              setResults={setResults} 
              answers={answers} 
              setAnwers={setAnwers} 
              isCompany={isCompany}
            />
          }
        </div>
        <div className='Calculator-content-right'>
          <QuestionsSidebar questions={questions} answers={answers} currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion} />
        </div>
      </div>
    </div>
  )
}

export default Calculator
