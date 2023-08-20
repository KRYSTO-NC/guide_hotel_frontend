import React, { useState } from 'react';
import './step4.css'
function Step4() {
  const [image, setImage] = useState(null); // Pour stocker l'image chargée

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload-container">
      <h2>Upload du logo de l'hôtel</h2>

      <input 
        type="file" 
        onChange={handleImageChange} 
        accept="image/*" 
      />

      {image && (
        <div className="image-preview">
          <img src={image} alt="Prévisualisation du logo de l'hôtel" />
        </div>
      )}
    </div>
  );
}

export default Step4;
