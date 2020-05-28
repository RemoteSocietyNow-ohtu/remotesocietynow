import React from 'react'

const CalculatorChoice = ({ setBody }) => {
    return(
        <div className='Container'>
            <div className='Container-choice'>
                <div className='Content-choice-left'>
                    <p>For you</p>
                    <button onClick={() => setBody('people')}>People</button>
                </div>
                <div className='Content-choice-right'>
                    <p>For companies</p>
                    <button onClick={() => setBody('companies')}>Companies</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorChoice