import React from 'react'

const Pass = ({handleValidation, handlePasswordChange, passwordValue, passwordError}) => {
  return (
    <>
    <div className="form-group my-3">
        <input style={{height: "1.6rem", backgroundColor: "transparent", border: "none", borderBottom: "2px", width: "15rem"}} type="password" value={passwordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="password" placeholder="Password" className="form-control" required/>
        <p className="text-danger">{passwordError}</p>

   </div>
          
        </>
  )
}

export default Pass
