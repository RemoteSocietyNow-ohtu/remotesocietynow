import React, { useState, useContext, useEffect } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import SliderField from '../../InputFields/SliderField'
import CountUp from 'react-countup'
import ResultBar from './ResultBar'

const Results = ({ results, answers, setAnwers, setResults, isCompany }) => {
  const language = useContext(LanguageContext)
  const [ error, setError ] = useState(false)
  const [ sliderValue, setSliderValue ] = useState(0)

  // Fetch results from backend based on answers. Triggered when answers changes.
  // Sets results based on response 
  useEffect(() => {
    const fetchResults = async () => {
      if(answers.remoteShare) {
        setSliderValue(answers.remoteShare)
      }
      if(answers.numberOfRemoteworkDays) {
        setSliderValue(answers.numberOfRemoteworkDays)
      }
      setError(false)
      try {
        let response
        if (isCompany) {
          response = await questionService.sendAnswersCompanyCalculationOnly(answers)
        } else {
          response = await questionService.sendAnswersPeopleCalculationOnly(answers)
        }
        setResults(response)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }
    fetchResults()
  },[answers])
  
  // Check if there was an error fetching results
  if(error === true) return <p>{language.errors.errorSendingAnswers}</p>

  // Change answers.remoteShare based on slider. 
  // This will cause component to rerender and fetchResults to run
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
    <div className='Container' style={{ animation:'none' }}>
      <div className='Calculator-results-container'>
        {
          results.map(result => 
            <div key={result.title}>
              <p >{result.title}</p>
              <ResultBar width={50} percent={result.percent} type={result.bartype} />                 
              <p><CountUp duration={.8} end={result.value ? result.value : 0} /> {result.unit}</p>
            </div>
          )
        }
        {isCompany ?
          <h4>{language.headers.workDoneRemotelyPercent}</h4> // If this is results for a company use percents
          : <h4>{language.headers.workDoneRemotelyDays}</h4>
        }
        <SliderField 
          handleValueChange={(event) => setSliderValue(event.target.value)} 
          handleRelease={handleRelease}
          value={sliderValue}
          minValue={0}
          maxValue={isCompany ? 100 : 7}
          unit={isCompany ? '%' : ''} // If this is results for a company use percents
        />
      </div>
    </div>
  )
}
  
export default Results