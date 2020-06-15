import React, { useContext } from 'react'
import SendAnswersButton from '../SubComponents/Calculator/SendAnswersButton'
import Cookies from 'js-cookie'
import LanguageContext from '@root/client/Contexts/LanguageContext'

const SendAnswers = ({ setResults, nextQuestion, isCompany, answers, login, signUp, success }) => {
  const language = useContext(LanguageContext)

  return (
    <div className='Send-answers-container'>
      {success != '' && <p className='Success'>{language.success.loggedIn}</p>}
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
      />      
    </div>
  )
}

export default SendAnswers