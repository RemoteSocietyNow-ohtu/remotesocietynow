import React from 'react'

const Results = ({ results }) => {

  return (
    <div>     
      <p>Työmatkojen CO2-päästöt vuodessa:</p>
      <p>{results.co2 ? results.co2 : '-'} tonnia</p> 
      <p>Etätyöskentelyn tuoma vuosittainen CO2 vähennys:</p>
      <p>{results.co2reduce ? results.co2reduce : '-'} tonnia</p>
    </div>
  )
}

export default Results