import React from 'react'

const SavingsDemonstrator = ({results}) => {
  const result = results.find(result => result.bartype === 'greenbar')
  return (
    <div className='Calculator-results-savings-container'>
      <p>This is equal to about {result.value/0.155} kilometers driven in a car.</p>
    </div>
  )
}

export default SavingsDemonstrator