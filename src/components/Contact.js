import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import ContactModal from './ContactModal.js'

class Contact extends Component {
  state = {
    open: true,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div className='contact'>
        <div onClick={this.onOpenModal}><span>Nous contacter</span></div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <ContactModal close={this.onCloseModal}/>
        </Modal>
      </div>
    )
  }
}

export default Contact