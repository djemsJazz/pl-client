import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { verifyCode } from '../../ApiRequests/User'

const OtpModal = ({ modalOpened, userMail: email, handleUserLogin, closeModal }) => {
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        verifyCode({ email, otp }, (token, user) => {
            handleUserLogin(token, user)
            closeModal()
        }, () => {
            setLoading(false)
        })
    }
    return (
        <Modal size='tiny' open={modalOpened}>
            <div style={{ padding: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>Entrez le code</h2>
                <form className='ui form' onSubmit={handleFormSubmit}>
                    <div className='field'>
                        <label htmlFor='otp'>Entrez le code que venez de recevoir par email: </label>
                        <input type='text' required id='otp' onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <Button role='submit' primary loading={loading}>Submit</Button>
                </form>
            </div>
        </Modal>
    )
}

export default OtpModal
