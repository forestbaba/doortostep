import React from 'react'
import './style.scss'

const InputField = ({placeholder, name, onChange, width}) => {
    return (
        <div className='input-field-container'>
            <input placeholder={placeholder} name={name} onChange={onChange} style={{width:width}}/>
        </div>
    )
}
export default InputField;