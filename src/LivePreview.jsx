import React, { useState } from 'react';


const LivePreview = ({ MainText, MainEText, description, imagePreview, imagePlacement }) => {
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
          <div className="main-textbox"
          style={{
            display: 'flex',
            flexDirection: imagePlacement === 'left' ? 'row-reverse' : 'row',
            
          }}
          >
            <div className="sub">
                <h1>{MainText}</h1>
                <p>{description}</p>
            </div>
           
            <div className="image-preview"
            style={{
                width: '400px',   
                height: '400px', 
                overflow: 'hidden', 
              }}
            >
                
            {imagePreview && (
              <img src={imagePreview} alt="Preview"  
              style={{
                width: '100%',   
                height: '100%',  
                objectFit: 'cover', 
              }}
              />
            )}
            
            </div>
            
          </div>
        )}
     </>
    );
};
  

export default LivePreview;
