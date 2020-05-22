import React, { useState, useContext, useEffect } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import SliderField from '../../InputFields/SliderField'

const Results = ({ results, answers, setAnwers, setResults, isCompany }) => {
  const language = useContext(LanguageContext)
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ sliderValue, setSliderValue ] = useState(0)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      setError(false)
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
    fetchResults()
  },[answers])

  if(loading === true) return <p>{language.actions.sending}</p>

  if(error === true) return <p>{language.errors.errorSendingAnswers}</p>

  const handleRelease = async () => {
    const tempAnswers = {...answers}    
    if (isCompany) {
      tempAnswers.remoteShare = sliderValue      
    } else {
      tempAnswers.numberOfRemoteworkDays = sliderValue     
    }    
    setAnwers(tempAnswers)
  }

  return (
    <div className='Container'>
      <div className='Results'>
        {
          results.map(result => 
            <div key={result.title}>
              <p >{result.title}</p>
              <p>{result.value} {result.unit}</p>
            </div>
          )
        }
        {isCompany ?
          <h4>{language.headers.workDoneRemotelyPercent}</h4>
          : <h4>{language.headers.workDoneRemotelyDays}</h4>
        }
        <SliderField 
          handleValueChange={(event) => setSliderValue(event.target.value)} 
          handleRelease={handleRelease}
          value={sliderValue}
          minValue={0}
          maxValue={isCompany ? 100 : 7}
          unit={isCompany ? '%' : ''}
        />
      </div>
    </div>
  )
}
  
export default Results