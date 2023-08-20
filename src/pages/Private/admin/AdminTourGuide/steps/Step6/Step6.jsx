import React from 'react';

function Step6() {
  return (
    <div>
        <div className="heading">

      <h1>Les couleurs de votre guide</h1>
      <p>Dans cette étape nous allons définir les couleurs de votre guide</p>
        </div>
      <div className="form">
        <div className="form-group-color">
            <label htmlFor="">Votre couleur primaire</label>
            <input defaultValue='#87CEFA' className="colorInput" type="color" />
        </div>
        <div className="form-group-color">
            <label htmlFor="">Votre couleur secondaire</label>
            <input defaultValue='#9370DB' className="colorInput" type="color" />
        </div>
        <div className="form-group-color">
            <label htmlFor="">Votre couleur tertiaire</label>
            <input defaultValue='#98FB98' className="colorInput" type="color" />
        </div>
        <div className="form-group-color">
            <label htmlFor="">Votre couleur quatertaire</label>
            <input defaultValue='#242629' className="colorInput" type="color" />
        </div>
        <div className="form-group-color">
            <label htmlFor="">Votre couleur danger</label>
            <input defaultValue='#B22222' className="colorInput" type="color" />
        </div>
        <div className="form-group-color">
            <label htmlFor="">Votre couleur Attention</label>
            <input defaultValue='#DAA520' className="colorInput" type="color" />
        </div>
        <div className="form-group-color">
            <label htmlFor="">Votre couleur OK</label>
            <input defaultValue='#228B22' className="colorInput" type="color" />
        </div>
      </div>
    </div>
  );
}

export default Step6;
