import React, { useEffect, useState, useContext } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'
import Results from './Results'
import SendAnswersButton from './SendAnswersButton'
import LanguageContext from '../Contexts/LanguageContext'
import QuestionsSidebar from './QuestionsSidebar'
import LoadingScreen from './LoadingScreen'

const initAnswerValues = questions => {
  return questions.reduce((newObject, question) => {
    return { 
      ...newObject, 
      [question.identifyingString]: question.defaultValue ? question.defaultValue : ' '
    }
  }, {})
}

const People = () => {
  const language = useContext(LanguageContext)
  const [questions, setQuestions] = useState([]) // Questions that are presented to user.
  const [answers, setAnwers] = useState({}) // Values of question fields
  const [results, setResults] = useState({}) // Results that are recieved from backend after sending values
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    questionService.getQuestionsPeople()
      .then(res => {
        setQuestions(res)
        setAnwers(initAnswerValues(res))
      })
  }, [])

  if (Object.keys(answers).length === 0 || questions.length === 0) { 
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }

  return (
    <div>
      <div className='Body'>
        <div className='Container'>
          <div className='Spacer-vertical'></div>
          <p className='Box'>{language.headers.people}</p>
          <div className='Content-companies-left'>
            {
              Object.keys(results).length === 0  ? 
                <Questions 
                  questions={questions} 
                  answers={answers} 
                  setAnwers={setAnwers} 
                  setResults={setResults}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  calculation={'people'}
                />
                : 
                <>
                  <Results results={results} />
                </>
            }
          </div>
          <div className='Content-companies-right'>
            <QuestionsSidebar questions={questions} answers={answers} currentQuestion={currentQuestion} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
