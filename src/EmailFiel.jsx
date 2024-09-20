import React, { useState } from 'react';

const EmailField = ({ setEmailContent }) => {
    
    const [MainEText, setEmailText] = useState('Main Text');
    const [description, setDescription] = useState('Description');
   

    

    const handleEmailText = (event) => {
        const newEmailText = event.target.value;
        setEmailText(newEmailText);
        setEmailContent((prevState) => ({
            ...prevState,
            MainEText: newEmailText
        }));
    };

    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setDescription(newDescription);
        setEmailContent((prevState) => ({
            ...prevState,
            description: newDescription
        }));
    };

    

    return (
        <div className="field-container">
            <h3>Email Field Settings</h3>
            <input
                type="text"
                name="title"
                placeholder="Main Text"
                onChange={handleEmailText}
                value={MainEText}
                className="input-field"
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleDescriptionChange}
                value={description}
                className="input-field"
            />
            
        </div>
    );
};

export default EmailField;
