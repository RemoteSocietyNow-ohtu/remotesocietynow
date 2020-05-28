import React, { useState, useContext } from 'react'
import LanguageContext from '../../Contexts/LanguageContext'

const CommentField = ({ answers, setAnswers, question }) => {
  const language = useContext(LanguageContext)
  const [ fieldVisible, setFieldVisible ] = useState(false)
  
  return(
    <div>
      <button 
        className="Comment-field-button" 
        onClick={() => setFieldVisible(!fieldVisible)}>
        {language.buttons.leaveComment} {fieldVisible ? '▲' : '▼'}
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