import React, { useState } from 'react'
import questionService from '../services/questionService'

const Results = ({ values }) => {
  const [results, setResults] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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

  if (loading === true) return <p>Uploading aswers</p>

  if (error === true) return <p>Error uploading answers</p>

  return (
    <div>
      <button onClick={sendAnswers}>Laske</button>
      {results !== '' && <div>
        <h3>Tulokset</h3>
        <p>CO2 vuodessa: {results.result}</p>
        <p>Vuosittainen CO2 vähennys: </p>
        <p>Vuosittain säästetty summa: </p>
      </div>}
    </div>
  )
}

export default Results