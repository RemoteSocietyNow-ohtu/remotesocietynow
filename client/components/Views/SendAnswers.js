import React from 'react'
import SendAnswersButton from '../SubComponents/Calculator/SendAnswersButton'

const SendAnswers = ({ setResults, nextQuestion, toFirstQuestion, isCompany, answers, login, signUp }) => {
  return (
    <div className='Send-answers-container'>
      <h2 className='Send-answers-header'>Great! We are finished with the questions.</h2>
      <p className='Send-answers-paragraph'>If you would like to save your answers and results in order to get back to them later, please take a step to &nbsp;
        <a className='Send-answers-link' onClick={signUp} href='#'>Sign up</a>&nbsp; 
        or 
        &nbsp;<a className='Send-answers-link'onClick={login} href='#'>Login</a> &nbsp;
        before calculating your results. You can also continue without logging in.
      </p>   
      
      <SendAnswersButton 
        nextQuestion={nextQuestion}        
        isCompany={isCompany}
        answers={answers} 
        setResults={setResults} 
      />
      <p className='Send-answers-paragraph'>
        <a className='Send-answers-link' onClick={toFirstQuestion} >Get back to questions</a>
      </p>
    </div>
  )
}

export default SendAnswers