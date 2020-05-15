import React, { useState } from 'react'

const Results = () => {
  const [result, setResult] = useState('Ja laskun tulos on......')

  return (
    <div>
      <button onClick={() => setResult('1+1=2')}>Laske</button>
      <p>{result}</p>
    </div>
  )
}

export default Results