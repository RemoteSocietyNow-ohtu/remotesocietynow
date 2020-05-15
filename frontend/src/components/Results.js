import React from 'react'

const Results = ({ results }) => { 
  return (
    <div>     
      <p>CO2 vuodessa: {results.result}</p>
      <p>Vuosittainen CO2 vähennys: </p>  
    </div>
  )
}

export default Results