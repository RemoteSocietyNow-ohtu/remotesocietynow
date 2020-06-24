import React from 'react'

const SavingsDemonstrator = ({results, answers}) => {
    const result = results.find(result => result.bartype === 'greenbar')
    return (
    <div onClick={(event) => event.stopPropagation()} className='Calculator-results-savings-container'>
        <p>By doing remote work on <b>{answers.numberOfRemoteworkDays}</b> days per week, you save <b>{result.value}</b> kg of emissions. This is equal to about: </p>
        <p><b>{Math.floor(result.value/0.155)}</b> kilometers driven in a car</p>
        <p><b>{Math.round(result.value/705 * 10)/10}</b> flights over the Atlantic Ocean</p>
    </div>
    )
}

export default SavingsDemonstrator