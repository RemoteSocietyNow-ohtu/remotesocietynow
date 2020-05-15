import React from 'react'

const Results = ({ results }) => {

  return (
    <div>     
      <p>Työmatkojen CO2-päästöt vuodessa:</p>
      <p>-</p>
      <p>Etätyöskentelyn tuoma vuosittainen CO2 vähennys:</p>
      <p>{results.result ? results.result : '-'}</p>  
    </div>
  )
}

export default Results