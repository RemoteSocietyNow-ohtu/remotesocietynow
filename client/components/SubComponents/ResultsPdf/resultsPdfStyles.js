import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
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
  },
  contactInfoSection: {
    backgroundColor: '#cae8d5'
  },
  contactInfoHeader: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  contactInfoParagraph: {
    marginTop: 5
  },
  resultBarContainer: {
    flexDirection:'row', 
    alignItems: 'center'
  }
})
