import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, Image, Font } from '@react-pdf/renderer'
import mailConfig from '../../../../config/mailConfig'
import { styles } from './resultsPdfStyles'

import moneySpentIcon from '../../../resources/money-spent-icon-black.png'
import moneySavedIcon from '../../../resources/money-saved-icon-black.png'
import co2SavedIcon from '../../../resources/co2-saved-icon-black.png'
import pollutionIcon from '../../../resources/pollution-icon-black.png'
import logoImage from '../../../resources/logo512.png'
import atIcon from '../../../resources/at-white.png'
import timeIcon from '../../../resources/time-icon-black.png'

Font.register({
  family: 'sans',
  src: 'https://fonts.gstatic.com/s/ptsans/v8/UFoEz2uiuMypUGZL1NKoeg.ttf',
})

Font.register({
  family: 'serif',
  src: 'https://fonts.gstatic.com/s/ptserif/v8/sAo427rn3-QL9sWCbMZXhA.ttf',
})

const getColor = (bartype) => {
  if (bartype === 'redbar') return 'red'
  else if (bartype === 'greenbar') return 'green'
  else return null
}

const Heading = ({ language }) => {
  return (
    <View>
      <View style={styles.headerBar}>
        <Image style={styles.logo} src={logoImage}></Image>      
        <Text>{window.location.hostname}</Text>         
      </View>
      <View style={styles.section}>
        <Text style={styles.smalltext}>{language.content.thisPdfWasGenerated}</Text>
        <Text style={styles.smalltext}>{language.content.lead}</Text>
      </View>
    </View>
  )
}

const QuestionsAndUserAnswers = ({ questions, answers, language }) => {
  return (
    <View style={styles.section}>
      <Text>{language.headers.yourAnswers}:</Text>   
      {
        questions.map(q => {
          return (
            <View key={q.identifyingString}>
              <Text style={styles.tinyText}>{q.name} : {answers[q.identifyingString].replace(/\r?\n|\r/g, ', ')}</Text>                         
            </View>
          )
        })
      }       
    </View>
  )
}

const Results = ({ results, amountOfRemoteWork, isCompany, language }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>{language.headers.yourResults}</Text>
      { isCompany 
        ? <Text>% {language.headers.workDoneRemotelyPercent}: {amountOfRemoteWork} </Text>
        : <Text>{language.headers.workDoneRemotelyDays}: {amountOfRemoteWork}</Text>
      }
      {
        results.map(result => {
          return (
            <View key={result.title}>
              <View style={styles.resultBarContainer}>
                {isCompany && result.bartype === 'greenbar' && <Image style={styles.icon} src={moneySavedIcon}></Image>}
                {isCompany && result.bartype === 'redbar' && <Image style={styles.icon} src={moneySpentIcon}></Image>}
                {isCompany && result.bartype === 'nobar' && <Image style={styles.icon} src={co2SavedIcon}></Image>}
                {!isCompany && result.bartype === 'greenbar' && <Image style={styles.icon} src={co2SavedIcon}></Image>}
                {!isCompany && result.bartype === 'redbar' && <Image style={styles.icon} src={pollutionIcon}></Image>}
                {!isCompany && result.bartype === 'nobar' && <Image style={styles.icon} src={moneySavedIcon}></Image>}
                {!isCompany && result.bartype === 'timebar' && <Image style={styles.icon} src={timeIcon}></Image>}
                <Text>{result.title}</Text>
                <Text style={styles.bigText}>{result.value} {result.unit}</Text>
              </View>
              {
                (result.bartype === 'redbar' || result.bartype === 'greenbar') &&
                <View style={styles.bar} >
                  <View style={[
                    styles.bar,
                    {
                      width: (result.percent ? (result.percent*100) : 0) + '%',
                      backgroundColor: getColor(result.bartype)
                    }]}>
                  </View>
                </View>
              }   
              <View style={styles.divider}></View>
            </View>                
          )
        })
      }
    </View>
  )
}

const ContactInfo = ({ language }) => {
  return (
    <View style={[styles.section, styles.contactInfoSection ]}>
      <View style={styles.contactInfoHeader}>
        <Image style={styles.icon} src={atIcon}></Image>
        <Text style={styles.header2}>{language.headers.connectWithUs}</Text>
      </View>          
      <View style={styles.contactInfoParagraph}>
        <Text>{language.content.weAreCommitted}</Text>
      </View>
      <View style={styles.contactInfoParagraph}>
        <Text>{mailConfig.CONTACT_MAIL}</Text>
        <Text>{window.location.hostname}</Text>
      </View>          
    </View>
  )
}

const ResultsPdfDocument = ({ language, questions, answers, results, isCompany }) => { 
  const [ amountOfRemoteWork, setAmountOfRemoteWork ] = useState()

  useEffect(() => {
    if (answers.shareOfRemoteWork) {
      setAmountOfRemoteWork(answers.shareOfRemoteWork)
    }
    if (answers.numberOfRemoteworkDays) {
      setAmountOfRemoteWork(answers.numberOfRemoteworkDays)
    }
  }, [answers])

  return (
    <Document>
      <Page size="A4" style={styles.page}>      
        <Heading language={language} />
        <Results results={results} amountOfRemoteWork={amountOfRemoteWork} isCompany={isCompany} language={language} />
        <QuestionsAndUserAnswers questions={questions} answers={answers} language={language} />
        <ContactInfo language={language} />
      </Page>
    </Document>
  )
}

export default ResultsPdfDocument