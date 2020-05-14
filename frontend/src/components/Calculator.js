import React, { useState } from 'react'
import Field from './Field'

const Calculator = (props) => {
    const [saved, setSaved] = useState(0)
    const [value0, setValue0] = useState(5)
    const [value1, setValue1] = useState(15)
    const [value2, setValue2] = useState(20)
    const fields = [
        {
            name: 'Fuel consumption l/100km',
            fieldType: 'field',
            fuelPrice: 1.5
        },
        {
            name: 'Commute distance km',
            fieldType: 'field'
        },
        {
            name: '% of work done remotely',
            fieldType: 'slider'
        }
    ]

    return(
        <>
        <Field name={fields[0].name} fieldType={fields[0].fieldType} value={value0} setValue={setValue0} />
        <Field name={fields[1].name} fieldType={fields[1].fieldType} value={value1} setValue={setValue1} />
        <Field name={fields[2].name} fieldType={fields[2].fieldType} value={value2} setValue={setValue2} />

        <button onClick={() => setSaved(fields[0].fuelPrice*value0*value1*(1-value2/100)/100)}>Calculate savings</button>
        <div>
            Money saved per Day: {saved}
        </div>
        <div>
            Money saved per Month: {saved*30}
        </div>
        </>
    )
}

export default Calculator