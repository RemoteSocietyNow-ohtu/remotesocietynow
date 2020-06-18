import React from 'react'
import { Page, Text, View, Document, Image, StyleSheet, Font  } from '@react-pdf/renderer'
import mailConfig from '../../../config/mailConfig'

import moneySpentIcon from '../../resources/money-spent-icon-black.png'
import moneySavedIcon from '../../resources/money-saved-icon-black.png'
import co2SavedIcon from '../../resources/co2-saved-icon-black.png'
import pollutionIcon from '../../resources/pollution-icon-black.png'
import logoImage from '../../resources/logo512.png'

Font.register({
  family: 'sans',
  src: 'http://fonts.gstatic.com/s/ptsans/v8/UFoEz2uiuMypUGZL1NKoeg.ttf',
})

Font.register({
  family: 'serif',
  src: 'http://fonts.gstatic.com/s/ptserif/v8/sAo427rn3-QL9sWCbMZXhA.ttf',
})


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'serif',
    fontSize: '12px',
    padding: 15
  },
  header: {
    fontSize: '32px',
    fontFamily: 'sans',
    color: '#204051',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop:0
  },
  header2: {
    fontSize: '18px',
    fontFamily: 'sans',
    color: '#204051',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  section: {    
    padding: 10,
    flexGrow: 1
  },
  smalltext: {
    fontSize: '8px',
    marginBottom: 4
  },
  tinyText: {
    fontSize: '6px'
  },
  bigText: {
    fontSize: '48px',
    fontFamily: 'sans',
    color: 'gray',
    flexGrow: 2,
    textAlign: 'right',
    paddingRight: 30
  },
  bar: {
    width: '40%',
    height: '20px',
    backgroundColor: 'lightgray',
    borderRadius: '4px'
  },
  divider: {
    flexGrow: 1,
    height: '1px',
    backgroundColor: '#84a9ac',
    margin: 10
  },
  icon: {
    height: '30px',  
    width: '30px', 
    marginRight: 10
  },
  logo: {
    width: '30%'
  },
  headerBar: {
    backgroundColor: '#204051',
    height: '50px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    color: 'white' 
  }
})

const getColor = (bartype) => {
  if (bartype === 'redbar') return 'red'
  else if (bartype === 'greenbar') return 'green'
  else return null
}

const ResultsPdfDocument = ({ language, questions, answers, results, isCompany, amountOfRemoteWork }) => { 
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>      
        <View style={styles.headerBar}>
          <Image style={styles.logo} src={logoImage}></Image>      
          <Text>{window.location.hostname}</Text>         
        </View>
        <View style={styles.section}>
          <Text style={styles.smalltext}>{language.content.thisPdfWasGenerated}</Text>
          <Text style={styles.smalltext}>{language.content.lead}</Text>
        </View>  
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
                  <View style={{ flexDirection:'row', alignItems: 'center' }}>
                    {isCompany && result.bartype === 'greenbar' && <Image style={styles.icon} src={moneySavedIcon}></Image>}
                    {isCompany && result.bartype === 'redbar' && <Image style={styles.icon} src={moneySpentIcon}></Image>}
                    {isCompany && result.bartype === 'nobar' && <Image style={styles.icon} src={co2SavedIcon}></Image>}
                    {!isCompany && result.bartype === 'greenbar' && <Image style={styles.icon} src={co2SavedIcon}></Image>}
                    {!isCompany && result.bartype === 'redbar' && <Image style={styles.icon} src={pollutionIcon}></Image>}
                    {!isCompany && result.bartype === 'nobar' && <Image style={styles.icon} src={moneySavedIcon}></Image>}
                    <Text>{result.title}</Text>
                    <Text style={styles.bigText}>{result.value} {result.unit}</Text>
                  </View>
                  {
                    result.bartype !== 'nobar' &&
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
        <View style={[styles.section, {backgroundColor: '#cae8d5'}]}>
          <Text style={styles.header2}>{language.headers.connectWithUs}</Text>
          <View style={{ marginTop: 5 }}>
            <Text>{language.content.weAreCommitted}</Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text>{mailConfig.CONTACT_MAIL}</Text>
            <Text>{window.location.hostname}</Text>
          </View>
          
        </View>
      </Page>
    </Document>
  )
}

export default ResultsPdfDocument