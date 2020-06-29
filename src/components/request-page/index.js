import React from 'react'
import InputField from '../reusables/InputField'
import TextArea from '../reusables/TextAreaField'
import RoundCornerButton from '../reusables/RoundCornerButton'
import RounderCornerButton from '../reusables/RoundCornerButton'
import delivery from '../reusables/delivery.jpg'
import './style.scss'
import Picturewall from '../picture-wall'

const Index = () => {
    return (
        <div className='form-parent'>
            <div className='form-holder'>
                <h1>What can we send for you today ? </h1>
                <InputField placeholder="Full name" width={'500px'} />
                <InputField placeholder="Mobile number" width={'500px'} />
                <InputField placeholder="Email" width={'500px'} />
                <InputField placeholder="From (Origin*)" width={'500px'} />
                <InputField placeholder="To (destination) *" width={'500px'} />
                <TextArea placeholder='Additional information' width={'500px'} />
                <Picturewall />
                <RounderCornerButton title='Send' />
                <div className='terms'>
                    <p>By proceeding, I agree to **company's name** Terms of Use and acknowledge that I have read the Privacy Policy.</p>
                  
                    <p>I also agree that **company name** or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes</p>

                </div>
            </div>
            <div className='image-holder'>
                <div className='fainted' >
                    <h1>Everything you want to send</h1>
                </div>
                <img src={delivery} />
            </div>
        </div>
    )
}
export default Index;