import React from 'react'

const SliderField = ({ handleValueChange, handleRelease, value, minValue, maxValue, unit }) => {
  const width = {
    width:'14.14%',
    padding: '0'
  }
  
  return(
    <div>
      <div className='Calculator-sliderfield-container'>
        <input
          type="range" 
          min={minValue} 
          max={maxValue}
          onChange={handleValueChange}  
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}    
          onKeyUp={handleRelease}
          value={value}
          className='Calculator-sliderfield'
        />
        <table style={{marginLeft: '3%'}}>
          <tbody>
            <tr>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td style={width}>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
              <td>
                <div className='Calculator-sliderfield-tick'></div>
              </td>
            </tr>
          </tbody>
        </table>
        <p className='Calculator-sliderfield-label'>{value} {unit}</p>
      </div>
    </div>
  )
}

export default SliderField