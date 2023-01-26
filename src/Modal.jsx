import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom/client'
import PortalReactDOM from 'react-dom'

const Modal = ({onClose, children, open}) => {
    if(!open) return null;



  return PortalReactDOM.createPortal(
    <>
    <OVERLAY_STYLES>
    <MODAL_STYLE>
      <button onClick={onClose}>Close</button>
      <br />
      {children}
    </MODAL_STYLE>
    </OVERLAY_STYLES>
    </>,
    document.getElementById("portal")
  )
}
const MODAL_STYLE = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
padding: 50px;
zIndex: 100;
border: 2px solid black;
border-radius: 5px;
`;

const OVERLAY_STYLES = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.7);
zIndex: 1000;
`;

export default Modal
