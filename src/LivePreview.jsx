import React, { useState } from 'react';


const LivePreview = ({ MainText, MainEText, description, imagePreview }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function handleEmailChange(e){
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        if (!validateEmail(inputEmail)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }


    return (
      <>
        {MainEText ? (
          <div className="main-textbox bx">
            <div className="sub">
            <h1>{MainEText}</h1>
            <p>{description}</p> 
            
            <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
                className="input-field"
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          
            </div>
            
          </div>
        ) : (
          <div className="main-textbox">
            <div className="sub">
                <h1>{MainText}</h1>
                <p>{description}</p>
            </div>
           
            
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            )}
          </div>
        )}
     </>
    );
};
  

export default LivePreview;
