import React, { useEffect, useState, useContext } from 'react'
import questionService from '../../../services/questionService'
import Questions from './Questions'
import QuestionsSidebar from './QuestionsSidebar'
import Results from './Results'
import LoadingScreen from '../../Views/LoadingScreen'
import LanguageContext from '@root/client/Contexts/LanguageContext'
import Stepper from './Stepper'

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
  const [ isLoading, setIsLoading ] = useState(true)
  const [ hasErrored, setHasErrored ] = useState(false)
  const language = useContext(LanguageContext)

  //Fetch questions and init question and aswer states
  useEffect(() => {        
    const fetchQuesions = async () => {      
      try {
        let res
        if (isCompany) {
          res = await questionService.getQuestionsCompany()
        } else {
          res = await questionService.getQuestionsPeople()
        }        
        setQuestions(res)
        setAnwers(initAnswerValues(res)) 
        setIsLoading(false)
        setHasErrored(false)     
      } catch (error) {
        setHasErrored(true)
        setIsLoading(false)
        console.log(error)
      }    
    }
    setIsLoading(true)
    setHasErrored(false)
    fetchQuesions()
  }, [isCompany])

  // Return loading screen if question and aswer states are not ready
  if (isLoading) {
    return (
      <div className='Body'>
        <LoadingScreen />
      </div>
    )
  }

  if (hasErrored) {
    return (
      <div className='Body'>
        <p>{language.errors.errorFetchingQuestions}</p>
      </div>
    )
  }

  return (
    <div>
      <div className='Calculator-container'>
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
        {currentQuestion < questions.length && <div className='Calculator-content-right'>
          <QuestionsSidebar questions={questions} answers={answers} currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion} />
        </div>}
        <Stepper questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
      </div>
     
    </div>
  )
}

export default Calculator
