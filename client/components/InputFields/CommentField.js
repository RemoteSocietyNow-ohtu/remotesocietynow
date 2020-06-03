import React, { useState, useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const CommentField = ({ answers, setAnswers, question }) => {
  const language = useContext(LanguageContext)
  const [ fieldVisible, setFieldVisible ] = useState(false)
  
  return(
    <div>
      <button 
        className="Calculator-feedback-toggle" 
        onClick={() => setFieldVisible(!fieldVisible)}>
        {language.buttons.leaveComment} {fieldVisible ? '▲' : '▼'}
      </button>
      {
        fieldVisible === true &&  
        <>    
          <h4 className='Calculator-feedback-header'>{language.headers.commentFieldHeader}</h4>    
          <textarea
            size="100"
            autoFocus
            className='Calculator-comment-field'
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