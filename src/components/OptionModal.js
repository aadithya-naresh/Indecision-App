import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app')

const OptionModal = (props)=>(
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Option selected"
    onRequestClose={props.handleSelectedOption}
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal