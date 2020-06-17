import React, { useState, useContext, useEffect } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import SliderField from '../../InputFields/SliderField'
import CountUp from 'react-countup'
import ResultBar from './ResultBar'

import pollutionIcon from '../../../resources/pollution-icon.png'
import co2SavedIcon from '../../../resources/co2-saved-icon.png'

import moneySavedIcon from '../../../resources/money-saved-icon.png'
import moneySpentIcon from '../../../resources/money-spent-icon.png'

import arrowLeft from '../../../resources/arrow-left.png'

const Results = ({ results, answers, setAnwers, setResults, isCompany, setCurrentQuestion }) => {
  const language = useContext(LanguageContext)
  const [error, setError] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)

  // Fetch results from backend based on answers. Triggered when answers changes.
  // Sets results based on response 
  useEffect(() => {
    const fetchResults = async () => {
      if (answers.shareOfRemoteWork) {
        setSliderValue(answers.shareOfRemoteWork)
      }
      if (answers.numberOfRemoteworkDays) {
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
  }, [answers])

  // Check if there was an error fetching results
  if (error === true) return <p>{language.errors.errorSendingAnswers}</p>

  // Change answers.remoteShare based on slider. 
  // This will cause component to rerender and fetchResults to run
  const handleRelease = async () => {
    const tempAnswers = { ...answers }
    if (isCompany) {
      tempAnswers.shareOfRemoteWork = sliderValue
    } else {
      tempAnswers.numberOfRemoteworkDays = sliderValue
    }
    setAnwers(tempAnswers)
  }

  return (
    <div className='Calculator-results-container' style={{ animation: 'none' }}>
      <div className='Calculator-results-left'>
      <div className='Results-arrow-icon-div' onClick={() => setBody('main')}>
        <img src={arrowLeft} className='Results-arrow-icon' />
        <a className='Calculator-results-send-answers-link' onClick={() => setCurrentQuestion(0)} >{language.buttons.getBackToQuestions}</a>
      </div>
        <h1>{language.headers.yourResults}</h1>
        {
          results.map(result =>
            <div key={result.title}>
              <div>
                <div className='Calculator-results-money-inline'>
                  {!isCompany && result.bartype === 'greenbar' && <img className='Calculator-resultbar-icon' src={co2SavedIcon} alt='Pollution icon' />}
                  {!isCompany && result.bartype === 'redbar' && <img className='Calculator-resultbar-icon' src={pollutionIcon} alt='Pollution icon' />}
                  {!isCompany && result.bartype === 'nobar' && <img className='Calculator-resultbar-icon' src={moneySavedIcon} alt='Money saved icon' />}
                  {isCompany && result.bartype === 'greenbar' && <img className='Calculator-resultbar-icon' src={moneySavedIcon} alt='Money saved icon' />}
                  {isCompany && result.bartype === 'redbar' && <img className='Calculator-resultbar-icon' src={moneySpentIcon} alt='Money spent icon' />}
                  {isCompany && result.bartype === 'nobar' && <img className='Calculator-resultbar-icon' src={co2SavedIcon} alt='Pollution icon' />}
                  <p className='Calculator-result-countup'><b></b><CountUp duration={.8} end={result.value ? result.value : 0} /> {result.unit}</p>
                </div>
                <p className='Calculator-results-result-title'>{result.title}</p>
              </div>
            </div>
          )
        }
      </div>
      <div className='Calculator-results-divider'></div>
      <div className='Calculator-results-right'>
        {
          results.map(result =>
            <div key={result.bartype} className='Calculator-results-resultbars'>
              {!isCompany && result.bartype === 'greenbar' && <img className='Calculator-resultbar-icon' src={co2SavedIcon} alt='Pollution icon' />}
              {!isCompany && result.bartype === 'redbar' && <img className='Calculator-resultbar-icon' src={pollutionIcon} alt='Pollution icon' />}
              {isCompany && result.bartype === 'greenbar' && <img className='Calculator-resultbar-icon' src={moneySavedIcon} alt='Money saved icon' />}
              {isCompany && result.bartype === 'redbar' && <img className='Calculator-resultbar-icon' src={moneySpentIcon} alt='Money spent icon' />}
              <p></p>
              <ResultBar width={80} percent={result.percent} type={result.bartype} />
            </div>
          )
        }
        <SliderField
          handleValueChange={(event) => setSliderValue(event.target.value)}
          handleRelease={handleRelease}
          value={sliderValue}
          minValue={0}
          maxValue={isCompany ? 100 : 7}
          unit={isCompany ? '%' : ''} // If this is results for a company use percents
        />
        {isCompany ?
          <p className='Calculator-results-slidertext'>{language.headers.workDoneRemotelyPercent}</p> // If this is results for a company use percents
          : <p className='Calculator-results-slidertext'>{language.headers.workDoneRemotelyDays}</p>
        }

      </div>
    </div>
  )
}

export default Results