import React, { useContext } from 'react'
import SendAnswersButton from './SendAnswersButton'
import Cookies from 'js-cookie'
import LanguageContext from '@root/client/Contexts/LanguageContext'
import leftArrow from '../../../resources/arrow-left.png'

const SendAnswers = ({ setResults, nextQuestion, previousQuestion, isCompany, answers, login, signUp, Cookies }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='Send-answers-container'>
      <img className='Calculator-arrow-icon' src={leftArrow} onClick={() => previousQuestion()} alt='Back to questions' />
      <h2 className='Send-answers-header'>{language.headers.finishedWithQuestions}</h2>
      {
        Cookies.get('token') 
          ? <p className='Send-answers-paragraph'>{language.content.answersWillBeSaved}</p>
          : <p className='Send-answers-paragraph'>{language.content.ifYouwouldLikeToSavePartOne}
            <a className='Send-answers-link' onClick={signUp} href='#'>{language.headers.signUpHeader}</a> 
            {language.content.or} 
            <a className='Send-answers-link'onClick={login} href='#'>{language.headers.loginHeader}</a> 
            {language.content.ifYouwouldLikeToSavePartTwo}
          </p>
      }
      <SendAnswersButton 
        nextQuestion={nextQuestion}        
        isCompany={isCompany}
        answers={answers} 
        setResults={setResults}
        Cookies={Cookies}
      />      
    </div>
  )
}

export default SendAnswers