import React, { useState } from 'react';
import './step5.css'
function Step5() {
  const [coverImage, setCoverImage] = useState(null); // Pour stocker l'image de couverture chargée

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCoverImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="cover-upload-container">
      <h2>Upload de la couverture de l'hôtel</h2>

      <input 
        type="file" 
        onChange={handleCoverImageChange} 
        accept="image/*" 
      />

      {coverImage && (
        <div className="cover-preview">
          <img src={coverImage} alt="Prévisualisation de la couverture de l'hôtel" />
        </div>
      )}
    </div>
  );
}

export default Step5;
