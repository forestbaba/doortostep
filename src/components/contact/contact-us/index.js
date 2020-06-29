import React from 'react'
import InputField from '../../reusables/InputField'
import './style.scss'
import contact from './contact.jpg'
import TextAreaField from '../../reusables/TextAreaField'
import RoundCornerButton from '../../reusables/RoundCornerButton'


const ContactUs = () => {
    return (
        <div className='contact-us'>
            <div className='design'>
                <div className='fainted' />
                {/* <p>Contact us</p> */}
                <img src={contact} />
            </div>
            <div className='form'>
                <InputField placeholder={"Full name"} />
                <InputField placeholder={"Email"} />
                <InputField placeholder={"Mobile Number"} />
                <TextAreaField placeholder={"We are listening........."} />
                <RoundCornerButton title={"Shoot"} />
            </div>
        </div>
    )
}

export default ContactUs;