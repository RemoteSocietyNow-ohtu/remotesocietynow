import React, { useContext } from 'react'
import LanguageContext from '../../../Contexts/LanguageContext'

const SendAnswersButton = ({ currentQuestion, setCurrentQuestion }) => {
  const language = useContext(LanguageContext)

  return (
    <div>
      <button 
        className='Laske-button' 
        onClick={() => setCurrentQuestion(currentQuestion + 1)}>{language.buttons.calculate}
      </button>
    </div>
  )
  
}

export default SendAnswersButton