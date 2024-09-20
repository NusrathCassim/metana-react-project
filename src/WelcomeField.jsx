import React, { useState } from 'react';

function WelcomeField({ setWelcomeContent }) {
  const [imagePreview, setImagePreview] = useState('');
  const [MainText, setMainText] = useState('Main Text');
  const [description, setDescription] = useState('Description');

  function handleInputChange(event) {
    const maintext = event.target.value;
    setMainText(maintext);
    setWelcomeContent((prevState) => ({
      ...prevState,  // Keep previous state
      MainText: maintext, // Update MainText
    }));
  }

  function handleDescriptionChange(event) {
    const newDescription = event.target.value;
    setDescription(newDescription);
    setWelcomeContent((prevState) => ({
      ...prevState,  // Keep previous state
      description: newDescription,  // Update description
    }));
  }

  function handleImagePlacement(event) {
    // Logic for image placement can be added here
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setWelcomeContent((prevState) => ({
        ...prevState,  // Keep previous state
        imageUrl,  // Update imageUrl
      }));
    }
  }

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="field-container">
          <h3>Welcome Screen Settings</h3>
          <input
            type="text"
            name="title"
            placeholder="Main Text"
            onChange={handleInputChange}
            value={MainText} // bind the input value to state
            className="input-field"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleDescriptionChange}
            value={description} // bind the textarea value to state
            className="input-field"
          />
          <div className="image-settings">
            <label>Image Placement</label>
            <select
              name="imagePlacement"
              onChange={handleImagePlacement}
              className="input-field"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="input-field"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeField;
