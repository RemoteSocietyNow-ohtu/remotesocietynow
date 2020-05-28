import React, { useState, useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'
import plusSign from '../../resources/plus-sign.png'
import minusSign from '../../resources/minus-sign.png'

const CommentField = ({ answers, setAnswers, question }) => {
  const language = useContext(LanguageContext)
  const [ fieldVisible, setFieldVisible ] = useState(false)
  
  return(
    <div>
      <button 
        className="Comment-field-button" 
        onClick={() => setFieldVisible(!fieldVisible)}>
        {language.buttons.leaveComment} {fieldVisible ? <img className='plusminus-icon' src={minusSign} alt=''/> : <img className='plusminus-icon' src={plusSign} alt=''/>}
      </button>
      {
        fieldVisible === true &&  
        <>    
          <p>{language.headers.commentFieldHeader}</p>    
          <textarea
            size="100"
            autoFocus
            className='TextArea-field'
            value={answers[question.identifyingString + 'OpenField']}
            onChange={(event) => setAnswers({...answers, [question.identifyingString + 'OpenField']: event.target.value})}
          >        
          </textarea>   
        </>     
      }
    </div>
  )
}

export default CommentField