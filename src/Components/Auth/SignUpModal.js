import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { signUpUser } from '../../ApiRequests/User'

const SignUpModal = ({ openedModal, closeModal, showCodeModal, setFinalUserMail }) => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        signUpUser({ email, userName }, () => {
            setLoading(false)
            showCodeModal()
            setFinalUserMail(email)
        }, () => {
            setLoading(false)
        })
    }
    return (
        <Modal size='tiny' open={openedModal} onClose={closeModal} closeIcon>
            <div style={{ padding: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>Connexion</h2>
                <form className='ui form' onSubmit={handleFormSubmit}>
                    <div className='field'>
                        <label htmlFor='name'>Votre nom/pseudo: </label>
                        <input type='text' required id='name' onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor='email'>Votre adresse mail: </label>
                        <input type='email' required id='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <Button role='submit' primary loading={loading}>Submit</Button>
                    <Button color='red' onClick={closeModal}>Cancel</Button>
                </form>
            </div>
        </Modal>
    )
}

export default SignUpModal
