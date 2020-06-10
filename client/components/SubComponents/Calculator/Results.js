import React, { useState, useContext, useEffect } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'
import questionService from '../../../services/questionService'
import SliderField from '../../InputFields/SliderField'
import CountUp from 'react-countup'
import ResultBar from './ResultBar'

import pollutionIcon from '../../../resources/pollution-icon.png'
import co2SavedIcon from '../../../resources/co2-saved-icon.png'
import NewsletterBox from '../Newsletter/NewsletterBox'

import yourNewsletterIcon from '../../../resources/mail-icon-white.png'
import moneySavedIcon from '../../../resources/money-saved-icon.png'
import moneySpentIcon from '../../../resources/money-spent-icon.png'

const Results = ({ results, answers, setAnwers, setResults, isCompany }) => {
  const language = useContext(LanguageContext)
  const [error, setError] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [newsletterOpen, setNewsletterOpen] = useState(false)

  // Fetch results from backend based on answers. Triggered when answers changes.
  // Sets results based on response 
  useEffect(() => {
    const fetchResults = async () => {
      if (answers.remoteShare) {
        setSliderValue(answers.remoteShare)
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
      tempAnswers.remoteShare = sliderValue
    } else {
      tempAnswers.numberOfRemoteworkDays = sliderValue
    }
    setAnwers(tempAnswers)
  }

  return (
    <div style={{ animation: 'none' }}>
      <div className='Calculator-results-container'>
        <div className='Calculator-results-left'>
          <h1>Your Results</h1>
          {
            results.map(result =>
              <div key={result.title}>
                <div>
                  <div className='Calculator-results-money-inline'>
                    {!isCompany && result.bartype === 'greenbar' && <img className='Calculator-resultbar-icon' src={co2SavedIcon} alt='Pollution icon' />}
                    {!isCompany && result.bartype === 'redbar' && <img className='Calculator-resultbar-icon' src={pollutionIcon} alt='Pollution icon' />}
                    {isCompany && result.bartype === 'greenbar' && <img className='Calculator-resultbar-icon' src={moneySavedIcon} alt='Money saved icon' />}
                    {isCompany && result.bartype === 'redbar' && <img className='Calculator-resultbar-icon' src={moneySpentIcon} alt='Money spent icon' />}
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
      
      <div className='Calculator-results-bottom-navigation-bar'>
        <p>We at RemoteSocietyNow are committed to work for better environment and to help you save money.</p>        
        <div className='Calculator-results-bottom-navigation-bar-contacts'>
          <p>Connect with us: </p>
          <a className='Calculator-results-newsletter-button' onClick={() => setNewsletterOpen(true)}><img className='Main-bottom-bar-icon' src={yourNewsletterIcon} />{language.headers.subscribeToOurNewsletter}</a>
          <a className='Calculator-results-newsletter-button'>Contact by Email</a>
        </div>
        
      </div>      
      <NewsletterBox open={newsletterOpen} setOpen={setNewsletterOpen}/>
    </div>
  )
}

export default Results