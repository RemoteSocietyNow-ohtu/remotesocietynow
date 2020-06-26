import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import ResultsPdfDocument from '../../components/SubComponents/ResultsPdf/ResultsPdfDocument'

const PDFView = ({ language, questions, answers, results, isCompany }) => {
  return (
    <>
      <PDFViewer width='100%' height='100%'>
        <ResultsPdfDocument 
          language={language}
          questions={questions}
          answers={answers}
          results={results}
          isCompany={isCompany}
        />
      </PDFViewer> 
    </>
  )
}

export default PDFView