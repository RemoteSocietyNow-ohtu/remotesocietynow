import React, { useState, useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import SliderField from '../../InputFields/SliderField'

const Results = ({ results, answers, setAnwers, setResults }) => {
  const language = useContext(LanguageContext)
  const [ sliderValue, setSliderValue ] = useState(30)
 
  const handleRelease = async () => {
    const tempAnswers = {...answers}
    tempAnswers.remoteShare = sliderValue
    setAnwers(tempAnswers)
    console.log(answers)
    setResults(await questionService.sendAnswersCompany(tempAnswers))
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
        <h4>{language.headers.workDoneRemotely}</h4>
        <SliderField 
          handleValueChange={(event) => setSliderValue(event.target.value)} 
          handleRelease={handleRelease}
          value={sliderValue}
          minValue={0}
          maxValue={100}
          unit='%'
        />
      </div>
    </div>
  )
}
  
export default Results