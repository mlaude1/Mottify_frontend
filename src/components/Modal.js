import React, { useState } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const Modal = () => {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        <BsFillQuestionCircleFill size={40} />
      </button>

      {modal && (
        <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Instructions</h2>
            <ol>
              <li>Click on the <BsFillPlusCircleFill className="plus" size={20} /> button</li>
              <li>Fill in the corresponding data in the form</li>
                <ul>
                  <li>The Album Cover should be an image URL</li>
                  <li>For mp3 File, first upload an audio file to Cloudinary, then copy the link</li>
                </ul>
              <li>Press Create</li>
              <li>Enjoy your sounds!</li>
            </ol>
            <button onClick={toggleModal} className="close-modal"><RiCloseFill size={20} /></button>
          </div>
      </div>
      )}

      

    </div>
  )
}

export default Modal
