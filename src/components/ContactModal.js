import React, { Component } from 'react'
import './style/ContactModal.css'

class ContactModal extends Component {
  state = {
    message: {
      nom: '',
      mail: '',
      objet: '',
      messageContent: '',
    },
    display: {
      displayForm: 'block',
      displayConfirm: 'none',
    },
    showMessage: '',
  }

  updateField = (event) => {
    this.setState({ message: { ...this.state.message, [event.target.name]: event.target.value } })
  }

  submit = (event) => {
    event.preventDefault()
    console.log(this.state.message)
      this.setState({
        display: {
          displayForm: 'none',
          displayConfirm: 'block',
        }, 
        showMessage: `Votre message à bien été envoyé
        Nous vous recontacterons dans les plus brefs delais.`,
        showError: '',
      })
  }

  render() {
    return (
      <div className='contact-modal'>
        <div><h1>Nous contacter</h1></div>
        <div style={{ display: this.state.display.displayForm }}>
          <div>
            <p>N’hésitez pas à nous envoyer directement un message au
          <br />
              <span>06 27 77 84 89</span>
            </p>
          </div>
          <form id='contact-form' className='contact-modal-form' 
          onSubmit={this.submit} >
            <input form='contact-form' type='text' name='nom' placeholder='Votre nom' onChange={this.updateField} required />
            <input form='contact-form' type='email' name='mail' placeholder='Votre adresse mail' onChange={this.updateField} required />
            <input form='contact-form' type='text' name='objet' placeholder='Objet de votre message' onChange={this.updateField} required />
            <textarea form='contact-form' placeholder='Votre message' onChange={this.updateField} name='messageContent' required />
            <button type='submit' form='contact-form' value='Envoyer'>Envoyer</button>
          </form>
        </div>
        <div style={{ display: this.state.display.displayConfirm, whiteSpace: 'pre-line' }}>
        <p>{this.state.showMessage}</p>
          <button onClick={this.props.close}>Retour au site</button>
        </div>

      </div>
    )
  }
}

export default ContactModal