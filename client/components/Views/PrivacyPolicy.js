import React, { useContext, useState, useEffect } from 'react'
import languageContext from '../../Contexts/LanguageContext'
import { Document, Page } from 'react-pdf'
import privacyPolicy from '../../resources/Privacy-Policy.pdf'
import arrowRight from '../../resources/arrow-right.png'
import arrowLeft from '../../resources/arrow-left.png'

const PrivacyPolicy = ({ setAcceptPrivacyPolicy, setBody }) => {

  const language = useContext(languageContext)
  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(0)

  const nextPage = () => {
    if (page < pages - 1) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const handleClick = () => {
    setAcceptPrivacyPolicy(true)
    setBody('main')
  }

  return (
    <div className='Container'>
      <h4 className='Heading'>{language.headers.privacyPolicy}</h4>
      <div className='PrivacyPolicy-center'>
        <div className='PDF'>
          <Document file={privacyPolicy} onLoadSuccess={(pdf) => setPages(pdf.numPages)}>
            <Page pageIndex={page} />
          </Document>
        </div>
      </div>
      <div className='PrivacyPolicy-left'>
        {page > 0 && <img className='Arrow-icon' src={arrowLeft} alt='previous page' onClick={() => previousPage()} />}
      </div>
      <div className='PrivacyPolicy-right'>
        {page < pages - 1 && <img className='Arrow-icon' src={arrowRight} alt='next page' onClick={() => nextPage()} />}
      </div>
      <button className='Button-accept-privacy-policy' onClick={() => handleClick()}>Accept</button>
    </div>
  )
}

export default PrivacyPolicy
