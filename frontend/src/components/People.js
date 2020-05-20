import React, { useEffect, useState, useContext } from 'react'
import questionService from '../services/questionService'
import Questions from './Questions'
import Results from './Results'
import SendAnswersButton from './SendAnswersButton'
import LanguageContext from '../Contexts/LanguageContext'

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

  return (
    <div>
      <div className='Body'>
        <div className='Container'>
          <div className='Spacer-vertical'></div>
          <p className='Box'>{language.headers.people}</p>
          {
            currentQuestion < questions.length ? 
              <Questions 
                questions={questions} 
                answers={answers} 
                setAnwers={setAnwers} 
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
              />
              : 
              <>
                <SendAnswersButton values={answers} setResults={setResults} />          
                <div className='Question-separator'></div>
                <Results results={results} />
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default People
