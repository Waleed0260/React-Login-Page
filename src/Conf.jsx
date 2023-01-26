import React from 'react'

const Conf = ({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError}) => {
  return (
    <>
    <div className="form-group my-3">
       <input style={{height: "1.6rem", backgroundColor: "transparent", border: "none", width: "15rem"}} type="password" value={confirmPasswordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="Confirm Password" className="form-control" />
       <p className="text-danger">{confirmPasswordError}</p>
   </div>
       </>
  )
}

export default Conf
