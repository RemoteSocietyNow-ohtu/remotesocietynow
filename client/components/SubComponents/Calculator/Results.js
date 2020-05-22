import React, { useState, useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import SliderField from '../../InputFields/SliderField'

const Results = ({ results, answers, setAnwers, setResults, isCompany }) => {
  const language = useContext(LanguageContext)
  const [ sliderValue, setSliderValue ] = useState(0)
 
  const handleRelease = async () => {
    const tempAnswers = {...answers}
    tempAnswers.remoteShare = sliderValue
    tempAnswers.numberOfRemoteworkDays = sliderValue
    setAnwers(tempAnswers)
    if (isCompany) {
      setResults(await questionService.sendAnswersCompany(tempAnswers))
    } else {
      setResults(await questionService.sendAnswersPeople(tempAnswers))
    }    
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