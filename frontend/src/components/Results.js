import React from 'react'


const Results = ({ results }) => {
  console.log(results)
  return (
    <div className='Container'>
      <div className='Results'>
        {
          results.map(result => 
            <div key={result.title}>
              <p >{result.title}</p>
              <p>{result.value} {result.unit}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
  
export default Results