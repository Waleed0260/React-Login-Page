import React, { useState } from "react";
import Conf from "./Conf";
import Modal from "./Modal";
import Pass from "./Pass";
import "./Val.css"



const Validate = () => {
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput]= useState({
        password:'',
        confirmPassword:''
    })
    const[done, setDone] = useState(false);
    const handlePasswordChange =(evnt)=>{
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
        const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
        setPasswordInput(NewPasswordInput);
    }
    const handleValidation= (evnt)=>{
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
            //for password 
    if(passwordInputFieldName==='password'){
        const passwordLength =      passwordInputValue.length;
        let errMsg ="";
        if(passwordLength < 8){
                errMsg="Password is not strong";
         }

        else{
            errMsg="";
        }
        setPasswordErr(errMsg);
        }
        // for confirm password
        if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
                
            if(passwordInput.confirmPassword!==passwordInput.password)
            {
            setConfirmPasswordError("Password is not matched");
            }else{
            setConfirmPasswordError("");
            }
            
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(passwordInput.confirmPassword==passwordInput.password){
            setDone(true);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    return (
    <div>
    <div className="row">
     <div className="col-sm-4" onSubmit={handleSubmit}>
        <form style={{display: "flex", flexDirection: "column", gap: "1.6rem", position: "relative", top: "1.5rem", left: "4rem"}}>
        <input style={{height: "1.6rem", backgroundColor: "transparent", border: "none", borderBottom: "2px", width: "15rem"}} type="text" name="" id="" placeholder="Name"/>
        <span style={{height: "1px", backgroundColor: "grey", marginTop: "-25px", width: "15rem"}}></span>
        <input style={{height: "1.6rem", backgroundColor: "transparent", border: "none", borderBottom: "2px", width: "15rem"}} type="email" name="" id="" placeholder="Email" required />
        <span style={{height: "1px", backgroundColor: "grey", marginTop: "-25px", width: "15rem"}}></span>

        <Pass
        handlePasswordChange={handlePasswordChange} 
        handleValidation={handleValidation} 
        passwordValue={passwordInput.password} 
        passwordError={passwordError}/>
        <span style={{height: "1px", backgroundColor: "grey", marginTop: "-35px", width: "15rem"}}></span>

        <Conf
        handlePasswordChange={handlePasswordChange} 
        handleValidation={handleValidation} 
        confirmPasswordValue={passwordInput.confirmPassword} 
        confirmPasswordError={confirmPasswordError}/>
        <span style={{height: "1px", backgroundColor: "grey", marginTop: "-35px", width: "15rem"}}></span>
        {/* <input type="submit" value="Submit"/> */}
        <button className="submit" style={{height: "40px", width: "70px", border: "none", borderRadius: "8px", color: "white", cursor: "pointer"}}
        disabled={passwordInput.confirmPassword!==passwordInput.password}
        >Submit</button>
        </form>
        <Modal open={done} onClose={()=>setDone(false)}>
            You were registered thanks for joining !!!
        </Modal>   
          </div>
    </div>
    </div>
  );
};

export default Validate;
