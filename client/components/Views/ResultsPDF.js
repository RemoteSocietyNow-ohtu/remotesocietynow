import React, {useContext} from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import ResultsPdfDocument from '../SubComponents/ResultsPdfDocument'
import LanguageContext from '../../Contexts/LanguageContext'
/*
const testResults = [
  {
    title: 'Total money saved per year',
    value: 1680,
    unit: '€',
    bartype: 'greenbar',
    percent: 0.28
  },
  {
    title: 'Total yearly expenses',
    value: 4320,
    unit: '€',
    bartype: 'redbar',
    percent: 0.72
  },
  {
    title: 'Total yearly co2 reductions',
    value: 74.59,
    unit: 'kg',
    bartype: 'nobar'
  }
]
*/
const testPeopleResults = [
  {
    title: 'Annual commute and office related CO2 emissions',
    value: 176.8,
    unit: 'kg',
    bartype: 'redbar',
    percent: 0.8
  },
  {
    title: 'Annual CO2 saved by working remotely',
    value: 44.2,
    unit: 'kg',
    bartype: 'greenbar',
    percent: 0.19999999999999996
  },
  {
    title: 'Annual money saved by working remotely',
    value: 216,
    unit: '€',
    bartype: 'nobar',
    percent: 0.19999999999999996
  }
]

const ResultsPDF = ({ questions, answers }) => {
  const language = useContext(LanguageContext) 

  return (
    <>      
      
      <PDFViewer style={{width: '100%', height: '100%' }}>
        <ResultsPdfDocument 
          questions={questions}
          answers={answers}
          results={testPeopleResults}
          language={language}
          amountOfRemoteWork={20}
          isCompany
        />
      </PDFViewer>      
    </>
  )

}

export default ResultsPDF
/*
<PDFDownloadLink document={<ResultsPdfDocument 
        questions={questions}
        answers={answers}
        results={testResults}
        language={language}/>} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}        
      </PDFDownloadLink>
      */