import React from 'react'

const TicksSlider = ({ width }) => {

  return (
    <table style={{marginLeft: '3%'}}>
      <tbody>
        <tr>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td style={{width:width}}>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
          <td>
            <div className='Calculator-sliderfield-tick'></div>
          </td>
        </tr>
      </tbody>
    </table>)
}

export default TicksSlider