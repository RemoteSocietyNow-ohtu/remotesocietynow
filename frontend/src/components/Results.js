import React from 'react'

const Results = ({ results }) => {

  return (
    <div className='Alexis-Marie'>     
      <p>Työmatkojen CO2-päästöt vuodessa:</p>
      <p>{results.co2 ? results.co2 : '-'} kilogrammaa</p> 
      <p>Etätyöskentelyn tuoma vuosittainen CO2 vähennys:</p>
      <p>{results.co2reduce ? results.co2reduce : '-'} kilogrammaa</p>
    </div>
  )
}

export default Results