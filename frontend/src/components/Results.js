import React from 'react'

const Results = ({ results }) => {

  return (
    <div>     
      <p>Työmatkojen CO2-päästöt vuodessa:</p>
      <p>{results.result ? results.result : '-'}</p>
      <p>Etätyöskentelyn tuoma vuosittainen CO2 vähennys:</p>
      <p>-</p>  
    </div>
  )
}

export default Results