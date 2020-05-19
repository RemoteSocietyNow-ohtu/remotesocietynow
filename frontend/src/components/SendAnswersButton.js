import React, { useState, useContext } from 'react'
import questionService from '../services/questionService'
import LanguageContext from '../Contexts/LanguageContext'

const SendAnswersButton = ({ values, setResults }) => {
  const language = useContext(LanguageContext)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const sendAnswers = async (event) => {
    event.preventDefault()    
    setLoading(true)
    try {
      const response = await questionService.sendAnswers(values)
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
      <button className='Laske-button' onClick={sendAnswers}>{language.buttons.calculate}</button>
    </div>
  )
}

export default SendAnswersButton