import React, { useState, useContext } from 'react'
import questionService from '../../../services/questionService'
import LanguageContext from '../../../Contexts/LanguageContext'

const SendAnswersButton = ({ answers, setResults, isCompany }) => {
  const language = useContext(LanguageContext)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const sendAnswersPeople = async (event) => {
    event.preventDefault()    
    setLoading(true)
    try {
      let response
      if (isCompany) {
        response = await questionService.sendAnswersCompany(answers)
      } else {
        response = await questionService.sendAnswersPeople(answers)
      }
      setResults(response)
      setLoading(false)      
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }    
  }

  if(loading === true) return <button disabled>{language.actions.sending}</button>

  if(error === true) return <p>{language.errors.errorSendingAnswers}</p>
  return (
    <div>
      <button className='Laske-button' onClick={sendAnswersPeople}>{language.buttons.calculate}</button>
    </div>
  )
  
}

export default SendAnswersButton