import React, { useState } from 'react';
import WelcomeField from './WelcomeField';
import EmailField from './EmailFiel';
import LivePreview from './LivePreview';
import './Base.css';

function Base() {
    const [activeField, setActiveField] = useState(null);
    
    const [welcomeContent, setWelcomeContent] = useState({
        MainText: 'Main Text',
        description: 'Description',
        imageUrl: ''
    });
    
    const [emailContent, setEmailContent] = useState({
        MainEText: 'Main Text',
        description: 'Description',
        emailText: ''
    });

    const handleButtonClick = (field) => {
        setActiveField(field);
    };



    return (
        <div className="main-container-box">
            <div className="left-container-box">
                <h2>Start here</h2>
                <button onClick={() => handleButtonClick('welcome')}>Welcome Page</button>
                <button onClick={() => handleButtonClick('email')}>Email</button>

                <div className="sub-container">
                    {activeField === 'welcome' && (
                        <WelcomeField setWelcomeContent={setWelcomeContent} />
                    )}
                    {activeField === 'email' && (
                        <EmailField setEmailContent={setEmailContent} />
                    )}
                </div>
            </div>

            <div className="right-container-box">
                {activeField === 'welcome' && (
                    <LivePreview 
                        MainText={welcomeContent.MainText} 
                        description={welcomeContent.description} 
                        imagePreview={welcomeContent.imageUrl} 
                        imagePlacement={welcomeContent.imagePlacement}
                    />
                )}
                {activeField === 'email' && (
                    <LivePreview 
                        MainEText={emailContent.MainEText}
                        description={emailContent.description}
                        email={emailContent.emailText}
                        
                        imagePreview={null} // No image for email field
                    />
                )}
            </div>
        </div>
    );
}

export default Base;
