import React, { Fragment } from 'react'
import './Modal.css'
import ReactDom from 'react-dom';
const Backdrop=(props)=>{
    return <div className='backdrop' onClick={props.onClose}></div>
};
const ModalOverlay=(props)=>{
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}
const Modal = (props) => {
    const portalelement=document.getElementById('overlays')
  return (
    <Fragment>
       {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalelement)}
       {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
      
    </Fragment>
  )
}

export default Modal
