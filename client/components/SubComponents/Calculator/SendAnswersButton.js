import React, { useContext, useState } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import LoadingScreen from '../../Views/LoadingScreen'

const SendAnswersButton = ({ setResults, nextQuestion, isCompany, answers, saveToDatabase }) => {
  const language = useContext(LanguageContext)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
 
  const handleClick = async () => {
    setLoading(true)
    setError(false)
    try {
      let response
      if (isCompany) {
        saveToDatabase ? response = await questionService.sendAnswersCompany(answers) : response = await questionService.sendAnswersCompanyCalculationOnly(answers)
      } else {
        saveToDatabase ? response = await questionService.sendAnswersPeople(answers) : response = await questionService.sendAnswersPeopleCalculationOnly(answers)
      }
      setResults(response)
      setLoading(false) 
      nextQuestion()
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }    
  }

  // Check if still fetching results
  if(loading === true) return <LoadingScreen />

  return (
    <div>
      {error === true && <p className='Error'>{language.errors.errorSendingAnswers}</p>}
      <button 
        className='Calculator-calculate-button' 
        onClick={handleClick}>
        {language.buttons.calculate}
      </button>
    </div>
  )
  
}

export default SendAnswersButton