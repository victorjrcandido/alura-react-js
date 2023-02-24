import React from 'react'
import './Lane.css';

const Lane = (props) => {
  return (
    <div className='lane'>
      <label>{props.label}</label>
      <select
        onChange={event => props.aoAlterado(event.target.value)}
        required={props.required}
        value={props.valor}>
        <option value=""></option>
        {props.lanes.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Lane