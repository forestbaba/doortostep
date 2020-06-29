import React from 'react'
import './style.scss'

const TextAreaField = ({ placeholder, name, onChange, width }) => {
    return (
        <div className='input-field-container'>
            <textarea placeholder={placeholder}
                name={name} onChange={onChange}
                style={{ width: width }}
            />
        </div>
    )
}
export default TextAreaField;