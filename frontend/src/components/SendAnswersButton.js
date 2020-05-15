import React, { useState } from 'react'
import questionService from '../services/questionService'

const SendAnswersButton = ({ values, setResults }) => {
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

  if(loading === true) return <button disabled>Lähetetään...</button>

  if(error === true) return <p>Vastausten lähetyksessä tapahtui virhe.</p>

  return (
    <div>
      <button onClick={sendAnswers}>Laske</button>
    </div>
  )
}

export default SendAnswersButton